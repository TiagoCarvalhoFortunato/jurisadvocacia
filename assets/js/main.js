/* =========================================================
   VANGUARD ADVOCACIA — main.js
   1. AOS init
   2. Header scroll behavior
   3. Mobile menu toggle
   4. Particles (hero background)
   5. Swiper (testimonials)
   6. GLightbox (gallery)
   7. Smooth-scroll close mobile menu on nav click
   ========================================================= */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initAOS();
    initHeaderScroll();
    initMobileMenu();
    initParticles();
    initTestimonialsSwiper();
    initGalleryLightbox();
    initFooterYear();
    initContactForm();
  });

  function initAOS() {
    if (typeof window.AOS === 'undefined') return;
    window.AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
    });
  }

  function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');
    if (!toggle || !menu) return;

    const close = () => {
      menu.classList.remove('open');
      if (iconOpen && iconClose) {
        iconOpen.style.display = '';
        iconClose.style.display = 'none';
      }
    };

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      if (iconOpen && iconClose) {
        iconOpen.style.display = isOpen ? 'none' : '';
        iconClose.style.display = isOpen ? '' : 'none';
      }
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
  }

  function initParticles() {
    if (typeof window.particlesJS === 'undefined') return;
    window.particlesJS('tsparticles', {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: '#c5a059' },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#c5a059',
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'bounce',
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }

  function initTestimonialsSwiper() {
    if (typeof window.Swiper === 'undefined') return;
    const el = document.querySelector('.testimonials-swiper');
    if (!el) return;
    new window.Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  function initGalleryLightbox() {
    if (typeof window.GLightbox === 'undefined') return;
    window.GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
    });
  }

  function initFooterYear() {
    const el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  function initContactForm() {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('contact-success');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        area: form.area.value,
        message: form.message.value.trim(),
      };

      // No backend yet — open WhatsApp with the message pre-filled.
      const text =
        `Olá! Meu nome é ${data.name}.%0A` +
        `Email: ${data.email}%0A` +
        (data.phone ? `Telefone: ${data.phone}%0A` : '') +
        `Área: ${data.area}%0A%0A${encodeURIComponent(data.message)}`;
      window.open(`https://wa.me/5500000000000?text=${text}`, '_blank', 'noopener');

      form.reset();
      if (success) {
        success.classList.add('show');
        setTimeout(() => success.classList.remove('show'), 6000);
      }
    });
  }
})();
