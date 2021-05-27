"use strict";
const buttons = document.querySelectorAll('.mainmenu > .button');
const iniCol = buttons[0].style.backgroundColor;
const DEBUG = Boolean(window.location.href.search('https') === -1);
const pages = [
    './pages/theo/theory.html',
    './pages/pbs/pbs.html',
    './pages/visuals/visuals.html'
];

window.onload = async () => {
    if (!DEBUG) {
        pages.map(page => '/graphTeo/' + page);
    }
    console.log('works');
    await loadPartials();
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        button.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = 'blue';
        });
        button.addEventListener('mouseout', event => {
            event.target.style.backgroundColor = iniCol;
        });
        button.addEventListener('click', event => {
            window.location.assign(pages[i]);
        });
    }
}
