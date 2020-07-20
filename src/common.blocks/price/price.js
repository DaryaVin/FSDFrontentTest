$(".price").each(function() {
  var price = $(this);
  function priceFormat () {
    price.html( new Intl.NumberFormat('ru-RU').format( price.html() ) );
  }
  price.change(function() {
    priceFormat();
  })
  priceFormat();
});
