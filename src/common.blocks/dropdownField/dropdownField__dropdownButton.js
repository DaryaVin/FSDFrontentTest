function dropdownButtonOnClick(id) {
  document.getElementById("dropdown__dropdownContener" + id).classList.toggle("colomnsContener");
  document.getElementById("dropdown__dropdownButton" + id).classList.toggle("formField__field_version_dropdown");
};