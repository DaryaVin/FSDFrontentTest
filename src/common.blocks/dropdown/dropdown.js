import '@common/dropdown/dropdown.scss';
window.onclick = function(event) {
  if (!event.target.matches('.dropdown *')) {
    var dropdownConteners = $(".dropdown__dropdownContener");
    var dropdownButtons = $(".dropdown__dropdownButton");
    for (var i = 0; i < dropdownConteners.length; i++) {
      var openDropdown = dropdownConteners[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
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