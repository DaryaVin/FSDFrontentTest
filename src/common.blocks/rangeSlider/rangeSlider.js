// require('webpack-jquery-ui/slider');
import 'webpack-jquery-ui/slider';

$(".rangeSlider").each(function() {
  var rangeSlider = $(this),
    slider = rangeSlider.find(".rangeSlider__slider"),
    amount = rangeSlider.find('.rangeSlider__amount');
  slider.slider({
    range: true,
    min: 100,
    max: 15000,
    step: 100,
    values: [ 5000, 10000 ],
    slide: function( event, ui ) {
      const values0 = new Intl.NumberFormat('ru-RU').format(ui.values[0]);
      const values1 = new Intl.NumberFormat('ru-RU').format(ui.values[1]);
      amount.val( values0 + "\u{20BD} - " + values1 + "\u{20BD}" );
    }
  });
  const values0 = new Intl.NumberFormat('ru-RU').format(slider.slider("values", 0));
  const values1 = new Intl.NumberFormat('ru-RU').format(slider.slider("values", 1));
  amount.val(values0 + "\u{20BD} - " + values1 + "\u{20BD}");
});
