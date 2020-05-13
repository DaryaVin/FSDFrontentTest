import '@common/dateDropdown/dateDropdown.scss';
import 'webpack-jquery-ui/datepicker';
import '@common/dateMask/dateMask.js';
// import 'inputmask/lib/extensions/inputmask.date.extensions';
import * as dateFuncs from '@common/dateMask/dateMask.js';

$(".dateDropdown").each(function() {
  var dateDropdown = $(this),
  field = dateDropdown.find('.dropdown__dropdownButton input'),
  calendar = dateDropdown.find('.calendarCard__datepicker'),
  resetButton = dateDropdown.find('.calendarCard__resetButton'),
  executeButton = dateDropdown.find('.calendarCard__executeButton');

  dateFuncs.addDateMask(field);

  calendar.change(function() {
    var date = $.datepicker.formatDate("dd.mm.yy", calendar.datepicker('getDate'));
    field.val(date);
  })

  executeButton.click(function() {
    // var date = $.datepicker.formatDate("dd.mm.yy", calendar.datepicker('getDate'));
    // field.val(date);
    field.click();
  });
  resetButton.click(function() {
    field.val('');
  });
  field.on('keyup', function() {
    if (field.inputmask("isComplete")) {
      var fieldVal = field.val();
      calendar.datepicker('setDate', fieldVal);
      resetButton.prop('hidden', false);
    };
  });
});
