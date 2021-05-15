
const sidebar = (data) => {
  const sidebar__paramtr_1 = document.querySelector('.sidebar__paramtr-1');
  const sidebar__paramtr_2 = document.querySelector('.sidebar__paramtr-2');
  const sidebar__results = document.querySelector('.sidebar__results');
  const configurationParam = [];
  const yearParam = [];
  const param1 = 'Configuration';
  const param2 = 'Year';

  data.stock.map((item) => {
    configurationParam.push(item.axle_configuration);
    yearParam.push(item.year);
  });

  const unicConfigurationParam = [...new Set(configurationParam)].sort();
  const unicYearParam = [...new Set(yearParam)].sort();

  sidebar__results.innerHTML = `<h4>${data.stock.length} Result found</h4>`

  sidebar__paramtr_1.innerHTML = `
      <div class="sidebar__paramtr-1__text" data-bs-toggle="collapse" data-bs-target="#collapse${param1}" aria-expanded="false" aria-controls="collapseCarrying">
        <h4>${param1}</h4>
      </div>
      <ul class="collapse" id="collapse${param1}">
        ${
          unicConfigurationParam.map((item) => {
            const result =  `
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value=${false} data-param=${item}>
                <span>${item}</span>
              </li>`
            return result;
        }).join('')
        }
      </ul>
    `;

    sidebar__paramtr_2.innerHTML = `
    <div class="sidebar__paramtr-2__text" data-bs-toggle="collapse" data-bs-target="#collapse${param2}" aria-expanded="false" aria-controls="collapseCarrying">
      <h4>${param2}</h4>
    </div>
    <ul class="collapse" id="collapse${param2}">
      ${
        unicYearParam.map((item) => (
          `<li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value=${false} data-param=${item} aria-label="">
            <span>${item}</span>
          </li>`
        )).join('')
      }
    </ul>
  `
}

export default sidebar;
