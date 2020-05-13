import 'inputmask/dist/jquery.inputmask';
// import '@common/dateMask/dateMask.scss';


function addZero(digits_length, source){
  var text = source + '';
  while(text.length < digits_length)
      text = '0' + text;
  return text;
};

function dateStr(date) {
  var dateStr = addZero(2, date.getDate()) + "." + addZero(2, date.getMonth() + 1) + '.' + addZero(4, date.getFullYear());
  return dateStr;
};

export function addDateMask(date, minDate = null, maxDate = null) {
  var field = date;
  var optInputmask = {
    alias: 'datetime',
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ',
    undoOnEscape: true,
    positionCaretOnClick: "radixFocus",
    insertMode: false,
    insertModeVisual: true,
    onKeyValidation: function (key, result) {
      if (!result && key != 44 && key != 46 && key !=47 && !field.inputmask("isComplete")) {
        var validationStr = "В данном поле должна быть указана дата в формате \"ДД.ММ.ГГГГ\". ";
        if (dateRangeStr) {
          validationStr += "Данная дата должна находиться в рамках" + dateRangeStr;
        }
        alert(validationStr);
      }
    },
  };
  var dateRangeStr = '';
  if (minDate) {
    var minDateStr = dateStr(minDate);
    Object.assign(optInputmask, { min: minDateStr });
    dateRangeStr += " с " + minDateStr;
  }
  if (maxDate) {
    var maxDateStr = dateStr(maxDate);
    Object.assign(optInputmask, { max: maxDateStr });
    dateRangeStr += " по " + maxDateStr;
  }
  field.attr('spellcheck','false');
  field.attr('contenteditable','true');
  field.attr('placeholder','ДД.ММ.ГГГГ');
  field.inputmask(optInputmask);
}

// export function date(date, minDate, maxDate) {
//   var field = date;
//   field.attr('spellcheck','false');
//   field.attr('contenteditable','true');
//   var minDateStr = addZero(2, minDate.getDate()) + "." + addZero(2, minDate.getMonth() + 1) + '.' + addZero(4, minDate.getFullYear());
//   var maxDateStr = addZero(2, maxDate.getDate()) + "." + addZero(2, maxDate.getMonth() + 1) + '.' + addZero(4, maxDate.getFullYear());
//   var yearRangeStr =  minDate.getFullYear() + ":" + maxDate.getFullYear();
//   var optInputmask = {
//     alias: 'datetime',
//     inputFormat: 'dd.mm.yyyy',
//     placeholder: 'ДД.ММ.ГГГГ',
//     undoOnEscape: true,
//     min: minDateStr,
//     max: maxDateStr
//   };
//   var optDatepicker = {
//     dateFormat: 'dd.mm.yy',
//     minDate: minDate,
//     maxDate: maxDate,
//     yearRange : yearRangeStr,
//     showOtherMonths: true,
//     selectOtherMonths: true,
//     showButtonPanel: true,
//     changeYear: true,

//     closeText: "Применить",
//     prevText: "&#x3C;Пред",
//     nextText: "След&#x3E;",
//     currentText: "Очистить",
//     monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
//     "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
//     monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
//     "Июл","Авг","Сен","Окт","Ноя","Дек" ],
//     dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
//     dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
//     dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
//     weekHeader: "Нед",
//     firstDay: 1,
//     isRTL: false,
//     showMonthAfterYear: false,
//     yearSuffix: ""
//   };
//   Inputmask(optInputmask).mask(field.datepicker(optDatepicker));
// }

// export function dateRange(date, minDate, maxDate) {
//   var field = date;
//   field.attr('spellcheck','false');
//   var minDateStr = addZero(2, minDate.getDate()) + "." + addZero(2, minDate.getMonth() + 1) + '.' + addZero(4, minDate.getFullYear());
//   var maxDateStr = addZero(2, maxDate.getDate()) + "." + addZero(2, maxDate.getMonth() + 1) + '.' + addZero(4, maxDate.getFullYear());
//   var yearRangeStr =  minDate.getFullYear() + ":" + maxDate.getFullYear();
//   var optInputmask = {
//     alias: 'datetime',
//     inputFormat: 'dd.mm.yyyy',
//     placeholder: 'ДД.ММ.ГГГГ',
//     undoOnEscape: true,
//     min: minDateStr,
//     max: maxDateStr
//   };
//   var optDatepicker = {
//     range: 'period',
//     dateFormat: 'dd.mm.yy',
//     minDate: minDate,
//     maxDate: maxDate,
//     yearRange : yearRangeStr,
//     showOtherMonths: true,
//     selectOtherMonths: true,
//     showButtonPanel: true,
//     changeYear: true,

//     closeText: "Применить",
//     prevText: "&#x3C;Пред",
//     nextText: "След&#x3E;",
//     currentText: "Очистить",
//     monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
//     "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
//     monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
//     "Июл","Авг","Сен","Окт","Ноя","Дек" ],
//     dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
//     dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
//     dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
//     weekHeader: "Нед",
//     firstDay: 1,
//     isRTL: false,
//     showMonthAfterYear: false,
//     yearSuffix: "",

//     numberOfMonths: 1,
//       onSelect: function(dateText, inst, extensionRange) {
//         // extensionRange - объект расширения
//         // console.log("extensionRange" +  extensionRange.toJson);
//         console.dir(extensionRange)
//         field.val(extensionRange.startDateText + " - " + extensionRange.endDateText);
//         // field.val(extensionRange.startDateText + " - " + extensionRange.endDateText);
//       }
//   };
//   Inputmask(optInputmask).mask(field.datepicker(optDatepicker));
// }
