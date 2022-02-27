function toCelsius(Fahrenheit) {
    let value = (Fahrenheit - 32) * 5 / 9
    return "Fahrenheit is: " + value.toFixed(2) + " degrees Celsius";
}

function display(elementId, value) {
    document.getElementById(elementId).innerHTML = "<b>" + value + "</b>"
}

function degrees_Celsius(Celsius) {
    let value = (Celsius * 9 / 5) + 32
    return "degrees Celsius is : " + value.toFixed(2) + " Fahrenheit";
}

function toCelsiusProgram(value) {
    alert(toCelsius(value))
}

function degrees_Celsius_Program(value) {
    alert(degrees_Celsius(value))
}


function Return_stock(Profit, capitali) {
    let value = Profit / capitali
    return "Your Profit is: " + value.toFixed(2) + " USD$";
}