/**
 * Links Beauty & Health Center — App logic, navigation, i18n, animations
 */
(function () {
    'use strict';

    let currentLang = localStorage.getItem('links-lang') || 'en';
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

    function setLanguage(lang, silent) {
        if (lang !== 'en' && lang !== 'vn' && lang !== 'kr') return;
        currentLang = lang;
        localStorage.setItem('links-lang', lang);
        var btns = document.querySelectorAll('.lang-btn');
        btns.forEach(function (btn) {
            btn.classList.remove('active');
            if (btn.textContent.trim().toLowerCase() === lang) btn.classList.add('active');
        });
        function applyText() {
            document.querySelectorAll('[data-i18n]').forEach(function (el) {
                var key = el.getAttribute('data-i18n');
                if (window.translations && window.translations[lang] && window.translations[lang][key]) {
                    el.textContent = window.translations[lang][key];
                }
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
                var key = el.getAttribute('data-i18n-placeholder');
                if (window.translations && window.translations[lang] && window.translations[lang][key]) {
                    el.placeholder = window.translations[lang][key];
                }
            });
        }
        if (silent) {
            applyText();
        } else {
            gsap.to('body', {
                opacity: 0.5,
                duration: 0.2,
                onComplete: function () {
                    applyText();
                    gsap.to('body', { opacity: 1, duration: 0.3 });
                }
            });
        }
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
        if (brandId === 'hyzen') window.location.href = 'hyzen-products/hyzen.html';
        else if (brandId === 'olylife') window.location.href = 'olylife-products/olylife.html';
    }

    function navigateTo(pageId) {
        if (isMobileMenuOpen) toggleMobileMenu();
        var url;
        if (pageId === 'home') url = 'index.html';
        else if (pageId === 'hyzen') url = 'hyzen-products/hyzen.html';
        else if (pageId === 'hz1100') url = 'hyzen-products/hz1100.html';
        else if (pageId === 'olylife') url = 'olylife-products/olylife.html';
        else if (pageId === 'a9purifier') url = 'olylife-products/a9purifier.html';
        else url = pageId + '.html';
        var hash = window.location.hash || '';
        if (hash && pageId === 'home') url += hash;
        window.location.href = url;
    }

    /* ——— Hero banner carousel ——— */
    var bannerIndex = 0;
    var bannerTimer = null;
    var BANNER_AUTOPLAY_MS = 6000;

    function getBannerTrack() {
        var track = document.getElementById('banner-track');
        if (!track) return null;
        var slides = track.querySelectorAll('.banner-slide');
        return { track: track, slides: slides, total: slides.length };
    }

    function goBannerTo(index) {
        var b = getBannerTrack();
        if (!b || b.total === 0) return;
        bannerIndex = (index + b.total) % b.total;
        b.track.style.transform = 'translateX(-' + (bannerIndex * 100) + '%)';
        var dots = document.querySelectorAll('.banner-dot');
        dots.forEach(function (d, i) { d.classList.toggle('active', i === bannerIndex); });
        clearTimeout(bannerTimer);
        bannerTimer = setTimeout(function () { goBannerTo(bannerIndex + 1); }, BANNER_AUTOPLAY_MS);
    }

    function initBanner() {
        var b = getBannerTrack();
        if (!b || b.total === 0) return;
        var dotsEl = document.getElementById('banner-dots');
        if (dotsEl) {
            dotsEl.innerHTML = '';
            for (var i = 0; i < b.total; i++) {
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'banner-dot w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white/80 transition-all ' + (i === 0 ? 'active' : '');
                btn.setAttribute('aria-label', 'Slide ' + (i + 1));
                (function (idx) { btn.addEventListener('click', function () { goBannerTo(idx); }); })(i);
                dotsEl.appendChild(btn);
            }
        }
        document.getElementById('banner-prev') && document.getElementById('banner-prev').addEventListener('click', function () { goBannerTo(bannerIndex - 1); });
        document.getElementById('banner-next') && document.getElementById('banner-next').addEventListener('click', function () { goBannerTo(bannerIndex + 1); });
        goBannerTo(0);
    }

    /* ——— Products by category (Health | Beauty) ——— */
    var productsData = [
        { url: 'hyzen-products/hz1100.html', title: 'HZ-1100 Hydrogen Purifier', img: 'assets/hyzen-hz1100-hero.png', category: 'both', desc: 'High-density hydrogen water for home and office.' },
        { url: 'olylife-products/tera-p90.html', title: 'Tera P90+', img: 'https://image2url.com/r2/default/images/1770350200058-4a847531-723b-47cb-8896-6797576b1207.png', category: 'health', desc: 'Terahertz and PEMF for cellular energy.' },
        { url: 'olylife-products/vitality-wand.html', title: 'Vitality Wand', img: 'assets/olylife-vitality-wand.png', category: 'health', desc: 'Handheld wellness device for circulation.' },
        { url: 'olylife-products/a9purifier.html', title: 'A9 Smart Anion Air Purifier', img: 'https://image2url.com/r2/default/images/1770326292871-362bb113-0cf7-47e8-966e-ea7171a5ebe2.png', category: 'health', desc: 'Anion generation for respiratory wellness.' },
        { url: 'olylife-products/galaxy-g-one.html', title: 'Galaxy G-One', img: 'assets/olylife-galaxy-g-one.png', category: 'health', desc: 'Eye massager for relaxation and relief.' },
        { url: 'olylife-products/shaken-massager.html', title: 'OlyLife Shaken Massager', img: 'assets/olylife-shaken-massager.png', category: 'both', desc: 'PEMF massager for wellness and beauty.' },
        { url: 'hyzen-products/backgeum-cheon-soo.html', title: 'Backgeum Cheon-Soo', img: 'assets/backgeum-cheon-soo.png', category: 'health', desc: 'Premium sleep system for restorative rest.' },
        { url: 'hyzen-products/backgeum-plapin-cheon-soo.html', title: 'Backgeum Plapin Cheon-Soo', img: 'assets/backgeum-plapin-cheon-soo.png', category: 'health', desc: 'Advanced heat mat for sleep and wellness.' },
        { url: 'hyzen-products/hydrogen-mist.html', title: 'Hydrogen Water Mist', img: 'assets/hyzen-mist.png', category: 'beauty', desc: 'Hydrogen mist spray for skin wellness.' },
        { url: 'hyzen-products/hydrogen-tumbler.html', title: 'Hydrogen Water Tumbler', img: 'https://image2url.com/r2/default/images/1770409255553-45c5b747-7531-4a17-acc8-a6d5a2aaa1cd.png', category: 'beauty', desc: 'Portable hydrogen-rich water on the go.' },
        { url: 'hyzen-products/newpower-probiotics.html', title: 'Newpower Probiotics', img: 'assets/hyzen-newpower-probiotics.png', category: 'beauty', desc: 'Dietary supplement for immune and gut health.' },
        { url: 'hyzen-products/platino-graphene-patch.html', title: 'Platino Graphene Patch', img: 'assets/platino-graphene-patch.png', category: 'beauty', desc: 'Graphene patch for wellness support.' },
        { url: 'hyzen-products/platino-iondenti-toothpaste.html', title: 'Platino Iondenti Functional Toothpaste', img: 'assets/platino-iondenti-toothpaste.png', category: 'beauty', desc: 'Platinum-containing high-performance toothpaste for advanced oral care.' },
        { url: 'olylife-products/h-plus-bar.html', title: 'H+ Bar', img: 'assets/olylife-h-plus-bar.png', category: 'beauty', desc: 'Hydrogen bar for antioxidant support.' },
        { url: 'olylife-products/hydrogen-generator.html', title: 'Hydrogen Generator', img: 'assets/olylife-hydrogen-generator.png', category: 'beauty', desc: 'H₂ and O₂ inhalation for wellness.' },
        { url: 'olylife-products/skyline-sl6.html', title: 'Skyline SL6', img: 'assets/skyline-sl6.png', category: 'beauty', desc: 'Integrated wellness care system.' }
    ];

    function renderProducts(category) {
        var grid = document.getElementById('products-grid');
        if (!grid) return;
        var items = productsData.filter(function (p) {
            return category === 'all' || p.category === category || p.category === 'both';
        });
        grid.innerHTML = items.map(function (p) {
            return '<a href="' + p.url + '" class="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gray-100">' +
                '<div class="aspect-[4/3] overflow-hidden bg-brand-cream flex items-center justify-center p-4">' +
                '<img src="' + p.img + '" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" alt="' + p.title + '">' +
                '</div><div class="p-5">' +
                '<h3 class="font-semibold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">' + p.title + '</h3>' +
                '<p class="text-sm text-gray-600 product-desc">' + p.desc + '</p>' +
                '<span class="inline-flex items-center gap-1 mt-3 text-brand-gold font-medium text-sm">Learn More <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></span>' +
                '</div></a>';
        }).join('');
    }

    function initProducts() {
        var tabHealth = document.getElementById('tab-health');
        var tabBeauty = document.getElementById('tab-beauty');
        var tabs = document.querySelectorAll('.products-tab');
        if (!tabHealth || !tabBeauty) return;
        renderProducts('health');
        tabs.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var cat = this.getAttribute('data-category');
                tabs.forEach(function (t) { t.classList.remove('active', 'bg-brand-gold', 'text-white'); t.classList.add('text-gray-600', 'hover:bg-brand-cream'); });
                this.classList.add('active', 'bg-brand-gold', 'text-white');
                this.classList.remove('text-gray-600');
                renderProducts(cat);
            });
        });
        tabHealth.classList.add('bg-brand-gold', 'text-white');
        tabHealth.classList.remove('text-gray-600');
        tabBeauty.classList.add('text-gray-600', 'hover:bg-brand-cream');
    }

    /* ——— Search overlay (products only) ——— */
    var searchIndex = [
        { url: 'hyzen-products/hyzen.html', title: 'Hyzen', keywords: 'hyzen hydrogen wellness' },
        { url: 'hyzen-products/backgeum-cheon-soo.html', title: 'Backgeum Cheon-Soo', keywords: 'backgeum sleep bed mat' },
        { url: 'hyzen-products/backgeum-plapin-cheon-soo.html', title: 'Backgeum Plapin Cheon-Soo', keywords: 'backgeum plapin sleep bed' },
        { url: 'hyzen-products/hydrogen-mist.html', title: 'Hydrogen Water Mist', keywords: 'hydrogen mist spray skin hyzen' },
        { url: 'hyzen-products/hydrogen-tumbler.html', title: 'Hydrogen Water Tumbler', keywords: 'hydrogen tumbler bottle portable hyzen' },
        { url: 'hyzen-products/hz1100.html', title: 'HZ-1100 Hydrogen Purifier', keywords: 'hz1100 hydrogen purifier water hyzen' },
        { url: 'hyzen-products/newpower-probiotics.html', title: 'Newpower Probiotics', keywords: 'probiotics hyzen supplement' },
        { url: 'hyzen-products/platino-graphene-patch.html', title: 'Platino Graphene Patch', keywords: 'platino graphene patch hyzen' },
        { url: 'hyzen-products/platino-iondenti-toothpaste.html', title: 'Platino Iondenti Functional Toothpaste', keywords: 'platino iondenti toothpaste dental oral care hyzen' },
        { url: 'olylife-products/olylife.html', title: 'Olylife', keywords: 'olylife cellular terahertz pemf' },
        { url: 'olylife-products/a9purifier.html', title: 'A9 Smart Anion Air Purifier', keywords: 'a9 purifier anion air bama' },
        { url: 'olylife-products/tera-p90.html', title: 'Tera P90+', keywords: 'tera p90 terahertz pemf cellular' },
        { url: 'olylife-products/skyline-sl6.html', title: 'Skyline SL6', keywords: 'skyline sl6' },
        { url: 'olylife-products/vitality-wand.html', title: 'Vitality Wand', keywords: 'vitality wand olylife' },
        { url: 'olylife-products/galaxy-g-one.html', title: 'Galaxy G-One', keywords: 'galaxy g-one eye massager' },
        { url: 'olylife-products/shaken-massager.html', title: 'OlyLife Shaken Massager', keywords: 'shaken massager olylife head massage' },
        { url: 'olylife-products/h-plus-bar.html', title: 'H+ Bar', keywords: 'h+ bar hydrogen mret olylife' },
        { url: 'olylife-products/hydrogen-generator.html', title: 'Hydrogen Generator', keywords: 'hydrogen generator h2 o2 inhalation olylife' }
    ];

    function openSearch() {
        var overlay = document.getElementById('search-overlay');
        if (!overlay) return;
        overlay.classList.remove('pointer-events-none');
        overlay.style.opacity = '1';
        var input = document.getElementById('search-input');
        if (input) { input.value = ''; input.focus(); }
        runSearch('');
    }

    function closeSearch() {
        var overlay = document.getElementById('search-overlay');
        if (!overlay) return;
        overlay.classList.add('pointer-events-none');
        overlay.style.opacity = '0';
    }

    function runSearch(q) {
        var container = document.getElementById('search-results');
        if (!container) return;
        q = (q || '').toLowerCase().trim();
        var pathname = (window.location.pathname || '').replace(/^\//, '');
        var parts = pathname.split('/').filter(Boolean);
        var depth = Math.max(0, parts.length - 1);
        var base = depth === 0 ? '' : '../'.repeat(depth);

        function matchesItem(item) {
            if (!q) return true;
            var title = item.title.toLowerCase();
            var words = title.split(/\s+/);
            if (title.startsWith(q)) return true;
            if (words.some(function (w) { return w.startsWith(q); })) return true;
            if (title.indexOf(q) >= 0) return true;
            return false;
        }

        function scoreItem(item) {
            if (!q) return 0;
            var title = item.title.toLowerCase();
            var words = title.split(/\s+/);
            if (title.startsWith(q)) return 3;
            if (words.some(function (w) { return w.startsWith(q); })) return 2;
            if (title.indexOf(q) >= 0) return 1;
            return 0;
        }

        var items = searchIndex.filter(matchesItem)
            .sort(function (a, b) { return scoreItem(b) - scoreItem(a); });

        var noResultsText = (window.translations && window.translations[currentLang] && window.translations[currentLang]['no-results']) || 'No results found.';
        container.innerHTML = items.slice(0, 8).map(function (item) {
            var href = base + item.url;
            return '<a href="' + href + '" class="block px-4 py-3 text-left text-brand-navy hover:bg-brand-cream font-medium">' + item.title + '</a>';
        }).join('') || '<p class="px-4 py-3 text-gray-500 text-sm">' + noResultsText + '</p>';
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeSearch();
    });

    window.openSearch = openSearch;
    window.closeSearch = closeSearch;

    function initSearch() {
        var input = document.getElementById('search-input');
        if (input) input.addEventListener('input', function () { runSearch(this.value); });
        var overlay = document.getElementById('search-overlay');
        if (overlay) overlay.addEventListener('click', function (e) { if (e.target === overlay) closeSearch(); });
    }

    function initScrollMotion() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        var heroMotion = document.getElementById('hero-scroll-motion');
        var heroSection = document.getElementById('hero-section');
        if (heroMotion && heroSection) {
            gsap.to(heroMotion, {
                y: -120,
                scale: 0.96,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.2
                }
            });
        }
        var hyzen = document.getElementById('hyzen-sample');
        var olylife = document.getElementById('olylife-preview');
        var brands = document.getElementById('brands');
        if (hyzen && brands) {
            gsap.fromTo(hyzen, { x: -70, opacity: 0.7 }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: brands,
                    start: 'top 88%',
                    end: 'top 55%',
                    scrub: 1
                }
            });
        }
        if (olylife && brands) {
            gsap.fromTo(olylife, { x: 70, opacity: 0.7 }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: brands,
                    start: 'top 88%',
                    end: 'top 55%',
                    scrub: 1
                }
            });
        }
        var staySection = document.getElementById('stay-connected-section');
        var stayUp = staySection && staySection.querySelector('.scroll-motion-up');
        if (stayUp) {
            gsap.fromTo(stayUp, { y: 50, opacity: 0.5 }, {
                y: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: staySection,
                    start: 'top 90%',
                    end: 'top 62%',
                    scrub: 1
                }
            });
        }
        var contactSection = document.getElementById('contact');
        if (contactSection) {
            var contactInner = contactSection.querySelector('.container');
            if (contactInner) {
                gsap.fromTo(contactInner, { y: 40, opacity: 0.85 }, {
                    y: 0,
                    opacity: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: contactSection,
                        start: 'top 92%',
                        end: 'top 65%',
                        scrub: 1
                    }
                });
            }
        }
    }

    function initAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('nav', { y: -100, opacity: 0, duration: 1, ease: 'power3.out' });
        var revealEls = document.querySelectorAll('.reveal');
        [].forEach.call(revealEls, function (elem) {
            if (elem.classList.contains('scroll-motion-left') || elem.classList.contains('scroll-motion-right') || elem.classList.contains('scroll-motion-up')) return;
            var delay = parseFloat(elem.getAttribute('data-delay')) || 0;
            gsap.to(elem, {
                scrollTrigger: { trigger: elem, start: 'top 85%', toggleActions: 'play none none none' },
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: delay,
                ease: 'power2.out'
            });
        });
        initScrollMotion();
        setTimeout(function () { ScrollTrigger.refresh(); }, 300);
    }

    window.showStatusMessage = showStatusMessage;
    window.setLanguage = setLanguage;
    window.toggleMobileMenu = toggleMobileMenu;
    window.scrollToBrand = scrollToBrand;
    window.navigateTo = navigateTo;

    function initNavScroll() {
        var nav = document.getElementById('navbar');
        if (!nav) return;
        function onScroll() {
            if (window.scrollY > 20) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    function initPage() {
        var savedLang = localStorage.getItem('links-lang') || 'en';
        currentLang = savedLang;
        setLanguage(savedLang, true);
        initBanner();
        initProducts();
        initSearch();
        initNavScroll();
        initAnimations();
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPage);
    } else {
        initPage();
    }
})();
