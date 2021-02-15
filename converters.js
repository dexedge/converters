/*
Austrian converters (2021), JavaScript
Version 0.1
Dexter Edge
2021-02-13

Approach based on the underlying HTML and JavaScript (not the 'Try It' code) at the page https://www.w3schools.com/howto/howto_js_weight_converter.asp
*/

// Clear Form
var clearButton = document.querySelector('#b');

var inputs = document.querySelectorAll("input");

function clearForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
  
  }

clearButton.addEventListener('click', clearForm)

  
// Length Converter

function lengthConverter(source, inputValue) {
    inputValue = parseFloat(inputValue);
    var klafter = document.querySelector("#klafter");
    var fuss = document.querySelector("#fuss");
    var meters = document.querySelector("#meters");
    var feet = document.querySelector("#feet");
    var zoll = document.querySelector("#zoll");
    var cm = document.querySelector("#cm");
    var inches = document.querySelector("#inches");
    
    // One Wiener Klafter = 1.89648384 meters
    // https://de.wikipedia.org/wiki/Alte_Ma%C3%9Fe_und_Gewichte_(%C3%96sterreich)
    const klafterToMeters = 1.89648384;
    const metersToKlafter = 1/klafterToMeters;
    const metersToFeet = 3.28084;
    const feetToMeters = 1/metersToFeet;
    

    if (source == "klafter") {
        fuss.value = (inputValue * 6);
        meters.value = (inputValue * klafterToMeters).toFixed(4);
        feet.value = (inputValue * klafterToMeters * metersToFeet).toFixed(4);
        zoll.value = (inputValue * 72);
        cm.value = (inputValue * klafterToMeters * 100).toFixed(4);
        inches.value = (inputValue * klafterToMeters * metersToFeet * 12).toFixed(4);
    }
    if (source == "fuss") {
        klafter.value = (inputValue / 6).toFixed(4);
        meters.value = (inputValue / 6 * klafterToMeters).toFixed(4)
        feet.value = (inputValue / 6 * klafterToMeters * metersToFeet).toFixed(4);
        zoll.value = (inputValue * 12);
        cm.value = (inputValue / 6 * klafterToMeters * 100).toFixed(4);
        inches.value = (inputValue /6 * klafterToMeters * metersToFeet * 12).toFixed(4);
    }
    if (source == "meters") {
        klafter.value = (inputValue * metersToKlafter).toFixed(4);
        fuss.value = (inputValue * metersToKlafter * 6).toFixed(4);
        feet.value = (inputValue * metersToFeet).toFixed(4);
        zoll.value = (inputValue * metersToKlafter * 72).toFixed(4);
        cm.value = (inputValue * 100).toFixed(4);
        inches.value = (inputValue * metersToFeet * 12).toFixed(4);
    }
    if (source == "feet") {
        klafter.value = (inputValue * feetToMeters * metersToKlafter).toFixed(4);
        fuss.value = (inputValue * feetToMeters * metersToKlafter * 6).toFixed(4);
        meters.value = (inputValue * feetToMeters).toFixed(4);
        zoll.value = (inputValue * feetToMeters * metersToKlafter * 72).toFixed(4);
        cm.value = (inputValue * feetToMeters * 100).toFixed(4);
        inches.value = (inputValue * 12).toFixed(4);
    }
    if (source == "zoll") {
        klafter.value = (inputValue/72).toFixed(4);
        fuss.value = (inputValue/12).toFixed(4);
        meters.value = (inputValue/72 * klafterToMeters).toFixed(4);
        feet.value = (inputValue/72 * klafterToMeters * metersToFeet).toFixed(4);
        cm.value = (inputValue/72 * klafterToMeters * 100).toFixed(4);
        inches.value = (inputValue/72 * klafterToMeters * metersToFeet * 12).toFixed(4);
    }
    if (source == "cm") {
        klafter.value = (inputValue/100 * metersToKlafter).toFixed(4);
        fuss.value = (inputValue/100 * metersToKlafter * 6).toFixed(4);
        meters.value = (inputValue/100 ).toFixed(4);
        feet.value = (inputValue/100 * metersToFeet).toFixed(4);
        zoll.value = (inputValue/100 * metersToKlafter * 72).toFixed(4);
        inches.value = (inputValue/100 * metersToFeet * 12).toFixed(4);
    }
    if (source == "inches") {
        klafter.value = (inputValue/12 * feetToMeters * metersToKlafter).toFixed(4);
        fuss.value = (inputValue/12 * feetToMeters * metersToKlafter * 6).toFixed(4);
        meters.value = (inputValue/12 * feetToMeters).toFixed(4);
        feet.value = (inputValue/12).toFixed(4);
        zoll.value = (inputValue/12 * feetToMeters * metersToKlafter * 72).toFixed(4);
        cm.value = (inputValue/12 * feetToMeters * 100).toFixed(4);
    }
}

// Temperature Converter

function temperatureConverter(source, inputValue) {
    inputValue = parseFloat(inputValue);
    var reaumur = document.querySelector("#reaumur");
    var celsius = document.querySelector("#celsius");
    var fahrenheit = document.querySelector("#fahrenheit");

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