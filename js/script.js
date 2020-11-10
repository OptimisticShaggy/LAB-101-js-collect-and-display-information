var vfName = document.getElementById('fName')
var vlName = document.getElementById('lName')
var vdText = document.getElementById('dText')
var vuEmail = document.getElementById('uEmail')
var vuPhone = document.getElementById('uPhone')

/// The lines above store all the data from the elements with the specific ID inside the variable to the left

var updateForm = function() {
  var vvfName = vfName.value;
  var vvlName = vlName.value;
  var vvdText = vdText.value;
  var vvuEmail = vuEmail.value;
  var vvuPhone = vuPhone.value;

/// Stores the value of the IDed element from the top of the list into the variable to the left.

textINNERHTML.innerHTML =
'<h1>Hi, my name is ' + vvfName + vvlName + '!</h1>\
<p> ' + vvdText + ' </p>\
<p>\
If you\'re interested in a date, you can email me at <a href="mailto:' + vvuEmail + '" target="_blank">' + vvuEmail + '</a> or give me a call at <a href="tel:' + vuPhone + '" target="_blank">' + vvuPhone + '</a>.\
  </p>\
';

/// Passes all the text and variable's value from the list above and injects this text directly in the HTML document.

textHTML.textContent =
'<h1>Hi, my name is ' + vvfName + vvlName + '!</h1>\
<p> ' + vvdText + ' </p>\
<p>\
If you\'re interested in a date, you can email me at <a href="mailto:' + vvuEmail + '" target="_blank">' + vvuEmail + '</a> or give me a call at <a href="tel:' + vvuPhone + '" target="_blank">' + vvuPhone + '</a>.\
  </p>\
';

/// Passes all the text and variable's value from the list above and injects this HTML directly in the HTML document.
}

vfName.addEventListener('input', updateForm)
vlName.addEventListener('input', updateForm)
vdText.addEventListener('input', updateForm)
vuEmail.addEventListener('input', updateForm)
vuPhone.addEventListener('input', updateForm)

/// Adds an event listener to each of these fields, watching when input is passed through.
