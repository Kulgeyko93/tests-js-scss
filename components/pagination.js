import cards from './cards.js';

const pagination = (data) => {

  const pagination = document.querySelector('.pagination');
  const pageSize = 2;
  const portionSize = 2;

  const totalItemsCount = data.stock.length;

  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pagesCount / portionSize);

  let portionNumber = 1;
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  const dataForCurrentPage = (currentData) => {
    if (data.length <= pageSize) return currentData;
    const firstValueInPortion = (currentPage - 1) * pageSize;
    const lastValueInPortion = (currentPage) * pageSize;

    const dataForCurrentPage = currentData.slice(firstValueInPortion, lastValueInPortion);

    return dataForCurrentPage;
  };
  const handleChangePortion = (value) => {
    portionNumber = value;
    const firstValueInPortion = (portionNumber - 1) * pageSize;
    const lastValueInPortion = (portionNumber) * pageSize;

    const dataForCurrentPage = data.stock.slice(firstValueInPortion, lastValueInPortion);
    
    cards({stock: dataForCurrentPage});
  }

  pagination.innerHTML = `
    <li class="page-item">
      <a class="page-link arrow-left" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    ${
      pages.map(item => (`
        <li class="page-item"><a class="page-link pagination__list">${item}</a></li>
      `)).join('')
    }
    <li class="page-item">
      <a class="page-link arrow-right"aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  `;

  const arrow_left = document.querySelector('.arrow-left');
  const arrow_right = document.querySelector('.arrow-right');
  
  arrow_left.addEventListener('click', (e) => {
    if (portionNumber > 1) handleChangePortion(portionNumber - 1);
  })
  arrow_right.addEventListener('click', () => {
    if (portionNumber < pagesCount) handleChangePortion(portionNumber + 1);
  })

  pagination.addEventListener('click', (e) => {
    if (e.target.classList[1] === 'pagination__list') {
      handleChangePortion(+e.target.textContent);
    }
  })
}

export default pagination;