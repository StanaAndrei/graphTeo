let genBtn = document.querySelector('#submit');
let radio15 = document.querySelector('#op1');
var frames;
const DEBUG = false;
genBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (radio15.checked) {
        frames = 15;
        let mazeURL = new String();
        mazeURL += window.location.hostname;
        console.log(window.location.hostname);
        if (DEBUG) {
            mazeURL += ':5500';
        }
        mazeURL += '/graphTeo/visuals/maze/maze.html';
        window.location.href = mazeURL;
    }//*/
})
