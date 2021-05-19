"use strict";
const buttons = document.querySelectorAll('.mainmenu > .button');
const iniCol = buttons[0].style.backgroundColor;
const mPages = [
    ''
];

const loadPartials= async () => {
    let partials = document.querySelectorAll('.partial');
    for (let partial of partials) {
        const path = partial.getAttribute('data-path');
        let res = await fetch(path);
        let text = await res.text();
        partial.innerHTML = text;//*/.
    }
}

window.onload = async () => {
    console.log('works');
    await loadPartials();
    for (let button of buttons) {
        button.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'blue';
        });
        button.addEventListener('mouseout', (event) => {
            event.target.style.backgroundColor = iniCol;
        });
        button.addEventListener('click', (event) => {
            
        });
    }
}
