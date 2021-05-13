let genBtn = document.querySelector('#submit');
let radio5 = document.querySelector('#op1');
let mazeURL = '/visuals/maze/maze.html';
const DEBUG = Boolean(window.location.href.search('https') === -1);
if (!DEBUG) {
    mazeURL = '/graphTeo' + mazeURL;
}
genBtn.addEventListener('click', (e) => {

    e.preventDefault();
    let storage = window.localStorage;
    if (radio5.checked) {
        storage.setItem('frames', '5');
    } else {
        storage.removeItem('frames');
    }
    window.location.replace(mazeURL);
})

const check = () => {
    if (typeof Storage == undefined) {
        alert('Your browser does not support local storage, you will be redirected to a maze generated with default settings!');
        window.location.replace(mazeURL);
    }
}
check();