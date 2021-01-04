var userName = localStorage.getItem('name');
var showUser = document.getElementById("showUserName");

if (userName) {
    var login = document.getElementById("login");
    login.innerHTML = "<a>Signout</a>";
    login.addEventListener('click', () => {
        showUser.innerHTML = ` <strong> Hello, Anonymous User </strong> `;
        login.innerHTML = "<a>Login</a>";
        login.addEventListener('click', () => {
            location.href = "../../../login.html"
        })
    })
} else {
    var login = document.getElementById("login");
    login.addEventListener('click', () => {
        location.href = "../../../login.html"
    })
}

showUser.innerHTML = ` <strong> Hello, ${userName ? userName : "Anonymous User"} </strong> `;


// var userName = localStorage.getItem('name');
// var showUser = document.getElementById("showUserName");

// if (userName) {
//     var login = document.getElementById("login");
//     login.innerHTML = "<a>Signout</a>";
//     login.addEventListener('click', () => {
//         localStorage.clear();
//         login.innerHTML = "<a>Login</a>";
//         login.addEventListener('click', () => {
//             location.href = "../../../login.html"
//         })
//     })
// } else {
//     var login = document.getElementById("login");
//     login.addEventListener('click', () => {
//         location.href = "../../../login.html"
//     })
// }

// showUser.innerHTML = ` <strong> Hello, ${userName ? userName : "Anonymous User"} </strong> `;