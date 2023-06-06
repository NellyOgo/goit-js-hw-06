var form = document.querySelector(".login-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var emailInput = form.elements.email;
  var passwordInput = form.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Будь ласка, заповніть всі поля");
  } else {
    var loginData = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log(loginData);
    form.reset();
  }
});
