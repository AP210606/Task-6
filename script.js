document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let messageError = document.getElementById("messageError");
  let successMessage = document.getElementById("successMessage");

  let isValid = true;

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  // Validate Name
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required!";
    isValid = false;
  }

  // Validate Email using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required!";
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    emailError.textContent = "Invalid email format!";
    isValid = false;
  }

  // Validate Message
  if (message.value.trim() === "") {
    messageError.textContent = "Message cannot be empty!";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    name.value = "";
    email.value = "";
    message.value = "";
  }
});
