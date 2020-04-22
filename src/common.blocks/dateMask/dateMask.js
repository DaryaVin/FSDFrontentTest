import Inputmask from 'inputmask/lib/extensions/inputmask.date.extensions';

function addZero(digits_length, source){
  var text = source + '';
  while(text.length < digits_length)
      text = '0' + text;
  return text;
};

$('.date').each(function() {
  var date = $(this),
  field = date.find('.textField__field');
  field.attr('contenteditable','true');
  field.attr('spellcheck','false');
  var minDate = new Date(),
    maxDate = new Date();
  maxDate.setDate(minDate.getDate() + 365);
  var minDateStr = addZero(2, minDate.getDate()) + "." + addZero(2, minDate.getMonth() + 1) + '.' + addZero(4, minDate.getFullYear());
  var maxDateStr = addZero(2, maxDate.getDate()) + "." + addZero(2, maxDate.getMonth() + 1) + '.' + addZero(4, maxDate.getFullYear());

  console.log("min: " + minDateStr);
  console.log("max: " +  maxDateStr);

  var opt = {
    alias: 'datetime',
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ',
    undoOnEscape:true,
    min: minDateStr,
    max: maxDateStr
  }
  Inputmask(opt).mask(field);
  field.text("ДД.ММ.ГГГГ");

});
