(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('twist-lang'); } catch (e) {}
  var param = new URLSearchParams(location.search).get('lang');
  var lang = param || saved || ((navigator.language || 'en').toLowerCase().indexOf('ar') === 0 ? 'ar' : 'en');
  function set(l) {
    root.lang = l; root.dir = l === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem('twist-lang', l); } catch (e) {}
  }
  set(lang === 'ar' ? 'ar' : 'en');
  document.querySelectorAll('.lang').forEach(function (b) {
    b.addEventListener('click', function () { set(root.lang === 'ar' ? 'en' : 'ar'); });
  });
})();
