// ============================================================
// ПрофиКвиз — JS лендинга
// Всё в IIFE, чтобы не загрязнять глобал при встраивании в Тильду.
// ============================================================

(function () {
  'use strict';

  // ─── Бургер-меню в шапке (видно на ≤860px) ───
  var header = document.querySelector('.pq-header');
  var burger = header && header.querySelector('.pq-header__burger');
  var nav = header && header.querySelector('.pq-header__nav');

  if (header && burger && nav) {
    var setOpen = function (open) {
      header.classList.toggle('is-menu-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    };

    burger.addEventListener('click', function () {
      setOpen(!header.classList.contains('is-menu-open'));
    });

    // Клик по ссылке — закрываем меню (на десктопе это безвредно)
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    // Esc закрывает меню
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('is-menu-open')) {
        setOpen(false);
        burger.focus();
      }
    });
  }
})();
