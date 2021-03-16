function connectForm() {
  const form = getQuery('#form');
  form.addEventListener('submit', submitForm);
}

function submitForm(event) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  simpleValidation(firstName, '.error1', 'Please enter your first name', event);
  simpleValidation(lastName, '.error2', 'Please enter your last name', event);
  regexValidation(email, '.error3', 'Please enter a valid email address', regex, event);
  minCharactersValidation(password, '.error4', 'Your password must have at least 8 characters', 7, event);
}

function simpleValidation(input, errorTag, errorMessage, event) {
  if (input.value == null || input.value.trim() === '') {
    getQuery(errorTag).innerText = errorMessage;
    input.classList.add('errorInput');
    return event.preventDefault();
  } else {
    getQuery(errorTag).innerText = '';
    input.classList.remove('errorInput');
    return input.value;
  }
}

function regexValidation(input, errorTag, errorMessage, regex, event) {
  if (!regex.test(input.value)) {
    getQuery(errorTag).innerText = errorMessage;
    input.classList.add('errorInput');
    return event.preventDefault();
  } else {
    getQuery(errorTag).innerText = '';
    input.classList.remove('errorInput');
    return input.value;
  }
}

function minCharactersValidation(input, errorTag, errorMessage, minCharacters, event) {
  if (input.value.length <= minCharacters || input.value == null || input.value.trim() === '') {
    getQuery(errorTag).textContent = errorMessage;
    input.classList.add('errorInput');
    return event.preventDefault();
  } else {
    getQuery(errorTag).innerText = '';
    input.classList.remove('errorInput');
    return input.value;
  }
}

function getQuery(query) {
  return document.querySelector(query);
}

connectForm();
