"use strict";

const loadPartial = (fileName) => {
    let filePath = new String();
    filePath += './pages/partials/';
    filePath += fileName;
    filePath += '.html';
    fetch(filePath)
        .then((res) => {
            return res.text();
        })
        .then((html) => {
            let doc = new DOMParser().parseFromString(html, 'text/html');
            console.log(doc);
        }).catch((err) => {
            console.error(err);
        });
}

window.onload = async () => {
    console.log('works');
    loadPartial('footer');

}