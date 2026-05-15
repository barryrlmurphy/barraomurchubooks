/* contact.js — contact page form behaviour */

(function () {
  /* --- Enquiry type toggle --- */
  var kindBtns = document.querySelectorAll('.contact-kind-btn');
  kindBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      kindBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });

  /* --- Form submit → success screen --- */
  var form    = document.getElementById('contact-form');
  var formEl  = document.querySelector('.contact-form-inner');
  var success = document.querySelector('.contact-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (formEl)  formEl.style.display  = 'none';
      if (success) success.classList.add('visible');
    });
  }

  /* --- "Back to the books" button inside success screen --- */
  var backBtn = document.getElementById('success-back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', function () {
      /* relative path works from pages/contact.html */
      window.location.href = backBtn.dataset.href || '../index.html';
    });
  }
})();
