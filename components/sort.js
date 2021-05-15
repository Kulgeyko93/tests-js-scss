import cards from './cards.js';

const sort = (data) => {
  const content__sort__menu = document.querySelector('.content__sort__menu');
  const content__sort__input = document.querySelector('.content__sort__input');

  const sortParamsArray = data.page_meta.meta_keywords.split(',');

  content__sort__menu.innerHTML ='';
  sortParamsArray.forEach((item, index, array) => {
    if (index !== array.length - 1) {
      return content__sort__menu.innerHTML +=`
        <li class="dropdown-item">${item.trim()}</li>
        <li><hr class="dropdown-divider"></li>
      `
    } else {
      return content__sort__menu.innerHTML += `<li class="dropdown-item">${item.trim()}</li>`
    }
  });

  const sortParam = (param) => {
    console.log(param)
    const sortData = data.stock.slice(0,);
    switch (param) {
      case 'trucks':{
        sortData.sort((a, b) => b.make - a.make);
        cards({stock: sortData})
        break;
      }
      case 'offers':{
        sortData.sort((a, b) => a.price - b.price);
        cards({stock: sortData})
        break;
      }
      case 'prices':{
        sortData.sort((a, b) => b.price - a.price);
        cards({stock: sortData})
        break;
      }
      case 'used':{
        sortData.sort((a, b) => a.mileage - b.mileage);
        cards({stock: sortData})
        break;
      }
      case 'new':{
        sortData.sort((a, b) => b.year - a.year);
        cards({stock: sortData})
        break;
      }
      case 'marketplace':{
        cards({stock: sortData})
        break;
      }
      default: {
        cards({stock: sortData})
      }
    }

  }

  content__sort__menu.addEventListener('click', (e) => {
    if (e.target.className === 'dropdown-item') {
      content__sort__input.value = e.target.textContent;
      sortParam(e.target.textContent);
    }
  })

  content__sort__input.addEventListener('keyup', (e) => {
    sortParam(e.target.value);
  })


}

export default sort;