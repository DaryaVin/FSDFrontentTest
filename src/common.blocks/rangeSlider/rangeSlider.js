$( function() {
  $( ".rangeSlider__slider" ).slider({
    range: true,
    min: 100,
    max: 15000,
    step: 100,
    values: [ 5000, 10000 ],
    slide: function( event, ui ) {
      const values0 = new Intl.NumberFormat('ru-RU').format(ui.values[0]);
      const values1 = new Intl.NumberFormat('ru-RU').format(ui.values[1]);
      $( ".rangeSlider__amount" ).val( values0 + "\u{20BD} - " + values1 + "\u{20BD}" );
    }
  });
  const values0 = new Intl.NumberFormat('ru-RU').format($(".rangeSlider__slider").slider("values", 0));
  const values1 = new Intl.NumberFormat('ru-RU').format($(".rangeSlider__slider").slider("values", 1));
  $( ".rangeSlider__amount" ).val(values0 + "\u{20BD} - " + values1 + "\u{20BD}");
} );