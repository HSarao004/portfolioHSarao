//  /********************
//     Name: Harsimran Singh Sarao
//     Date:2023-12-08
//     Description:This is the js file for the contact.html file for validating the form.
// *********************/ 
function validate(e) {
  hideAllErrors();

  if (formHasErrors()) {
      e.preventDefault();
      return false;
  }
  window.location.href = "/index.html";
  return true;
}

function resetForm(e) {
  if (confirm('Reset')) {
      hideAllErrors();
      document.getElementById("name").focus();
      return true;
  }

  e.preventDefault();
  return false;
}

function formHasErrors() {
  let error = false;

  let requiredFields = ["name", "number", "email", "message"];

  for (let i = 0; i < requiredFields.length; i++) {
      let textField = document.getElementById(requiredFields[i]);
      if (!formFieldHasInput(textField)) {
          document.getElementById(requiredFields[i] + "_error").style.display = "block";
          error = true;
      }
  }

  let name = document.getElementById("name").value.trim();
  let number = document.getElementById("number").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let name_error = document.getElementById("name_error");
  let number_error = document.getElementById("number_error");
  let email_error = document.getElementById("email_error");
  let message_error = document.getElementById("message_error");

  if (!/^[a-zA-Z]+$/.test(name)) {
      name_error.style.display = "block";

      if (!error) {
        document.getElementById("name").focus();
        document.getElementById("name").select();
    }
      error = true;
  }

  if (!/^\d{10}$/.test(number)) {
      number_error.innerHTML = '*Enter a valid  10 digit number';
      number_error.style.display = 'block';
      if (!error) {
        document.getElementById("number").focus();
        document.getElementById("number").select();
      error = true;
  } else {
      number_error.style.display = 'none';
  }

  if (email === "") {
      email_error.style.display = "block";
      if (!error) {
        document.getElementById("email").focus();
        document.getElementById("email").select();
    }
      error = true;
  } else if (!validateEmail.test(email)) {
      email_error.innerHTML = '*Enter a valid email.';
      email_error.style.display = 'block';
      if (!error) {
        document.getElementById("email").focus();
        document.getElementById("email").select();
    }
      error = true;
  }

  if (message === "") {
      message_error.style.display = "block";
      if (!error) {
        document.getElementById("message").focus();
        document.getElementById("message").select();
    }

      error = true;
     }
  return error;
  }
  if (error) {
      if (!formFieldHasInput(document.getElementById("name"))) {
          document.getElementById("name").focus();
      } else if (!formFieldHasInput(document.getElementById("number"))) {
          document.getElementById("number").focus();
      } else if (!formFieldHasInput(document.getElementById("email"))) {
          document.getElementById("email").focus();
      } else if (!formFieldHasInput(document.getElementById("message"))) {
          document.getElementById("message").focus();
      }
  }

  return error;
}

function hideAllErrors() {
  let errorFields = document.getElementsByClassName("contact_error");
  for (let i = 0; i < errorFields.length; i++) {
      errorFields[i].style.display = "none";
  }
}

function formFieldHasInput(fieldElement) {
  return fieldElement.value.trim() !== "";
}

function load() {
  document.getElementById("contact_form").addEventListener("submit", validate);
  document.getElementById("contact_form").reset();
  document.getElementById("contact_form").addEventListener("reset", resetForm);
}

document.addEventListener('DOMContentLoaded', load);




