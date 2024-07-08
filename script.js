/* Dropdown menu */
const menuIcon = document.getElementById('hamburger');
const nav = document.getElementById('nav');

function dropdown() {
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark');
  nav.style.display == 'flex' ? nav.style.display = 'none' : nav.style.display = 'flex';
};

menuIcon.addEventListener('click', dropdown);

/* Modal and slideshow */
const galleryImg = document.getElementsByClassName('galleryImg');
const modal = document.getElementsByClassName('modal');
const modalClose = document.getElementsByClassName('modalClose');

for (let i = 0; i < galleryImg.length; i++){
  function openModal(){
    modal[i].classList.add('modalActive');
  }
  galleryImg[i].addEventListener('click', openModal);

  function closeModal(){
    modal[i].classList.remove('modalActive');
  }
  modalClose[i].addEventListener('click', closeModal);
};
