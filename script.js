"use strict";

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

}