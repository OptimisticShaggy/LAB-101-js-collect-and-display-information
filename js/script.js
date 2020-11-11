let vfName = document.getElementById('fName')
let vlName = document.getElementById('lName')
let vdText = document.getElementById('dText')
let vuEmail = document.getElementById('uEmail')
let vuPhone = document.getElementById('uPhone')
let textINNERHTML = document.getElementById('textINNERHTML')
let textHTML = document.getElementById('textHTML')

/// The lines above store all the data from the elements with the specific ID inside the letiable to the left

let updateForm = function () {
  let vvfName = vfName.value
  let vvlName = vlName.value
  let vvdText = vdText.value
  let vvuEmail = vuEmail.value
  let vvuPhone = vuPhone.value

  /// Stores the value of the IDed element from the top of the list into the letiable to the left.

  textINNERHTML.innerHTML =
'<h1>Hi, my name is ' + vvfName + vvlName + '!</h1><p> ' + vvdText + ' </p><p>If you\'re interested in a date, you can email me at <a href="mailto:' + vvuEmail + '" target="_blank">' + vvuEmail + '</a> or give me a call at <a href="tel:' + vuPhone + '" target="_blank">' + vvuPhone + '</a>.</p>'

  /// Passes all the text and letiable's value from the list above and injects this text directly in the HTML document.

  textHTML.textContent =
'<h1>Hi, my name is ' + vvfName + vvlName + '!</h1><p> ' + vvdText + ' </p><p>If you\'re interested in a date, you can email me at <a href="mailto:' + vvuEmail + '" target="_blank">' + vvuEmail + '</a> or give me a call at <a href="tel:' + vvuPhone + '" target="_blank">' + vvuPhone + '</a>.</p>'

  /// Passes all the text and letiable's value from the list above and injects this HTML directly in the HTML document.
}

vfName.addEventListener('input', updateForm)
vlName.addEventListener('input', updateForm)
vdText.addEventListener('input', updateForm)
vuEmail.addEventListener('input', updateForm)
vuPhone.addEventListener('input', updateForm)

/// Adds an event listener to each of these fields, watching when input is passed through.
