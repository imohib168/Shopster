const userName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const sendMessage = document.getElementById("sendMessage");

sendMessage.addEventListener("click", () => {
    const nameValue = userName.value;
    const emailValue = email.value;
    const messageValue = message.value;

    if (nameValue.length > 0 && emailValue.length > 0 && messageValue.length > 0) {
        alert(`
            ${nameValue},
            Your Message has been Received. 
            and Response Email has been sent to your Email.
            Kindly Check your Email.! 
        `);
        location.href = "../index.html";
    } else {
        alert("Kindly fill All the below fields to submit the Contact form...")
    }

    userName.value = "";
    email.value = "";
    message.value = "";
})