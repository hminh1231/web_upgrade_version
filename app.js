/**
 * Links Beauty & Health Center — App logic, navigation, i18n, animations
 */
(function () {
    'use strict';

    let currentLang = 'en';
    let isMobileMenuOpen = false;

    function showStatusMessage(msg) {
        const toast = document.getElementById('status-toast');
        if (!toast) return;
        toast.textContent = msg;
        gsap.to(toast, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out' });
        setTimeout(function () {
            gsap.to(toast, { y: 100, opacity: 0, duration: 0.5 });
        }, 3000);
    }

    function setLanguage(lang) {
        currentLang = lang;
        var btns = document.querySelectorAll('.lang-btn');
        btns.forEach(function (btn) {
            btn.classList.remove('active');
            if (btn.textContent.trim().toLowerCase() === lang) btn.classList.add('active');
        });
        gsap.to('body', {
            opacity: 0.5,
            duration: 0.2,
            onComplete: function () {
                document.querySelectorAll('[data-i18n]').forEach(function (el) {
                    var key = el.getAttribute('data-i18n');
                    if (window.translations && window.translations[lang] && window.translations[lang][key]) {
                        el.textContent = window.translations[lang][key];
                    }
                });
                gsap.to('body', { opacity: 1, duration: 0.3 });
            }
        });
    }

    function toggleMobileMenu() {
        var menu = document.getElementById('mobile-menu');
        var icon = document.getElementById('menu-icon');
        if (!menu || !icon) return;
        if (!isMobileMenuOpen) {
            menu.style.display = 'flex';
            gsap.to(menu, { height: '100vh', opacity: 1, duration: 0.5, ease: 'power2.out' });
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
        } else {
            gsap.to(menu, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in',
                onComplete: function () { menu.style.display = 'none'; }
            });
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />';
        }
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    function scrollToBrand(brandId) {
        if (isMobileMenuOpen) toggleMobileMenu();
        if (brandId === 'hyzen') navigateTo('hyzen');
        else if (brandId === 'olylife') navigateTo('olylife');
    }

    function navigateTo(pageId) {
        if (isMobileMenuOpen) toggleMobileMenu();
        var currentActive = document.querySelector('.page-content.active');
        var targetPage = document.getElementById('page-' + pageId);
        if (!targetPage || currentActive === targetPage) return;
        gsap.to(currentActive, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            onComplete: function () {
                currentActive.classList.remove('active');
                targetPage.classList.add('active');
                window.scrollTo(0, 0);
                gsap.fromTo(targetPage, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
                if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
            }
        });
    }

    function initAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline();
        tl.from('nav', { y: -100, opacity: 0, duration: 1, ease: 'power3.out' })
          .from('#hero-text > span', { opacity: 0, y: 20, duration: 0.5 })
          .from('#hero-text h1', { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
          .from('#hero-image', { opacity: 0, scale: 0.9, duration: 1.2, ease: 'power4.out' }, '-=1');
        var revealEls = document.querySelectorAll('.reveal');
        [].forEach.call(revealEls, function (elem) {
            gsap.to(elem, {
                scrollTrigger: { trigger: elem, start: 'top 85%', toggleActions: 'play none none none' },
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out'
            });
        });
    }

    window.showStatusMessage = showStatusMessage;
    window.setLanguage = setLanguage;
    window.toggleMobileMenu = toggleMobileMenu;
    window.scrollToBrand = scrollToBrand;
    window.navigateTo = navigateTo;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
        initAnimations();
    }
})();
