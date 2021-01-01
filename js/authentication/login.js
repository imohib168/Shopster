const em = localStorage.getItem('email');
const pas = localStorage.getItem('password');
console.log(em);
console.log(pas);

const email = document.getElementById("email");
const password = document.getElementById("password");

function login() {
    const emailValue = email.value;
    const passwordValue = password.value;

    if (emailValue.length == 0) {
        alert("Kindly Enter your Email...")
    } else if (passwordValue.length == 0) {
        alert("Kindly Enter your Password...")
    }

    if (emailValue == em && passwordValue == pas) {
        alert("You're now Logged in.!");
        location.href = "index.html";
    } else if (emailValue != em) {
        alert("Account doesn't Exist.!")
    } else {
        alert("Email or password is incorrect.!!")
    }
}