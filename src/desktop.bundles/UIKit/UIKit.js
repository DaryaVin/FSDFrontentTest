import '@common/logo/logo.scss';
import '@common/label/label.scss';
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

import * as dateFunctions from '@common/dateMask/dateMask.js';

import './UIKit.scss';

$("#dateField").each(function(){
  var date = $(this);
  var minDate = new Date("1900, 01, 01"),
    maxDate = new Date();
  dateFunctions.date(date, minDate, maxDate);
});

$('#dateRangeField').each(function() {
  var date = $(this);
  var minDate = new Date(),
    maxDate = new Date("+30d");
  dateFunctions.dateRange(date, minDate, maxDate);
});
