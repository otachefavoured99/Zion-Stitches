document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('header').forEach(function (header) {
        var toggle = header.querySelector('.nav-toggle');
        var navigation = header.querySelector('nav');

        if (!toggle || !navigation) {
            return;
        }

        navigation.id = 'site-navigation';
        navigation.setAttribute('aria-hidden', 'true');

        toggle.addEventListener('click', function () {
            var isOpen = header.classList.toggle('menu-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
            toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
            navigation.setAttribute('aria-hidden', String(!isOpen));
        });

        navigation.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                header.classList.remove('menu-open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Open navigation menu');
                navigation.setAttribute('aria-hidden', 'true');
            });
        });
    });
});
