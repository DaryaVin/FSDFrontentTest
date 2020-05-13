import '@common/selectStartEndDates/selectStartEndDates.scss';
import 'inputmask/dist/jquery.inputmask';
import * as calendarCardFuncs from '@common/calendarCard/calendarCard.js';
import * as dateMaskFuncs from '@common/dateMask/dateMask.js';

$(".selectStartEndDates").each(function() {
  var selectStartEndDates = $(this),
    startDateDropdown = selectStartEndDates.find('.selectStartEndDates__startDate'),
      fieldStartDate = startDateDropdown.find('.dropdown__dropdownButton input'),
      calendarStartDate = startDateDropdown.find('.calendarCard__datepicker'),
    endtDateDropdown = selectStartEndDates.find('.selectStartEndDates__endDate'),
      fieldEndDate= endtDateDropdown.find('.dropdown__dropdownButton input'),
      calendarEndDate= endtDateDropdown.find('.calendarCard__datepicker');

  calendarStartDate.change(function() {
    if (fieldStartDate.inputmask("isComplete")) {
      var date = $.datepicker.formatDate("dd.mm.yy", calendarStartDate.datepicker('getDate'));
      calendarEndDate.datepicker( "option", "minDate", date );
      console.dir(calendarEndDate.datepicker("option", "minDate"));
    }
  });
  calendarEndDate.change(function() {
    if (fieldEndDate.inputmask("isComplete")) {
      var date = $.datepicker.formatDate("dd.mm.yy", calendarEndDate.datepicker('getDate'));
      calendarStartDate.datepicker( "option", "maxDate", date );
      console.dir(calendarStartDate.datepicker("option", "minDate"));
    }
  });
});

export function addMinMaxDates(date, minDate = null, maxDate = null) {
  var selectStartEndDates = date,
    startDateDropdown = selectStartEndDates.find('.selectStartEndDates__startDate'),
      fieldStartDate = startDateDropdown.find('.dropdown__dropdownButton input'),
      calendarStartDate = startDateDropdown.find('.calendarCard__datepicker'),
    endtDateDropdown = selectStartEndDates.find('.selectStartEndDates__endDate'),
      fieldEndDate= endtDateDropdown.find('.dropdown__dropdownButton input'),
      calendarEndDate= endtDateDropdown.find('.calendarCard__datepicker');
  dateMaskFuncs.addDateMask(fieldStartDate, minDate, maxDate);
  dateMaskFuncs.addDateMask(fieldEndDate, minDate, maxDate);
  calendarCardFuncs.addMinMaxDates(calendarStartDate, minDate, maxDate);
  calendarCardFuncs.addMinMaxDates(calendarEndDate, minDate, maxDate);
}
