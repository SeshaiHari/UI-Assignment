function validateForm() {
  var name = document.querySelector("#form-name");
  var age = document.querySelector("#form-age");
  var email = document.querySelector("#form-email");
  var tele = document.querySelector("#form-mobile");

  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  if (age == "" || isNaN(age) || age < 0 || age > 150) {
    alert("Please provide age in numbers between 0 & 150");
    return false;
  }

  if (
    email.length < 11 ||
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= email.length
  ) {
    alert("Please enter a valid e-mail address");
    return false;
  }

  if (tele.length != 10) {
    alert("Phone number must contain 10 digits");
    return false;
  }
}
