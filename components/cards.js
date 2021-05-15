
const cards = (data) => {
  const card__content = document.querySelector('.content__cards');
  card__content.innerHTML = '';

  const sidebar__results = document.querySelector('.sidebar__results');
  sidebar__results.innerHTML = `<h4>${data.stock.length} Result found</h4>`

  data.stock.map((item) => {
    let collapseName = item.title.match(/[a-zA-Z]/g).join('');

    card__content.innerHTML +=`
      <div class="card mb-3 col">
        <div class="row g-0 content__cards__direction">
          <div class="col-4 pt-2 first__col">
            <img src=${item.image} alt="img1">
          </div>
          <div class="col-8">
            <div class="card-body card__card-content">
              <div class="card-title card__head">
                <div class='card__card-content__title'><h5>${item.title}</h5></div>
                <div class='card__card-content__price'><h5>${item.price}<b>${item.price_currency}</b></h5></div>
                </div>
              <p class="card-text">
                <h5>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h5>
              </p>
              
              <div><hr class="dropdown-divider card__card-content__descriptions"></div>
                    
              <div class="card__paramtr-1 row">
                <div class="card__paramtr-1__text" data-bs-toggle="collapse" data-bs-target="#collapse${collapseName}" aria-expanded="false" aria-controls="collapse${collapseName}">
                  <h4>Descriptions</h4>
              </div>
                <ul  class="collapse" id="collapse${collapseName}">
                  <li class="list-group-item">
                    <span>gross weight - ${item.gross_weight}</span>
                  </li>
                  <li class="list-group-item">
                    <span>mileage - ${item.mileage} ${item.mileage_measure}</span>
                  </li>
                  <li class="list-group-item">
                  <span>payload - ${item.payload}</span>
                  </li>
                  <li class="list-group-item">
                    <span>configuration - ${item.axle_configuration}</span>
                  </li>
                  <li class="list-group-item">
                    <span>power - ${item.power}</span>
                  </li>
                  <li class="list-group-item">
                    <span>year - ${item.year}</span>
                  </li>
                </ul>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    `
  });
}

export default cards;