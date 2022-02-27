function sayHello(userName, userLastName) {
    return "Hallo" + " " + userName + userLastName
}

let userInputF = prompt("Input your name :")
let userInputL = prompt("Input your Lastname :")

alert(sayHello(userInputF, userInputL))