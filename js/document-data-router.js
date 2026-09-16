(function () {
  'use strict';

  var selfSrc = (document.currentScript && document.currentScript.src) || new URL('js/document-data-router.js', document.baseURI).href;
  var dataBase = new URL('../data/', selfSrc);

  function loadJson(url) {
    return fetch(url, { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status + ' for ' + url);
      return r.json();
    });
  }

  function queryKey() {
    var q = new URLSearchParams(location.search);
    var documentNumber = q.get('documentNumber') || '';
    var subscriptionNumber = q.get('subscriptionNumber') || '';
    return documentNumber && subscriptionNumber ? documentNumber + '|' + subscriptionNumber : '';
  }

  function text(el, value) {
    if (!el) return;
    el.textContent = value == null ? '' : String(value);
  }

  function severity(tag, value) {
    if (!tag) return;
    ['p-tag-success', 'p-tag-danger', 'p-tag-warn', 'p-tag-info', 'p-tag-secondary', 'p-tag-contrast'].forEach(function (c) {
      tag.classList.remove(c);
    });
    tag.classList.add('p-tag-' + (value || 'success'));
  }

  function updateField(labelText, value) {
    var labels = Array.prototype.slice.call(document.querySelectorAll('.field-label'));
    labels.forEach(function (label) {
      if ((label.textContent || '').trim() !== labelText) return;
      var fieldContent = label.closest('.field-content') || label.parentElement;
      var valueEl = fieldContent && fieldContent.querySelector('.field-value');
      if (valueEl) text(valueEl, value);
    });
  }

  function updateStatus(data) {
    var labels = Array.prototype.slice.call(document.querySelectorAll('.field-label'));
    var label = labels.find(function (x) { return (x.textContent || '').trim() === 'حالة الوثيقة'; });
    if (!label) return;
    var fieldContent = label.closest('.field-content') || label.parentElement;
    var tags = fieldContent ? fieldContent.querySelectorAll('p-tag') : [];
    if (tags[0]) {
      var t1 = tags[0].querySelector('.p-tag-label');
      text(t1, data.orderStatusName || '');
      severity(tags[0], data.orderStatusSeverity || 'success');
    }
    if (tags[1]) {
      var t2 = tags[1].querySelector('.p-tag-label');
      text(t2, data.validityText || (data.isExpired ? 'منتهي' : 'سارى'));
      severity(tags[1], data.validitySeverity || (data.isExpired ? 'danger' : 'success'));
    }
  }

  function downloadButton() {
    return Array.prototype.slice.call(document.querySelectorAll('button')).find(function (btn) {
      return (btn.textContent || '').replace(/\s+/g, ' ').trim().indexOf('تحميل الوثيقة') !== -1;
    });
  }

  function wireDownload(data) {
    var btn = downloadButton();
    if (!btn) return;
    btn.disabled = !data.pdfFile;
    if (!data.pdfFile) return;
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      var a = document.createElement('a');
      a.href = new URL(String(data.pdfFile), dataBase).href;
      a.download = data.pdfDownloadName || data.pdfFile;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }, true);
  }

  function apply(data) {
    var fields = {
      'اسم الغرفة': 'chamberName',
      'الخدمة': 'serviceName',
      'رقم الوثيقة': 'documentNumber',
      'مقدم الطلب': 'createdBy',
      'اسم المنشأة': 'entityFullName',
      'رقم العضوية': 'subscriptionNumber',
      'الرقم الموحد': 'crNationalNumber',
      'تاريخ ووقت الإنشاء': 'createdDate'
    };
    Object.keys(fields).forEach(function (label) { updateField(label, data[fields[label]]); });
    updateStatus(data);
    wireDownload(data);
    document.documentElement.setAttribute('data-local-document-id', data.documentNumber || '');
  }

  function clearDynamicData() {
    ['اسم الغرفة','الخدمة','رقم الوثيقة','مقدم الطلب','اسم المنشأة','رقم العضوية','الرقم الموحد','تاريخ ووقت الإنشاء'].forEach(function (label) {
      updateField(label, '');
    });
    updateStatus({ orderStatusName: '', validityText: '', orderStatusSeverity: 'secondary', validitySeverity: 'secondary' });
    var btn = downloadButton();
    if (btn) btn.disabled = true;
  }

  function start() {
    var key = queryKey();
    if (!key) {
      clearDynamicData();
      return;
    }
    loadJson(new URL('routes.json', dataBase).href)
      .then(function (routes) {
        var id = routes[key];
        if (!id) throw new Error('No route for ' + key);
        return loadJson(new URL(String(id) + '.json', dataBase).href);
      })
      .then(apply)
      .catch(function (err) {
        console.error('[local document router]', err);
        clearDynamicData();
      });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
