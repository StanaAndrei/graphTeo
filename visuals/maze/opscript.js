let genBtn = document.querySelector('#submit');
let radio15 = document.querySelector('#op1');
var frames;
const DEBUG = true;
genBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (radio15.checked) {
        frames = 15;
        let mazeURL = new String();
        mazeURL += window.location.hostname;
        if (DEBUG) {
            mazeURL += ':5500';
        }
        mazeURL += '/visuals/maze/maze.html';
        window.location.href = mazeURL;
    }//*/
})
