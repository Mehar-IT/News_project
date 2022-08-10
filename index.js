let newsAccordion = document.getElementById("accordionExample");
import api from "./api.js";
// const api = require('./api').default

let newshtml = "";
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '6076af1c44msh435ded898289374p11183bjsn170d6816f85d',
//         'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
//     }
// };

fetch(api)
  .then((response) => response.json())
  .then((data) => {
    data.articles.forEach((element, index) => {
      let news;
      if (index == 0) {
        news = `
                <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <b><span style="background-color: #0056B3;" class="badge badge-secondary">Breaking news ${
                     index + 1
                   } :</span></b> ${element.title}
                    </button>
                  </h2>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    ${element.content}<a href="${
          element.url
        }" target="_blank">read more....</a>
                  </div>
                </div>
              </div>
                        `;
      } else {
        news = `
                    <div class="card">
                    <div class="card-header" id="heading${index}">
                      <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                        <b><span style="background-color: #0056B3;" class="badge badge-secondary">Breaking news ${
                          index + 1
                        } :</span></b> ${element.title}
                        </button>
                      </h2>
                    </div>
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordionExample">
                      <div class="card-body">
                      ${element.content}<a href="${
          element.url
        }" target="_blank">read more....</a>
                      </div>
                    </div>
                  </div>
                    `;
      }
      newshtml += news;
      newsAccordion.innerHTML = newshtml;
    });
  })
  .catch((error) => console.log(error));
