import '@common/logo/logo.scss';
import '@common/textField/textField.scss';
import '@common/dropdown/dropdown.js';
import '@common/button/button.scss';
import '@common/likeButton/likeButton.scss';
import '@common/baseStyle/baseStyle.scss';
import '@common/radioButton/radioButton.scss';
import '@common/checkboxButton/checkboxButton.scss';
import '@common/bulletList/bulletList.scss';
import '@common/toggle/toggle.scss';
import '@common/rateButton/rateButton.scss';
import '@common/rangeSlider/rangeSlider.js';
import '@common/rangeSlider/rangeSlider.scss';
import '@common/pagination/pagination.js';
import '@common/numberPicker/numberPicker.js';
import '@common/numberPickerList/numberPickerList.scss';
import '@common/guestsField/guestsField.js';
import '@common/equipmentField/equipmentField.js';
import '@common/dateMask/dateMask.js';
import '@common/calendarCard/calendarCard.js';
import '@common/dateDropdown/dateDropdown.js';
import '@common/selectStartEndDates/selectStartEndDates.js';


import * as calendarCardFuncs from '@common/calendarCard/calendarCard.js';
import * as dateFuncs from '@common/dateMask/dateMask.js';
import * as selectStartEndDatesFuncs from  '@common/selectStartEndDates/selectStartEndDates.js';
import * as dateDropdownFuncs  from  '@common/dateDropdown/dateDropdown.js';

import './UIKit.scss';

$("#dateMask input").each(function(){
  var data = $(this);
  var minDate = new Date("1900, 01, 01"),
    maxDate = new Date();
  dateFuncs.addDateMask(data, minDate, maxDate);
});
$('#selectStartEndDates').each(function() {
  var data = $(this);
  var minDate = new Date("2020, 01, 01"),
    maxDate = new Date();
  selectStartEndDatesFuncs.addMinMaxDates(data, minDate, maxDate);
})
$("#dateDropdown").each(function() {
  var data = $(this);
  var minDate = new Date("2000, 01, 01"),
    maxDate = new Date("2001, 01, 01");
  dateDropdownFuncs.addMinMaxDates(data, minDate, maxDate);
})
// $('#dateRangeField').each(function() {
//   var date = $(this);
//   var minDate = new Date(),
//     maxDate = new Date("+30d");
//     dateFuncs.dateRange(date, minDate, maxDate);
// });
