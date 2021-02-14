/*
Austrian converters (Bootstrap), JavaScript
Version 0.1
Dexter Edge
2018-09-05

Approach based on the underlying HTML and JavaScript (not the 'Try It' code) at the page https://www.w3schools.com/howto/howto_js_weight_converter.asp
*/

function temperatureConverter(source, inputValue) {
    inputValue = parseFloat(inputValue);
    var reaumur = document.getElementById("reaumur");
    var celsius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");

    if (source == "reaumur") {
        fahrenheit.value = (inputValue * 2.25 + 32).toFixed(2);
        celsius.value = (inputValue * 1.25).toFixed(2);
    }
    if (source == "celsius") {
        reaumur.value = (inputValue/1.25).toFixed(2);
        fahrenheit.value = ((inputValue * 1.8) + 32).toFixed(2);
    }
    if (source == "fahrenheit") {
        reaumur.value = ((inputValue - 32)/2.25).toFixed(2);
        celsius.value = ((inputValue - 32)/1.8).toFixed(2);
    }
}

function lengthConverter(source, inputValue) {
    inputValue = parseFloat(inputValue);
    var klafter = document.getElementById("klafter");
    var meters = document.getElementById("meters");
    var feet = document.getElementById("feet");

    if (source == "klafter") {
        meters.value = (inputValue * 1.8965).toFixed(4);
        feet.value = (inputValue * 6.2205).toFixed(4);
    }
    if (source == "meters") {
        klafter.value = (inputValue * 0.52729).toFixed(4);
        feet.value = (inputValue * 3.2808).toFixed(4);
    }
    if (source == "feet") {
        klafter.value = (inputValue * 0.16076).toFixed(4);
        meters.value = (inputValue * 0.3048).toFixed(4);
    }
}
