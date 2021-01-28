const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const address1 = document.getElementById("address1");
const address2 = document.getElementById("address2");
const quantity = document.getElementById("quan");
const contact = document.getElementById("contact");
const message = document.getElementById("message");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let address1Value = address1.value;
    let address2Value = address2.value;
    let quantityValue = quantity.value;
    let contactValue = contact.value;
    let messageValue = message.value;

    if (firstNameValue == "") {
        alert("kindly, Enter your First Name...");
    } else if (lastNameValue == "") {
        alert("kindly, Enter your Last Name...");
    } else if (address1Value == "") {
        alert("kindly, Enter your 1st Address...");
    } else if (address2Value == "") {
        alert("kindly, Enter your 2nd Address...");
    } else if (quantityValue == "") {
        alert("kindly, Enter product Quantity...");
    } else if (contactValue == "") {
        alert("kindly, Enter your Contact number");
    } else if (messageValue == "") {
        alert("kindly, Enter Message");
    } else {
        alert("Order Confirmed..!!");
        location.href = "index.html";

        firstNameValue = "";
        lastNameValue = "";
        address1Value = "";
        address2Value = "";
        quantityValue = "";
        contactValue = "";
        messageValue = "";
    }

})
