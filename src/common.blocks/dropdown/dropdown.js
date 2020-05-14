import '@common/dropdown/dropdown.scss';

$('.dropdown').each(function() {
  var dropdown = $(this),
  dropdownContener = dropdown.find('.dropdown__dropdownContener'),
  dropdownButton = dropdown.find('.dropdown__dropdownButton'),
  dropdownButtonContent = dropdownButton.find('*');

    dropdownButton.click(function() {
      dropdownButton.toggleClass("formField__field_version_dropdown");
      dropdownContener.toggleClass("show");
    });
    dropdownButtonContent.focus(function() {
      if (!dropdownButtonContent.attr('readonly')) {
        if (!dropdownButton.hasClass('formField__field_version_dropdown')) {
          dropdownButton.addClass('formField__field_version_dropdown');
        }
        if (!dropdownContener.hasClass('show')) {
          dropdownContener.addClass('show');
        }
      }
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
