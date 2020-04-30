import Inputmask from 'inputmask/lib/extensions/inputmask.date.extensions';
import 'webpack-jquery-ui/datepicker';
import '@common/dateMask/dateMask.scss';
import '@common/dateMask/datepicker.js';


function addZero(digits_length, source){
  var text = source + '';
  while(text.length < digits_length)
      text = '0' + text;
  return text;
};

export function date(date, minDate, maxDate) {
  var field = date;
  field.attr('spellcheck','false');
  field.attr('contenteditable','true');
  var minDateStr = addZero(2, minDate.getDate()) + "." + addZero(2, minDate.getMonth() + 1) + '.' + addZero(4, minDate.getFullYear());
  var maxDateStr = addZero(2, maxDate.getDate()) + "." + addZero(2, maxDate.getMonth() + 1) + '.' + addZero(4, maxDate.getFullYear());
  var yearRangeStr =  minDate.getFullYear() + ":" + maxDate.getFullYear();
  var optInputmask = {
    alias: 'datetime',
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ',
    undoOnEscape: true,
    min: minDateStr,
    max: maxDateStr
  };
  var optDatepicker = {
    dateFormat: 'dd.mm.yy',
    minDate: minDate,
    maxDate: maxDate,
    yearRange : yearRangeStr,
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    changeYear: true,

    closeText: "Применить",
    prevText: "&#x3C;Пред",
    nextText: "След&#x3E;",
    currentText: "Очистить",
    monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
    "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
    monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
    "Июл","Авг","Сен","Окт","Ноя","Дек" ],
    dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
    dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
    dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
    weekHeader: "Нед",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ""
  };
  Inputmask(optInputmask).mask(field.datepicker(optDatepicker));
}

export function dateRange(date, minDate, maxDate) {
  var field = date;
  field.attr('spellcheck','false');
  var minDateStr = addZero(2, minDate.getDate()) + "." + addZero(2, minDate.getMonth() + 1) + '.' + addZero(4, minDate.getFullYear());
  var maxDateStr = addZero(2, maxDate.getDate()) + "." + addZero(2, maxDate.getMonth() + 1) + '.' + addZero(4, maxDate.getFullYear());
  var yearRangeStr =  minDate.getFullYear() + ":" + maxDate.getFullYear();
  var optInputmask = {
    alias: 'datetime',
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ',
    undoOnEscape: true,
    min: minDateStr,
    max: maxDateStr
  };
  var optDatepicker = {
    range: 'period',
    dateFormat: 'dd.mm.yy',
    minDate: minDate,
    maxDate: maxDate,
    yearRange : yearRangeStr,
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    changeYear: true,

    closeText: "Применить",
    prevText: "&#x3C;Пред",
    nextText: "След&#x3E;",
    currentText: "Очистить",
    monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
    "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
    monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
    "Июл","Авг","Сен","Окт","Ноя","Дек" ],
    dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
    dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
    dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
    weekHeader: "Нед",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",

    numberOfMonths: 1,
      onSelect: function(dateText, inst, extensionRange) {
        // extensionRange - объект расширения
        // console.log("extensionRange" +  extensionRange.toJson);
        console.dir(extensionRange)
        field.val(extensionRange.startDateText + "-" + extensionRange.endDateText);
        // field.val(extensionRange.startDateText + " - " + extensionRange.endDateText);
      }
  };
  // Inputmask(optInputmask).mask(field.datepicker(optDatepicker));
  field.datepicker(optDatepicker)
}
