let correctPassword = "password";
let userPassword = prompt("What is your password?");
console.log("hello");
function checkPassword (password) {
    let tries = 3;
    while (tries != 0) {
        if (password != correctPassword) {
            tries--;
            alert("Wrong password! You have " + tries + " left");
        } else {
            alert("Correct password!");
            document.write("<h1>Secret information</h1>");
            return 0;
    }
}
}
checkPassword(userPassword);