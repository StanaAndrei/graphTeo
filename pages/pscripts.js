let navIsOpen = false;
let span = document.querySelector('span');
let iniState = span.style.display;
let closeBtn = document.querySelector('.closebtn');

const openNav = () => {
  document.getElementById('mySidenav').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
  document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  navIsOpen = true;
  span.style.display = 'none';
};

const closeNav = () => {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
  document.body.style.backgroundColor = 'white';
  navIsOpen = false;
  span.style.display = iniState;
};

const addCls = query => {
  let elems = document.querySelectorAll(query);
  for (let elem of elems) {
    elem.classList.add('title');
  }
}

const addIDs = () => {
  let titles = document.querySelectorAll('.title');
  for (let title of titles) {
    title.id = title.innerText.toLowerCase();
  }
}

const updateNav = () => {
  let sidenav = document.querySelector('#mySidenav');
  let titles = document.querySelectorAll('.title');
  for (let title of titles) {
    let node = document.createElement('a');
    node.href = '#' + title.id;
    node.innerText = title.id;
    sidenav.appendChild(node)
  }
}

window.onload = () => {
  span.addEventListener('click', openNav);
  closeBtn.addEventListener('click', closeNav);
  addCls('.subtitle');
  addCls('.bigt');
  addIDs();
  console.assert(document.querySelector('#terminologie') != undefined);
  updateNav();
}