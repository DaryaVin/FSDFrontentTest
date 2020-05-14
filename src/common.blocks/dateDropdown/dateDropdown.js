import '@common/dateDropdown/dateDropdown.scss';
import 'webpack-jquery-ui/datepicker';
import * as dateFuncs from '@common/dateMask/dateMask.js';
import * as calendarCardFuncs from '@common/calendarCard/calendarCard.js';

$(".dateDropdown").each(function() {
  var dateDropdown = $(this),
    dropdownButton = dateDropdown.find('.dropdown__dropdownButton'),
    field = dropdownButton.find('input'),
    calendar = dateDropdown.find('.calendarCard__datepicker'),
    resetButton = dateDropdown.find('.calendarCard__resetButton'),
    executeButton = dateDropdown.find('.calendarCard__executeButton');

  var _theme_dateRange = false;
  if (dateDropdown.hasClass('dateDropdown_theme_dateRange')) {
    _theme_dateRange = true;
    // calendarCard.addDateRange(calendar);
    var optDatepicker = {
      range: 'period',
      numberOfMonths: 1,
      onSelect: function(dateText, inst, extensionRange) {
        var monthNamesShort = calendar.datepicker("option","monthNamesShort");
        var startDate = $.datepicker.formatDate("d M", extensionRange.startDate, {monthNamesShort: monthNamesShort});
        var endDate = $.datepicker.formatDate("d M", extensionRange.endDate, {monthNamesShort: monthNamesShort});
        field.val(startDate + " - " + endDate);
        calendar.change();
      }
    };
    calendar.datepicker("option", optDatepicker);
    field.attr('readonly', 'true');
    field.val('Выберете даты пребывания в отеле');
  } else {
    dateFuncs.addDateMask(field);
    var optDatepicker = {
      onSelect: function(dateText, inst) {
        field.val(dateText);
        calendar.change();
      }
    };
    calendar.datepicker("option", optDatepicker);
  }

  executeButton.click(function() {
    dropdownButton.click();
  });
  field.click(function() {

  });
  resetButton.click(function() {
    if (_theme_dateRange) {
      field.val('Выберете даты пребывания в отеле')
    } else {
      field.val('');
    }
  });
  field.on('keyup', function() {
    if (field.inputmask("isComplete")) {
      var fieldVal = field.val();
      calendar.datepicker('setDate', fieldVal);
      resetButton.prop('hidden', false);
    };
  });
});

export function addMinMaxDates(data, minDate = null, maxDate = null) {
  var dateDropdown = data,
    field = dateDropdown.find('.dropdown__dropdownButton input'),
    calendar = dateDropdown.find('.calendarCard__datepicker');
  dateFuncs.addDateMask(field, minDate, maxDate);
  calendarCardFuncs.addMinMaxDates(calendar, minDate, maxDate);
}
