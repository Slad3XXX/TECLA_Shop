$(document).ready(() => {
    $('#ejecutar').on('click', function (event) {
        event.preventDefault();
        $('.caja').show();
        $('.caja2').hide();
      });
    
      $('#ejecutar2').on('click', function (event) {
        event.preventDefault();
        $('.caja2').show();
        $('.caja').hide();
      });
    
      $('#cart').on('click', function (event) {
        event.preventDefault();
        $('#cart-items').show();
      });
    
      $('#close').on('click', function (event) {
        event.preventDefault();
        $('#cart-items').hide();
      });


    const indexpro = () => {
        $.ajax({
            url: `https://api.mercadolibre.com/sites/MLM/search?q=Computación`,
            type: 'GET',
            crossDomain: true,
            datatype: 'json',
            success: function (response) {
                for (var i = 0; i <= 13; i++) {
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

                    $('#index').append(template);
                };
            }
        }).done((response) => {
            console.log(response);
            console.log(response.results["0"].thumbnail);
        });
    }
    indexpro();



    const productos1 = () => {
        $.ajax({
            url: `https://api.mercadolibre.com/sites/MLM/search?q=Computacion`,
            type: 'GET',
            crossDomain: true,
            datatype: 'json',
            success: function (response) {
                for (var i = 0; i <= 20; i++) {
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

                    $('#productos1').append(template);
                };
            }
        }).done((response) => {
            console.log(response);
            console.log(response.results["0"].thumbnail);
        });
    }
productos1();

    const productos = () => {
        $.ajax({
            url: `https://api.mercadolibre.com/sites/MLM/search?q=Consolas y Videojuegos`,
            type: 'GET',
            crossDomain: true,
            datatype: 'json',
            success: function (response) {
                for (var i = 0; i <= 20; i++) {
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

                    $('#productos2').append(template);
                };
            }
        }).done((response) => {
            console.log(response);
            console.log(response.results["0"].thumbnail);
        });
    }
productos();

});

  

