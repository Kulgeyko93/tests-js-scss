import cards from './components/cards.js';
import nav from './components/nav.js';
import pageMeta from './components/pageMeta.js';
import pageText from './components/pageText.js';
import sidebar from './components/sidebar.js';
import sort from './components/sort.js';
import findWithParametrs from './components/listeners.js';
import pagination from './components/pagination.js';

const url = './store/data.json'

const wrapper = document.querySelector('.wrapper');
const spinner__page = document.querySelector('.spinner__page');

const getData = async () => {
  let data = null;
  wrapper.style.opacity = 0;
  data = await fetch(url).then(res => res.json())


  return data;
}


const data = await getData();

render();

if (data !== undefined) {
  wrapper.style.opacity = 1;
  spinner__page.style.display = 'none';
}

function render(){
  wrapper.innerHTML = `
  <div class='container container-sm'>
      <header class="row header">
        <div class="header__logo">
          <h1>TESTING</h1>
        </div>

        <nav class="nav header__nav">
        </nav>
        <div class="header__breadcrumb" aria-label="breadcrumb">
          <div class="breadcrumb">
          </div>
        </div>
      </header>
      <section class="row description"></section>
      <main class="row main">
        <div class="col-4 sidebar">
          <div class="row sidebar__results">
            <h4>26 Result found</h4>
          </div>
          <div><hr class="dropdown-divider"></div>

          <div class="sidebar__paramtr-1 row">
          </div>

          <div><hr class="dropdown-divider"></div>

          <div class="sidebar__paramtr-2 row">

          </div>

          <div><hr class="dropdown-divider"></div>
          
          <div class="sidebar__paramtr-3 row">
            <div class="sidebar__paramtr-3__text" data-bs-toggle="collapse" data-bs-target="#collapsePrice" aria-expanded="false" aria-controls="collapsePrice">
              <h4>Price</h4>
            </div>
            <div class="collapse" id="collapsePrice">
              <div class="row">
                <div class="col">
                  <input type="number" class="form-control minPrice" placeholder="Min" aria-label="Min" aria-describedby="basic-addon1" title="Используйте числовой формат" pattern="^[0-9]+$">
                </div>
                <div class="col">
                  <input type="number" class="form-control maxPrice" placeholder="Max" aria-label="Max" aria-describedby="basic-addon1">
                </div>
              </div>
            </div>
          </div>

          <div><hr class="dropdown-divider"></div>

          <div class="sidebar__paramtr-4 row">
            <div class="sidebar__paramtr-4__text" data-bs-toggle="collapse" data-bs-target="#collapseName" aria-expanded="false" aria-controls="collapseName">
              <h4>Name</h4>
            </div>
            <div class="collapse" id="collapseName">
              <div class="col">
                <input type="text" class="form-control keyword" placeholder="Keyword" aria-label="Keyword" aria-describedby="basic-addon1">
              </div>
            </div>
          </div>

          <button type="button" class="btn btn-info sidebar__search">Search</button>
        </div>
        <content class="col-8 content">
          <div class="row content__nav">
            <nav class="col content__nav__pagination" aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link arrow-left" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link pagination__list" href="#">1</a></li>
                <li class="page-item"><a class="page-link pagination__list" href="#">2</a></li>
                <li class="page-item"><a class="page-link pagination__list" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link arrow-right" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class=" col content__sort">
              <div class="btn-group dropstart">
                <div class="input-group mb-3">
                  <button  class="dropdown content__sort__button" data-bs-toggle="dropdown" aria-expanded="false">
                    <
                  </button>
                  <div class="dropdown-menu content__sort__menu">
                    <li class="dropdown-item">Carrying</li>
                    <li><hr class="dropdown-divider"></li>
                    <li class="dropdown-item">Type</li>
                    <li><hr class="dropdown-divider"></li>
                    <li class="dropdown-item">Price</li>
                    <li><hr class="dropdown-divider"></li>
                    <li class="dropdown-item">Name</li>
                  </div>
                  <!-- <div class="input-group-text" id="basic-addon1">@</div> -->
                  <input 
                    type="text" 
                    class="form-control content__sort__input" 
                    placeholder="Sort options" 
                    aria-label="Username" 
                    aria-describedby="basic-addon1"
                  >
                </div>
              </div>
            </div>

          </div>

          <div class="row content__cards">
          </div>
        </content>

      </main>

      <footer class="row footer">
        <div class="row footer__logo">
          <h3>DAF - TRUCKS FOR SALE FROM NETHERLANDS</h3>
        </div>
        <div class="col-4 footer__contacts">

          <div class="row footer__contacts__location">
            <i class="bi bi-geo-alt"></i>
            <span><b>Company Adress</b>: Lorem ipsum dolor sit amet 18600, Netherlands</span>
          </div>
          <div class="row footer__contacts__phone-number">
            <i class="bi bi-telephone"></i>
            <span>+375 29 123 45 67</span>
          </div>
          <div class="footer__contacts__socials">
            <a href="#">
              <img src="./images/facebook.svg" alt="facebook" class="social">
            </a>
            <a href="#">
              <img src="./images/instagram.svg" alt="instagram" class="social">
            </a>
            <a href="#">
              <img src="./images/twitch.svg" alt="twitch" class="social">
            </a>
            <a href="#">
              <img src="./images/youtube.svg" alt="youtube" class="social">
            </a>
          </div>
        </div>
        <div class="col-8 footer__descriptions">
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quos ullam atque accusantium ratione molestias soluta, provident nobis, assumenda dolorum voluptas incidunt inventore quia reiciendis quis. Quis quo molestias repellat.
          </span>
        </div>
      </footer>
    </div>
  `

  cards(data);
  nav(data);
  pageMeta(data);
  pageText(data);
  sidebar(data);
  findWithParametrs(data);
  pagination(data);
  sort(data);
}
