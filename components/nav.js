
const nav = (data) => {
  const header__nav = document.querySelector('.header__nav');
  const header__breadcrumb = document.querySelector('.header__breadcrumb .breadcrumb');



  header__nav.innerHTML = '';
  header__breadcrumb.innerHTML = '';

  data.nav.map((item, index, array) => {
    header__nav.innerHTML += `
      <a class="nav-link" href="#"><h4>${item.text}</h4></a>
    `
  });

  data.breadcrumbs.map((item, index, array) => {
    if (index === array.length - 1) {
      header__breadcrumb.innerHTML += `
        <div href=${item.href} class="breadcrumb-item active" aria-current="page"><h5>${item.text}</h5></div>
      `
    } else {
      header__breadcrumb.innerHTML += `
        <div class="breadcrumb-item"><a href="#"><h5>${item.text}</h5></a></div>
      `
    };
  });
}

export default nav;