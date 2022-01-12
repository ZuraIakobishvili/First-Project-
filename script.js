const hamburger = document.getElementById('hamburger');
const navUL =  document.getElementById('navigation-ul');

hamburger.addEventListener('click', ()=>{
  navUL.classList.toggle('show');
});