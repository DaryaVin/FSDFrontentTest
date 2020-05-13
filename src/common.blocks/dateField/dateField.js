import '@common/dateField/dateField.scss';
import 'webpack-jquery-ui/datepicker';
import '@common/dateMask/dateMask.js';
// import 'inputmask/lib/extensions/inputmask.date.extensions';
import * as dateFuncs from '@common/dateMask/dateMask.js';

$(".dateField").each(function() {
  var dateField = $(this),
  field = dateField.find('.dropdown__dropdownButton input'),
  calendar = dateField.find('.calendarCard__datepicker'),
  resetButton = dateField.find('.calendarCard__resetButton'),
  executeButton = dateField.find('.calendarCard__executeButton');

  dateFuncs.addDateMask(field);

  executeButton.click(function() {
    var date = $.datepicker.formatDate("dd.mm.yy", calendar.datepicker('getDate'));
    field.val(date);
  });
  resetButton.click(function() {
    field.val('');
  });
  field.on('keyup', function() {
    // console.log(field.inputmask("isComplete"));

    if (field.inputmask("isComplete")) {
      var fieldVal = field.val();
      calendar.datepicker('setDate', fieldVal);
      resetButton.prop('hidden', false);
    };
  });
});
