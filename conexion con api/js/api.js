$(document).ready(() => {
const porductosOrganicos = () => {
        $.ajax({
            url: `https://api.mercadolibre.com/sites/MLM/search?q=Computación`,
            type: 'GET',
            crossDomain: true,
            datatype: 'json',
            success: function (response) {
                for (var i = 0; i <= 7; i++) {
                    var photo = response.results[i].thumbnail;
                    console.log(photo);

                    var titleProduct = response.results[i].title;
                    var priceProduct = '$' + '' + response.results[i].price;
                    var template = `<div class="card" style="width: 18rem; margin-top: 20px;">
                          <div class="card-body">
                              <img class="card-img-top" style="width: 10rem;" src="${photo}" alt="Card image cap">
                              <h5 class="card-title">${titleProduct}</h5>
                              <p class="card-text">${priceProduct}</p>
                              <a href="#" class="btn btn-primary" style="background-color:#77a8a8"><i class="fas fa-cart-plus"></i></a>  
                              <div id="paypal-button"></div>                          
                          </div>
                       </div>`;

                    $('#productOrganic').append(template);
                };
            }
        }).done((response) => {
            console.log(response);
            console.log(response.results["0"].thumbnail);
        });
    }
    porductosOrganicos();




});




