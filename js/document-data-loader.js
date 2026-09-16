(function () {
  'use strict';

  var DEFAULT_ID = '202-25305';

  function getDocumentId() {
    var q = new URLSearchParams(window.location.search || '');
    var id = (q.get('id') || DEFAULT_ID).trim();
    // Keep filenames simple and safe for GitHub Pages / Five Server.
    if (!/^[A-Za-z0-9._-]+$/.test(id)) return DEFAULT_ID;
    return id;
  }

  function dataBaseUrl() {
    return new URL('data/', document.baseURI);
  }

  function setField(name, value) {
    var node = document.querySelector('[data-doc-field="' + name + '"]');
    if (node) node.textContent = value == null ? '' : String(value);
  }

  function wireDownload(data, id) {
    var btn = Array.prototype.slice.call(document.querySelectorAll('button')).find(function (b) {
      return (b.textContent || '').replace(/\s+/g, ' ').trim().indexOf('تحميل الوثيقة') !== -1;
    });
    if (!btn) return;

    var file = String(data.pdfFile || (id + '.pdf')).replace(/^\/+/, '');
    btn.disabled = false;
    btn.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      var a = document.createElement('a');
      a.href = new URL(file, dataBaseUrl()).href;
      a.download = file.split('/').pop() || (id + '.pdf');
      document.body.appendChild(a);
      a.click();
      a.remove();
      return false;
    };
  }

  async function init() {
    var id = getDocumentId();
    try {
      var jsonUrl = new URL(id + '.json', dataBaseUrl());
      var res = await fetch(jsonUrl.href, { cache: 'no-store' });
      if (!res.ok) throw new Error('Data file not found: ' + jsonUrl.href + ' (' + res.status + ')');
      var data = await res.json();

      [
        'chamberName', 'service', 'documentNumber', 'applicantName',
        'facilityName', 'membershipNumber', 'unifiedNumber', 'createdAt',
        'statusAccepted', 'statusValidity'
      ].forEach(function (name) { setField(name, data[name]); });

      wireDownload(data, id);
      document.documentElement.setAttribute('data-document-loaded', id);
    } catch (err) {
      console.error('[document-data-loader]', err);
      document.documentElement.setAttribute('data-document-error', '1');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
