(function () {
  'use strict';

  // Capture the loader URL now; document.currentScript becomes null later.
  var LOADER_SRC = document.currentScript && document.currentScript.src
    ? document.currentScript.src
    : '';

  var FIELD_NAMES = [
    'chamberName', 'service', 'documentNumber', 'applicantName',
    'facilityName', 'membershipNumber', 'unifiedNumber', 'createdAt',
    'statusAccepted', 'statusValidity'
  ];

  function isVerificationRoute() {
    return /\/document-verification\/?$/i.test(window.location.pathname || '');
  }

  function normalizeVisibleUrl() {
    // GitHub Pages serves a directory as /document-verification/.
    // After it loads, hide that trailing slash so the address looks exactly like:
    // document-verification?documentNumber=...&subscriptionNumber=...
    var path = window.location.pathname || '';
    if (/\/document-verification\/$/i.test(path)) {
      var cleanPath = path.slice(0, -1);
      try {
        history.replaceState(null, document.title, cleanPath + window.location.search + window.location.hash);
      } catch (_) {}
    }
  }

  function getParams() {
    var q = new URLSearchParams(window.location.search || '');
    return {
      documentNumber: (q.get('documentNumber') || '').trim(),
      subscriptionNumber: (q.get('subscriptionNumber') || '').trim()
    };
  }

  function safeKey(value) {
    return /^[A-Za-z0-9._-]+$/.test(value || '') ? value : '';
  }

  function dataBaseUrl() {
    // Resolve /data relative to the loader itself, not relative to the current route.
    // This works at /test/ and /test/document-verification/ and under any repo name.
    if (LOADER_SRC) return new URL('../data/', LOADER_SRC);
    return new URL('data/', document.baseURI);
  }

  function setField(name, value) {
    var node = document.querySelector('[data-doc-field="' + name + '"]');
    if (node) node.textContent = value == null ? '' : String(value);
  }

  function clearFields() {
    FIELD_NAMES.forEach(function (name) { setField(name, ''); });
    document.documentElement.removeAttribute('data-document-loaded');
    document.documentElement.removeAttribute('data-document-error');
  }

  function findDownloadButton() {
    return Array.prototype.slice.call(document.querySelectorAll('button')).find(function (b) {
      return (b.textContent || '').replace(/\s+/g, ' ').trim().indexOf('تحميل الوثيقة') !== -1;
    });
  }

  function disableDownload() {
    var btn = findDownloadButton();
    if (!btn) return;
    btn.disabled = true;
    btn.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
  }

  function wireDownload(data, subscriptionNumber) {
    var btn = findDownloadButton();
    if (!btn) return;

    var file = String(data.pdfFile || (subscriptionNumber + '.pdf')).replace(/^\/+/, '');
    btn.disabled = false;
    btn.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      var a = document.createElement('a');
      a.href = new URL(file, dataBaseUrl()).href;
      a.download = file.split('/').pop() || (subscriptionNumber + '.pdf');
      document.body.appendChild(a);
      a.click();
      a.remove();
      return false;
    };
  }

  async function loadBySubscription(subscriptionNumber) {
    var key = safeKey(subscriptionNumber);
    if (!key) throw new Error('Invalid subscriptionNumber');

    var jsonUrl = new URL(key + '.json', dataBaseUrl());
    var res = await fetch(jsonUrl.href, { cache: 'no-store' });
    if (!res.ok) throw new Error('Data file not found: ' + jsonUrl.href + ' (' + res.status + ')');
    var data = await res.json();

    FIELD_NAMES.forEach(function (name) { setField(name, data[name]); });
    wireDownload(data, key);
    document.documentElement.setAttribute('data-document-loaded', key);
  }

  async function init() {
    clearFields();
    disableDownload();

    // Root URL such as /test/ is deliberately a blank viewer.
    // Data loads only on /document-verification with a subscriptionNumber.
    if (!isVerificationRoute()) return;

    var params = getParams();
    if (!params.subscriptionNumber) return;

    try {
      await loadBySubscription(params.subscriptionNumber);
    } catch (err) {
      console.error('[document-data-loader]', err);
      clearFields();
      disableDownload();
      document.documentElement.setAttribute('data-document-error', '1');
    } finally {
      normalizeVisibleUrl();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
