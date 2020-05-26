import * as funcsDateMask from '@common/dateMask/dateMask.js';

$(".regCard__birthdayField input").each(function(){
  var data = $(this);
  var minDate = new Date("1900, 01, 01"),
    maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  funcsDateMask.addDateMask(data, minDate, maxDate);
});
