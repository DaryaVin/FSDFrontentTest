import 'webpack-jquery-ui/datepicker';
import '@common/calendarCard/datepicker.js';
import '@common/calendarCard/calendarCard.scss';

$('.calendarCard').each(function() {
  var calendarCard = $(this),
  calendar = calendarCard.find('.calendarCard__datepicker'),
  resetButton = calendarCard.find('.calendarCard__resetButton'),
  executeButton = calendarCard.find('.calendarCard__executeButton');
  var optDatepicker = {
    dateFormat: 'dd.mm.yy',
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: false,
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
  calendar.datepicker(optDatepicker);

  calendar.change(function(){
    resetButton.prop('hidden', false);
  });

  executeButton.click(function() {
    resetButton.prop('hidden', false);
  });

  resetButton.click(function() {
    calendar.datepicker("setDate");
    resetButton.prop('hidden', true);
    console.log(calendar.datepicker('widget').data('datepickerExtensionRange'));
  });

});

export function addMinMaxDates(date, minDate = null, maxDate = null) {
  var calendarCard = date,
    calendar = {};
  if (!calendarCard.hasClass('.calendarCard__datepicker')) {
    calendar = calendarCard;
    console.log('calendar = calendarCard');

    console.log(calendarCard);
  } else {
    calendar = calendarCard.find('.calendarCard__datepicker');
    console.log("calendar != calendarCard");

    console.log(calendarCard);
  }

  var yearRangeStr = '';
  if (minDate) {
    yearRangeStr += minDate.getFullYear();
  } else {
    yearRangeStr += "-100";
  }
  if (maxDate) {
    yearRangeStr += ":" + maxDate.getFullYear();
  } else {
    yearRangeStr += ":+100";
  }
  var optDatepicker = {
    minDate: minDate,
    maxDate: maxDate,
    yearRange : yearRangeStr
  };
  calendar.datepicker("option", optDatepicker);
}

export function addDateRange(date) {
  var calendarCard = date,
  calendar = calendarCard.find('.calendarCard__datepicker');
  var optDatepicker = {
    range: 'period',
    numberOfMonths: 1
    // onSelect: function(dateText, inst, extensionRange) {
    // }
  };
  calendar.datepicker("option", optDatepicker);
}
