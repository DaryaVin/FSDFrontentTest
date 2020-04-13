import '@common/dropdownField/dropdownField.scss';
window.onclick = function(event) {
  if (!event.target.matches('.dropdown *')) {
    var dropdownConteners = $(".dropdown__dropdownContener");
    var dropdownButtons = $(".dropdown__dropdownButton");
    for (var i = 0; i < dropdownConteners.length; i++) {
      var openDropdown = dropdownConteners[i];
      if (openDropdown.classList.contains('colomnsContener')) {
        openDropdown.classList.remove('colomnsContener');
      }
    }
    for (var i = 0; i < dropdownButtons.length; i++) {
      var openDropdown = dropdownButtons[i];
      if (openDropdown.classList.contains('formField__field_version_dropdown')) {
        openDropdown.classList.remove('formField__field_version_dropdown');
      }
    }
  }
}