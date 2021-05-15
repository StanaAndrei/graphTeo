let fromtb = document.querySelector('#from');
let totb = document.querySelector('#to');
let button = document.querySelector('button');
const arrow = '➝';

button.addEventListener('click', async event => {
    event.preventDefault();
    let from = fromtb.value;
    let to = totb.value;
    let link = await getLink(from, to);
    //alert(link);
})
