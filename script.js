"use strict";
const buttons = document.querySelectorAll('.mainmenu > .button');
const iniCol = buttons[0].style.backgroundColor;
const mPages = [
    ''
];

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
