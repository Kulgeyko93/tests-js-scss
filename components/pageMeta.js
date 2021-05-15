
const pageMeta = (data) => {
  const header__logo = document.querySelector('.header__logo');
  const footer__descriptions = document.querySelector('.footer__descriptions');

  footer__descriptions.innerHTML = `<h5>${data.page_meta.title}</h5>`
  
  header__logo.innerHTML = `<h1>${data.page_meta.h1}</h1>`

}

export default pageMeta;