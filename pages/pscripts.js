let navIsOpen = false;
let span = document.querySelector('span');
let iniState = span.style.display;
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
