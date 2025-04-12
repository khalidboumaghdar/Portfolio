function toggleDarkMode() {
    const element = document.body;

    const isDark = element.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

    const toggleClass = (el, className) => {
        if (el) el.classList.toggle(className);
    };

    const idsToToggle = [
        'sectiondarkmode', 'icondark', 'icon2dak', 'h1darkmode', 'spandarkmode',
        'imgwhite', 'imagedark', 'dark-modetitle', 'darkmodehr', 'backenddarkmode',
        'iddarkdb', 'iddarkfront', 'mobiledark', 'darkportfolio', 'darkdes',
        'otiledark', 'icondarktoll', 'darkhr', 'darksuiv', 'darkfooter'
    ];

    idsToToggle.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        if (id === 'imgwhite') {
            toggleClass(el, 'imgwhite1');
        } else if (id === 'imagedark') {
            toggleClass(el, 'imagedark1');
        } else if (['icondark', 'icon2dak', 'h1darkmode', 'spandarkmode'].includes(id)) {
            toggleClass(el, 'icondark');
        } else {
            toggleClass(el, 'dark-modetitle');
        }
    });

    const darkElements = document.getElementsByClassName('dark');
    for (let i = 0; i < darkElements.length; i++) {
        toggleClass(darkElements[i], 'dark-modetitle');
    }

    const linkElements = document.getElementsByClassName('link');
    for (let i = 0; i < linkElements.length; i++) {
        toggleClass(linkElements[i], 'dark-modetitle');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("darkMode") === "enabled") {
        toggleDarkMode();
    }
});
