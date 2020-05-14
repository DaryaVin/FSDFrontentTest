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

  // calendarStartDate.datepicker("onSelect", function() {
  //   calendarEndDate.datepicker( "option", "minDate", date );
  // })
  calendarStartDate.change(function() {
    if (fieldStartDate.inputmask("isComplete")) {
      calendarEndDate.datepicker( "option", "minDate", calendarStartDate.datepicker('getDate') );
    }
  });
  calendarEndDate.change(function() {
    if (fieldEndDate.inputmask("isComplete")) {
      calendarStartDate.datepicker( "option", "maxDate", calendarEndDate.datepicker('getDate') );
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
