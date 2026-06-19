function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("All fields are required!");
    return false;
  }

  if (!email.includes("@")) {
    alert("Invalid email!");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
