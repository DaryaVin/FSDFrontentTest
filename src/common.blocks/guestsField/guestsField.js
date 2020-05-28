
$('.guestsField').each(function() {
  var guestsField = $(this),
    title = guestsField.find('.dropdown__dropdownButton p'),
    resetButton = guestsField.find('.numberPickerList__resetButton'),
    executeButton = guestsField.find('.numberPickerList__executeButton'),
    numbers = guestsField.find('input[type="number"].numberPicker__number');

    resetButton.css('display', 'none');
    resetButton.click(function() {
      numbers.val(0);
      numbers.trigger("change");
      resetButton.css('display', 'none');
      if (title.text() != "Сколько гостей") {
        title.text('Количество гостей не указано');
      }
    });

    executeButton.click(function() {
      var sumGoustes = 0;
      for (let i = 0; i < numbers.length; i++) {
        sumGoustes += parseFloat(numbers[i].value);
      }
      var titleStr = "";
      var a = sumGoustes % 10;
      switch (a) {
        case 0:
          if (sumGoustes == 0) {
            titleStr = "Количество гостей не указано";
          } else {
            titleStr = sumGoustes + " гостей";
          };
          break;
        case 1:
          if (sumGoustes % 100 == 11) {
            titleStr = sumGoustes + " гостей";
          } else {
            titleStr = sumGoustes + " гость";
          };
          break;
        case 2:
        case 3:
        case 4:
          if ((10 < (sumGoustes % 100)) && ((sumGoustes % 100)< 20)) {
            titleStr = sumGoustes + " гостей";
          } else {
            titleStr = sumGoustes + " гостя";;
          };
          break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          titleStr = sumGoustes + " гостей";
          break;
        default:
          titleStr = "Ошибка в вычислениях"
      }
      title.text(titleStr);
    });

    numbers.change(function(){
      var sumGoustes = 0;
      for (let i = 0; i < numbers.length; i++) {
        sumGoustes += parseFloat(numbers[i].value);
      };
      if (sumGoustes != 0) resetButton.css('display', 'flex');
      else resetButton.css('display', 'none');
    });
})
