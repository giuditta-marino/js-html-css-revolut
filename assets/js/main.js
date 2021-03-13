$(document).ready(function() {

  var dropdown = $('header .header-right ul li.drop');

  // AL MOUSEENTER SUGLI LI
  dropdown.mouseenter(function dropdownOn() {
    var dropdownPos = dropdown.index(this);
    var dropdownMenu = $('header .header-right .dropdown-menu');
    // NASCONDO TUTTI I DROPDOWN APERTI
    dropdownMenu.hide()
    // PER OGNI LI DEVO MOSTRARE IL DROPDOWN MENU CORRISPONDENTE
    dropdownMenu.eq(dropdownPos).show();
  })

  // AL CLICK SU UN PUNTO QUALSIASI DEL DOCUMENT
  $(document).click(function dropdownOff() {
    var dropdownMenu = $('header .header-right .dropdown-menu');
    // NASCONDO GLI LI
    dropdownMenu.hide();
  })





})
