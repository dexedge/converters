/*
Austrian converters (development version), JavaScript
Version 0.2
Dexter Edge
2021-02-24

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
    var meile = document.querySelector("#meile")
    var wienerklafter = document.querySelector("#wienerklafter");
    var wienerfuss = document.querySelector("#wienerfuss");
    var wienerzoll = document.querySelector("#wienerzoll");
    var salzburgerklafter = document.querySelector("#salzburgerklafter");
    var salzburgerfuss = document.querySelector("#salzburgerfuss");
    var salzburgerzoll = document.querySelector("#salzburgerzoll");
    var kilometers = document.querySelector("#kilometers");
    var meters = document.querySelector("#meters");
    var cm = document.querySelector("#cm");
    var miles = document.querySelector("#miles");
    var feet = document.querySelector("#feet");
    var inches = document.querySelector("#inches");
    
    // One Wiener Klafter = 1.89648384 meters
    // https://de.wikipedia.org/wiki/Alte_Ma%C3%9Fe_und_Gewichte_(%C3%96sterreich)
    const klafterToMeters = 1.89648384;
    const metersToKlafter = 1/klafterToMeters;
    const metersToFeet = 3.28084;
    const feetToMeters = 1/metersToFeet;
    
    // Salzburger lengths are 16/17 times Wiener lengths
    // 1 Meile = 4000 Wiener Klafter
    // Formulas are *not* reduced to simplest form in order to retain clarity
    // in the steps of the conversions

    if (source == "meile") {
        wienerklafter.value = (inputValue * 4000).toPrecision(6);
        wienerfuss.value = (inputValue * 4000 * 6).toPrecision(6);
        wienerzoll.value = (inputValue* 4000 * 72).toPrecision(6);
        salzburgerklafter.value = (inputValue * 4000 * 16/17).toPrecision(6);
        salzburgerfuss.value = (inputValue * 4000 * 6 * 16/17).toPrecision(6);
        salzburgerzoll.value = (inputValue * 4000 * 72 * 16/17).toPrecision(6);
        kilometers.value = (inputValue * 4000 * klafterToMeters/1000).toPrecision(6);
        meters.value = (inputValue * 4000 * klafterToMeters).toPrecision(6);
        cm.value = (inputValue * 4000 * klafterToMeters * 100).toPrecision(6);
        miles.value = 
            (inputValue * 4000 * klafterToMeters * metersToFeet/5280).toPrecision(6);
        feet.value = (inputValue * 4000 * klafterToMeters * metersToFeet).toPrecision(6);
        inches.value = 
            (inputValue * 4000 * klafterToMeters * metersToFeet * 12).toPrecision(6);
    }
    if (source == "wienerklafter") {
        meile.value = (inputValue/4000).toPrecision(6);
        wienerfuss.value = (inputValue * 6).toPrecision(6);
        wienerzoll.value = (inputValue * 72).toPrecision(6);
        salzburgerklafter.value = (inputValue * 16/17).toPrecision(6);
        salzburgerfuss.value = (inputValue * 6 * 16/17).toPrecision(6);
        salzburgerzoll.value = (inputValue * 72 * 16/17).toPrecision(6);
        kilometers.value = (inputValue * klafterToMeters/1000).toPrecision(6);
        meters.value = (inputValue * klafterToMeters).toPrecision(6);
        cm.value = (inputValue * klafterToMeters * 100).toPrecision(6);
        miles.value = (inputValue * klafterToMeters * metersToFeet/5280).toPrecision(6);
        feet.value = (inputValue * klafterToMeters * metersToFeet).toPrecision(6);
        inches.value = (inputValue * klafterToMeters * metersToFeet * 12).toPrecision(6);
    }
    if (source == "wienerfuss") {
        meile.value = (inputValue/4000/6).toPrecision(6);
        wienerklafter.value = (inputValue/6).toPrecision(6);
        wienerzoll.value = (inputValue * 12).toPrecision(6);
        salzburgerklafter.value = (inputValue/6 * 16/17).toPrecision(6);
        salzburgerfuss.value = (inputValue * 16/17 ).toPrecision(6);
        salzburgerzoll.value = (inputValue * 12 * 16/17).toPrecision(6);
        meters.value = (inputValue/6 * klafterToMeters).toPrecision(6);
        kilometers.value = (inputValue/6 * klafterToMeters/1000).toPrecision(6);
        cm.value = (inputValue/6 * klafterToMeters * 100).toPrecision(6);
        miles.value = (inputValue/6 * klafterToMeters * metersToFeet/5280).toPrecision(6);
        feet.value = (inputValue/6 * klafterToMeters * metersToFeet).toPrecision(6);
        inches.value = (inputValue/6 * klafterToMeters * metersToFeet * 12).toPrecision(6);
    }
    if (source == "wienerzoll") {
        meile.value = (inputValue/4000/72).toPrecision(6);
        wienerklafter.value = (inputValue/72).toPrecision(6);
        wienerfuss.value = (inputValue/12).toPrecision(6);
        salzburgerklafter.value = (inputValue/72 * 16/17 ).toPrecision(6);
        salzburgerfuss.value = (inputValue/12 * 16/17 ).toPrecision(6);
        salzburgerzoll.value = (inputValue * 16/17).toPrecision(6);
        kilometers.value = (inputValue/72 * klafterToMeters/1000).toPrecision(6);
        meters.value = (inputValue/72 * klafterToMeters).toPrecision(6);
        cm.value = (inputValue/72 * klafterToMeters * 100).toPrecision(6);
        miles.value = (inputValue/72 * klafterToMeters * metersToFeet/5280).toPrecision(6);
        feet.value = (inputValue/72 * klafterToMeters * metersToFeet).toPrecision(6);
        inches.value = (inputValue/72 * klafterToMeters * metersToFeet * 12).toPrecision(6);
    }
    if (source == "salzburgerklafter") {
        meile.value = (inputValue/4000 * 17/16 ).toPrecision(6);
        wienerklafter.value = (inputValue * 17/16).toPrecision(6);
        wienerfuss.value = (inputValue * 6 * 17/16).toPrecision(6);
        wienerzoll.value = (inputValue * 72 * 17/16).toPrecision(6);
        salzburgerfuss.value = (inputValue * 6).toPrecision(6);
        salzburgerzoll.value = (inputValue * 72).toPrecision(6);
        kilometers.value = (inputValue * klafterToMeters/1000 * 17/16).toPrecision(6);
        meters.value = (inputValue * klafterToMeters * 17/16).toPrecision(6);
        cm.value = (inputValue * klafterToMeters * 100 * 17/16).toPrecision(6);
        miles.value = 
            (inputValue * klafterToMeters * metersToFeet/5280 * 17/16).toPrecision(6);
        feet.value = 
            (inputValue * klafterToMeters * metersToFeet * 17/16).toPrecision(6);
        inches.value = 
            (inputValue * klafterToMeters * metersToFeet * 12 * 17/16).toPrecision(6);
        }
    if (source == "salzburgerfuss") {
        meile.value = (inputValue/4000/6 * 17/16).toPrecision(6);
        wienerklafter.value = (inputValue/6 * 17/16).toPrecision(6);
        wienerfuss.value = (inputValue * 17/16).toPrecision(6);
        wienerzoll.value = (inputValue * 12 * 17/16).toPrecision(6);
        salzburgerklafter.value = (inputValue/6).toPrecision(6);
        salzburgerzoll.value = (inputValue * 12).toPrecision(6);
        kilometers.value = (inputValue/6 * klafterToMeters/1000 * 17/16).toPrecision(6);
        meters.value = (inputValue/6 * klafterToMeters * 17/16).toPrecision(6);
        cm.value = 
            (inputValue/6 * klafterToMeters * 100 * 17/16).toPrecision(6);
        miles.value = 
            (inputValue/6 * klafterToMeters * metersToFeet/5280 * 17/16).toPrecision(6);
        feet.value = 
            (inputValue/6 * klafterToMeters * metersToFeet * 17/16).toPrecision(6);
        inches.value = 
            (inputValue/6 * klafterToMeters * metersToFeet * 12 * 17/16).toPrecision(6);
    }
    if (source == "salzburgerzoll") {
        meile.value = (inputValue/4000/72 * 17/16).toPrecision(6);
        wienerklafter.value = (inputValue/72 * 17/16).toPrecision(6);
        wienerfuss.value = (inputValue/12 * 17/16).toPrecision(6);
        wienerzoll.value = (inputValue * 17/16).toPrecision(6);
        salzburgerklafter.value = (inputValue/72).toPrecision(6);
        salzburgerfuss.value = (inputValue/12).toPrecision(6);
        kilometers.value = (inputValue/72 * klafterToMeters/1000 * 17/16).toPrecision(6);
        meters.value = (inputValue/72 * klafterToMeters * 17/16).toPrecision(6);
        cm.value = (inputValue/72 * klafterToMeters * 100 * 17/16).toPrecision(6);
        miles.value = 
            (inputValue/72 * klafterToMeters * metersToFeet/5280 * 17/16).toPrecision(6);
        feet.value = 
            (inputValue/72 * klafterToMeters * metersToFeet * 17/16).toPrecision(6);
        inches.value = 
            (inputValue/72 * klafterToMeters * metersToFeet * 12 * 17/16).toPrecision(6);
    }
    if (source == "kilometers") {
        meile.value = (inputValue * 1000 * metersToKlafter/4000).toPrecision(6);
        wienerklafter.value = (inputValue * 1000 * metersToKlafter).toPrecision(6);
        wienerfuss.value = (inputValue * 1000 * metersToKlafter * 6).toPrecision(6);
        wienerzoll.value = (inputValue * 1000 * metersToKlafter * 72).toPrecision(6);
        salzburgerklafter.value = 
            (inputValue * 1000 * metersToKlafter * 16/17).toPrecision(6);
        salzburgerfuss.value = 
            (inputValue * 1000 * metersToKlafter * 6 * 16/17).toPrecision(6);
        salzburgerzoll.value = 
            (inputValue * 1000 * metersToKlafter * 72 * 16/17).toPrecision(6);
        meters.value = (inputValue * 1000).toPrecision(6);
        cm.value = (inputValue * 100000).toPrecision(6);
        miles.value = (inputValue * 1000 * metersToFeet/5280).toPrecision(6);
        feet.value = (inputValue * 1000 * metersToFeet).toPrecision(6);
        inches.value = (inputValue * 1000 * metersToFeet * 12).toPrecision(6);
    }
    if (source == "meters") {
        meile.value = (inputValue * metersToKlafter/4000).toPrecision(6);
        wienerklafter.value = 
            (inputValue * metersToKlafter).toPrecision(6);
        wienerfuss.value = 
            (inputValue * metersToKlafter * 6).toPrecision(6);
        wienerzoll.value = 
            (inputValue * metersToKlafter * 72).toPrecision(6);
        salzburgerklafter.value = 
            (inputValue * metersToKlafter * 16/17).toPrecision(6);
        salzburgerfuss.value = 
            (inputValue * metersToKlafter * 6 * 16/17).toPrecision(6);
        salzburgerzoll.value = 
            (inputValue * metersToKlafter * 72 * 16/17).toPrecision(6);
        kilometers.value = (inputValue/1000).toPrecision(6);
        cm.value = (inputValue * 100).toPrecision(6);
        miles.value = (inputValue * metersToFeet/5280).toPrecision(6);
        feet.value = (inputValue * metersToFeet).toPrecision(6);
        inches.value = (inputValue * metersToFeet * 12).toPrecision(6);
    }
    if (source == "cm") {
        meile.value = (inputValue/100 * metersToKlafter/4000).toPrecision(6);
        wienerklafter.value = 
            (inputValue/100 * metersToKlafter).toPrecision(6);
        wienerfuss.value = 
            (inputValue/100 * metersToKlafter * 6).toPrecision(6);
        wienerzoll.value = 
            (inputValue/100 * metersToKlafter * 72).toPrecision(6);
        salzburgerklafter.value = 
            (inputValue/100 * metersToKlafter * 16/17).toPrecision(6);
        salzburgerfuss.value = 
            (inputValue/100 * metersToKlafter * 6 * 16/17).toPrecision(6);
        salzburgerzoll.value = 
            (inputValue/100 * metersToKlafter * 72 * 16/17).toPrecision(6);
        kilometers.value = (inputValue/100000).toPrecision(6);
        meters.value = (inputValue/100 ).toPrecision(6);
        miles.value = (inputValue/100 * metersToFeet/5280).toPrecision(6);
        feet.value = (inputValue/100 * metersToFeet).toPrecision(6);
        inches.value = (inputValue/100 * metersToFeet * 12).toPrecision(6);
    }
    if (source == "miles") {
        meile.value = 
            (inputValue * 5280 * feetToMeters * metersToKlafter/4000).toPrecision(6);
        wienerklafter.value = 
            (inputValue * 5280 * feetToMeters * metersToKlafter).toPrecision(6);
        wienerfuss.value = 
            (inputValue * 5280 * feetToMeters * metersToKlafter * 6).toPrecision(6);
        wienerzoll.value = 
            (inputValue * 5280 * feetToMeters * metersToKlafter * 72).toPrecision(6);
        salzburgerklafter.value = 
            (inputValue * 5280 * feetToMeters * metersToKlafter * 16/17).toPrecision(6);
        salzburgerfuss.value = 
            (inputValue * 5280 * feetToMeters * metersToKlafter * 6 * 16/17).toPrecision(6);
        salzburgerzoll.value = 
            (inputValue * 5280 * feetToMeters * metersToKlafter * 72 * 16/17).toPrecision(6);
        kilometers.value = (inputValue * 5280 * feetToMeters/1000).toPrecision(6);
        meters.value = (inputValue * 5280 * feetToMeters).toPrecision(6);
        cm.value = (inputValue * 5280 * feetToMeters * 100).toPrecision(6);
        feet.value = (inputValue * 5280).toPrecision(6);
        inches.value = (inputValue * 5280 * 12).toPrecision(6);
    }
    if (source == "feet") {
        meile.value = (inputValue * feetToMeters * metersToKlafter/4000).toPrecision(6);
        wienerklafter.value = 
            (inputValue * feetToMeters * metersToKlafter).toPrecision(6);
        wienerfuss.value = 
            (inputValue * feetToMeters * metersToKlafter * 6).toPrecision(6);
        wienerzoll.value = 
            (inputValue * feetToMeters * metersToKlafter * 72).toPrecision(6);
        salzburgerklafter.value = 
            (inputValue * feetToMeters * metersToKlafter * 16/17).toPrecision(6);
        salzburgerfuss.value = 
            (inputValue * feetToMeters * metersToKlafter * 6 * 16/17).toPrecision(6);
        salzburgerzoll.value = 
            (inputValue * feetToMeters * metersToKlafter * 72 * 16/17).toPrecision(6);
        kilometers.value = (inputValue * feetToMeters/1000).toPrecision(6);
        meters.value = (inputValue * feetToMeters).toPrecision(6);
        cm.value = (inputValue * feetToMeters * 100).toPrecision(6);
        miles.value = (inputValue/5280).toPrecision(6);
        inches.value = (inputValue * 12).toPrecision(6);
    }
    if (source == "inches") {
        meile.value = (inputValue/12 * feetToMeters * metersToKlafter/4000).toPrecision(6);
        wienerklafter.value = 
            (inputValue/12 * feetToMeters * metersToKlafter).toPrecision(6);
        wienerfuss.value = 
            (inputValue/12 * feetToMeters * metersToKlafter * 6).toPrecision(6);
        wienerzoll.value = 
            (inputValue/12 * feetToMeters * metersToKlafter * 72).toPrecision(6);
        salzburgerklafter.value = 
            (inputValue/12 * feetToMeters * metersToKlafter * 16/17).toPrecision(6);
        salzburgerfuss.value = 
            (inputValue/12 * feetToMeters * metersToKlafter * 6 * 16/17).toPrecision(6);
        salzburgerzoll.value = 
            (inputValue/12 * feetToMeters * metersToKlafter * 72 * 16/17).toPrecision(6);
        kilometers.value = (inputValue/12 * feetToMeters/1000).toPrecision(6);
        meters.value = (inputValue/12 * feetToMeters).toPrecision(6);
        cm.value = (inputValue/12 * feetToMeters * 100).toPrecision(6);
        miles.value = (inputValue/12/5280).toPrecision(6);
        feet.value = (inputValue/12).toPrecision(6);
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