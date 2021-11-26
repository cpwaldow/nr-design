function scrollTop() {
  let logo = document.querySelector('.logo');
  logo.addEventListener('click', (event) => {
    event.preventDefault();
    window.scroll({ top: 0, behavior: 'smooth' });
  });
}

if (window.SimpleSlide) {
  new SimpleSlide({
    slide: 'quote',
    time: 5000,
  });

  new SimpleSlide({
    slide: 'portifolio',
    time: 5000,
    nav: true,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}

const getBtn = document.querySelectorAll('.btn');

function btnAlerContact() {
  for (let index = 0; index < getBtn.length; index += 1) {
    getBtn[index].addEventListener('click', (event) => {
      event.preventDefault();
      alert('Entre em contato pelo e-mail nathaliemiras2@gmail.com');
    });
  }
}

scrollTop();
btnAlerContact();
