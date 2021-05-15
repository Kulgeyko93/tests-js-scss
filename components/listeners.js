import cards from './cards.js';

const findWithParametrs = (data) => {
  const configuration__parametrs = document.querySelectorAll('.collapseConfiguration span');
  const configuration__param= document.querySelector('.collapseConfiguration');
  const years__parametrs = document.querySelectorAll('.collapseYear span');
  const years__param = document.querySelector('.collapseYear');
  const btn__search = document.querySelector('.sidebar__search');
  const minPriceDOM = document.querySelector('.minPrice');
  const maxPriceDOM = document.querySelector('.maxPrice');
  const keywordDOM = document.querySelector('.keyword');

  let minPrice = '';
  let maxPrice = '';
  let keywordValue = '';

  const activeParametrs = {
    configuration: {},
    year: {},
    price: '',
    name: ''
  };

  configuration__parametrs.forEach(item => {
    activeParametrs.configuration[item.textContent] = false;
  });
  years__parametrs.forEach(item => {
    activeParametrs.year[item.textContent] = false;
  });

  configuration__param.addEventListener('click', e => {
    if (e.target.tagName === 'INPUT') {
      e.target.value = !activeParametrs.configuration[e.target.dataset.param];
      activeParametrs.configuration[e.target.dataset.param] =
        !activeParametrs.configuration[e.target.dataset.param];
    }
  });

  years__param.addEventListener('click', e => {
    if (e.target.tagName === 'INPUT') {

      e.target.value = !activeParametrs.year[`${e.target.dataset.param}`];
      activeParametrs.year[`${e.target.dataset.param}`] =
        !activeParametrs.year[`${e.target.dataset.param}`];
    }
  });

  minPriceDOM.addEventListener('keyup', e => {
    e.target.value = e.target.value.replace(/[^\d]/g, '');
    minPrice = e.target.value.replace(/[^\d]/g, '');
  });

  maxPriceDOM.addEventListener('keyup', e => {
    e.target.value = e.target.value.replace(/[^\d]/g, '');
    maxPrice = e.target.value.replace(/[^\d]/g, '');
  });

  keywordDOM.addEventListener('keyup', e => {
    keywordValue = e.target.value;
  });

  btn__search.addEventListener('click', (e) => {
    const rerenderData = {stock: []};
    let configurationFlag = false;
    let yearFlag = false;

    for (let item in activeParametrs) {
      if (item === 'configuration') {
        for (let config in activeParametrs[item]) {
          if (!configurationFlag && activeParametrs[item][config]) {
            configurationFlag = true
          }
        }
      }
      if (item === 'year') {
        for (let year in activeParametrs[item]) {
          if (!yearFlag && activeParametrs[item][year]) {
            yearFlag = true
          }
        }
      }
    }

    data.stock.forEach(item => {
      let isConfiguration;
      let isYear;
      let isPrice = false;
      let isKeyword = false;
      const keywordRegx = new RegExp(`${keywordValue}`, 'gi')

      if (configurationFlag) {
        isConfiguration = activeParametrs.configuration[item.axle_configuration]
      } else {
        isConfiguration = true
      }
      if (yearFlag) {
        isYear = activeParametrs.year[item.year]
      } else {
        isYear = true
      }

      if (minPrice <= item.price && item.price <= maxPrice ||
        minPrice <= item.price && maxPrice === '' ||
        minPrice === '' && item.price <= maxPrice) {
        isPrice = true;
      } else {
        isPrice = false
      }

      if (minPrice === '' && maxPrice === '') isPrice = true;

      if (keywordRegx.test(item.title) && keywordValue !== '') {
        isKeyword = true;
      } else {
        isKeyword = false;
      }
      if (keywordValue === '') isKeyword = true;

      if (
        isConfiguration &&
        isYear &&
        isPrice &&
        isKeyword
      ) {
        rerenderData.stock.push(item)
      };

    });
    cards(rerenderData);
  })




}

export default findWithParametrs;
