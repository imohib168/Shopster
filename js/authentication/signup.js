const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const signupButton = document.getElementById("signupButton");

signupButton.addEventListener("click", () => {
    const nameValue = userName.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    const em = localStorage.getItem('email');

    if (nameValue.length == 0) {
        alert("Kindly Enter your Name...")
    } else if (emailValue.length == 0) {
        alert("Kindly Enter your Email...")
    } else if (passwordValue.length == 0) {
        alert("Kindly Enter your Password...")
    } else if (passwordValue.length < 8) {
        alert("Password must be 8 characters long...")
    } else if (emailValue == em) {
        alert("Account already exists.!!");
        location.href = "login.html";
    } else {
        localStorage.setItem('email', emailValue);
        localStorage.setItem('password', passwordValue);
        alert('Your account has been created');
        location.href = "login.html"
    }

    nameValue = "";
    emailValue = "";
    passwordValue = "";

})