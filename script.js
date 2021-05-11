"use strict";

const loadPartial = async partialName => {
    let filePath = new String();
    filePath += './pages/partials/';
    filePath += partialName;
    filePath += '.html';
    let res = await fetch(filePath);
    let text = await res.text();
    document.querySelector('.' + partialName).innerHTML = text;
}

window.onload = async () => {
    console.log('works');
    await loadPartial('footer');

}