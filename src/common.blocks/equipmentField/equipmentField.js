import '@common/equipmentField/equipmentField.scss';

$('.equipmentField').each(function() {
  var equipmentField = $(this),
    title = equipmentField.find('.dropdown__dropdownButton p'),
    numbers = equipmentField.find('input[type="number"].numberPicker__number');
    title.text("Удобства номера");

    function numberVariantStr(n) {
      var variantStr = -1;
      switch (n % 10) {
        case 0:
          variantStr = 0;
          break;
        case 1:
          if (n % 100 == 11) {
            variantStr = 0;
          } else {
            variantStr = 1;
          };
          break;
        case 2:
        case 3:
        case 4:
          if ((10 < (n % 100)) && ((n % 100)< 20)) {
            variantStr = 0;
          } else {
            variantStr = 2;
          };
          break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          variantStr = 0;
          break;
        default:
          variantStr = -1;
      }
      return variantStr;
   }

    numbers.change(function(){
      var variantStr = [
        ["спален", "спальня", "спальни"],
        ["кроватей", "кровать", "кровати"],
        ["ванных комнат", "ванная комната", "ванные комнаты"]
      ];
      var titleStr = '';
      var allZero = true;
      for (let i = 0; i < numbers.length; i++) {
        var numberVal = parseFloat(numbers[i].value);
        if (numberVal != 0) {
          allZero = false;
          var variant =  numberVariantStr(numberVal);
          if ((variant < 0) || (variant > 2)) variant = 2;
          if (numberVal > 0) {
            if (titleStr != '') titleStr += ", ";
            titleStr += numberVal + " " + variantStr[i][variant];
          }
        }
      };
      if (allZero) {
        titleStr = "Удобства номера";
      }
      title.text(titleStr);
    });
})
