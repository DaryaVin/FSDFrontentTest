import '@common/numberPicker/numberPicker.scss';

$('.numberPicker').each(function() {
  var spinner = $(this),
    input = spinner.find('input[type="number"].numberPicker__number'),
    btnUp = spinner.find('.numberPicker__plusBtn'),
    btnDown = spinner.find('.numberPicker__minusBtn'),
    min = input.attr('min'),
    max = input.attr('max');
    if (input.val()<=min) {
      btnDown.prop('disabled', true);
    };
    if (input.val()>=max) {
      btnUp.prop('disabled', true);
    };

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      input.val(newVal);
      input.trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;

      } else {
        var newVal = oldValue - 1;
      }
      input.val(newVal);
      input.trigger("change");
    });

    input.change(function() {

      var newValue = parseFloat(input.val());
      if (isNaN(newValue)) {
        newValue = 0;
      }
      newValue = Math.floor(newValue);
      if (newValue <= min) {
        newValue = min;
        btnDown.prop('disabled', true);
      } else {
        btnDown.prop('disabled', false);
      };
      if(newValue >= max) {
        newValue = max;
        btnUp.prop('disabled', true);
      } else {
        btnUp.prop('disabled', false);
      };
      input.val(newValue);
    });
})