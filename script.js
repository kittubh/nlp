document.addEventListener('DOMContentLoaded', function () {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = navMenu.querySelectorAll('a');

  mobileToggle.addEventListener('click', function () {
    navMenu.classList.toggle('open');
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
});
