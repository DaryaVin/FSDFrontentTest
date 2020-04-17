import '@common/dropdown/dropdown.scss';

$('.dropdown').each(function() {
  var dropdown = $(this),
  dropdownContener = dropdown.find('.dropdown__dropdownContener'),
  dropdownButton = dropdown.find('.dropdown__dropdownButton');

    dropdownButton.click(function() {
      dropdownButton.toggleClass("formField__field_version_dropdown");
      dropdownContener.toggleClass("show");
    });

    $(document).mouseup(function(event) {
      if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
        if (dropdownContener.hasClass('show')) {
          dropdownContener.removeClass('show');
        }
        if (dropdownButton.hasClass('formField__field_version_dropdown')) {
          dropdownButton.removeClass('formField__field_version_dropdown');
        }
      }
    });
})
