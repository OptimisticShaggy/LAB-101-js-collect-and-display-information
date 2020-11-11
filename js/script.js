/// Variables:
/// var_______: Variables storing the elements from within the document.
/// parsed_____: Variables taking the input that is parsed from the elements within the document.
/// profileText: Variable storing template for user's profile information

const varfName = document.getElementById('fName')
const varlName = document.getElementById('lName')
const vardText = document.getElementById('dText')
const varuEmail = document.getElementById('uEmail')
const varuPhone = document.getElementById('uPhone')
const textINNERHTML = document.getElementById('textINNERHTML')
const textHTML = document.getElementById('textHTML')

/// The lines above store all the data from the elements with the specific ID inside the constiable to the left

const updateForm = function () {
  const parsedfName = varfName.value
  const parsedlName = varlName.value
  const parseddText = vardText.value
  const parseduEmail = varuEmail.value
  const parseduPhone = varuPhone.value

  /// Stores the value of the IDed element from the top of the list into the constiable to the left.

  const profileText = '<h1>Hi, my name is ' + parsedfName + ' ' + parsedlName + '!</h1><p> ' + parseddText + ' </p><p>If you\'re interested in a date, you can email me at <a href="mailto:' + parseduEmail + '" target="_blank">' + parseduEmail + '</a> or give me a call at <a href="tel:' + parseduPhone + '" target="_blank">' + parseduPhone + '</a>.</p>'
  /// Stores the profile in the variable.

  textINNERHTML.innerHTML = profileText
  /// Passes all the text and constiable's value from the list above and injects this text directly in the HTML document.

  textHTML.textContent = profileText
  /// Passes all the text and constiable's value from the list above and injects this HTML directly in the HTML document.
}

varfName.addEventListener('input', updateForm)
varlName.addEventListener('input', updateForm)
vardText.addEventListener('input', updateForm)
varuEmail.addEventListener('input', updateForm)
varuPhone.addEventListener('input', updateForm)

/// Adds an event listener to each of these fields, watching when input is passed through.
