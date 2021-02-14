/*
Gulden and ducat converter (Bootstrap), JavaScript
Version 0.1
Dexter Edge
2018-09-08

Approach based on the underlying HTML and JavaScript (not the 'Try It' code) at the page https://www.w3schools.com/howto/howto_js_weight_converter.asp
*/

function guldenConverter(source, inputValue) {
    // Allow only digits (no minus sign allowed)
    if (!/[0-9]+/.test(inputValue)) {
        document.getElementById(source).value = "";
    }
    inputValue = parseFloat(inputValue);

    var gulden = document.getElementById("gulden");
    var kreuzer = document.getElementById("kreuzer");
    var totalkreuzer = document.getElementById("totalkreuzer");

    var kremnitz1771 = document.getElementById("kremnitz-1771");
    var kaiserlich1771 = document.getElementById("kaiserlich-1771");
    var ordinary1771 = document.getElementById("ordinary-1771");

    var kremnitz1783 = document.getElementById("kremnitz-1783");
    var kaiserlich1783 = document.getElementById("kaiserlich-1783");
    var ordinary1783 = document.getElementById("ordinary-1783");

    var kremnitz1786 = document.getElementById("kremnitz-1786");
    var kaiserlich1786 = document.getElementById("kaiserlich-1786");

    var value = 0; // Temporary numeric variable for total kreuzer

    if (source == "gulden") {
        totalkreuzer.value = inputValue * 60 + Number(kreuzer.value);

        kremnitz1771.value = ((inputValue * 60)/258).toFixed(2);
        kaiserlich1771.value = ((inputValue * 60)/256).toFixed(2);
        ordinary1771.value = ((inputValue * 60)/254).toFixed(2);

        kremnitz1783.value = ((inputValue * 60)/262).toFixed(2);
        kaiserlich1783.value = ((inputValue * 60)/260).toFixed(2);
        ordinary1783.value = ((inputValue * 60)/258).toFixed(2);

        kremnitz1786.value = ((inputValue * 60)/270).toFixed(2);
        kaiserlich1786.value = ((inputValue * 60)/270).toFixed(2);
    }
    if (source == "kreuzer") {
        gulden.value = Number(gulden.value) + Math.floor(inputValue/60);
        kreuzer.value = inputValue % 60;
        value =  Number(gulden.value) * 60 + inputValue;
        totalkreuzer.value = value;

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kremnitz1783.value = (value/262).toFixed(2);
        kaiserlich1783.value = (value/260).toFixed(2);
        ordinary1783.value = (value/258).toFixed(2);

        kremnitz1786.value = (value/270).toFixed(2);
        kaiserlich1786.value = (value/270).toFixed(2);
    }
    if (source == "totalkreuzer") {
        gulden.value = Math.floor(inputValue/60);
        kreuzer.value = inputValue % 60;

        kremnitz1771.value = (inputValue/258).toFixed(2);
        kaiserlich1771.value = (inputValue/256).toFixed(2);
        ordinary1771.value = (inputValue/254).toFixed(2);

        kremnitz1783.value = (inputValue/262).toFixed(2);
        kaiserlich1783.value = (inputValue/260).toFixed(2);
        ordinary1783.value = (inputValue/258).toFixed(2);

        kremnitz1786.value = (inputValue/270).toFixed(2);
        kaiserlich1786.value = (inputValue/270).toFixed(2);
    }

    if (source == "kremnitz-1771") {
         value = inputValue * 258;
         totalkreuzer.value = value;
         gulden.value = Math.floor(value/60);
         kreuzer.value = value % 60;

         kaiserlich1771.value = (value/256).toFixed(2);
         ordinary1771.value = (value/254).toFixed(2);

         kremnitz1783.value = (value/262).toFixed(2);
         kaiserlich1783.value = (value/260).toFixed(2);
         ordinary1783.value = (value/258).toFixed(2);

         kremnitz1786.value = (value/270).toFixed(2);
         kaiserlich1786.value = (value/270).toFixed(2);
    }
    if (source == "kaiserlich-1771") {
         value = inputValue * 256;
         totalkreuzer.value = value;
         gulden.value = Math.floor(value/60);
         kreuzer.value = value % 60;

         kremnitz1771.value = (value/258).toFixed(2);
         ordinary1771.value = (value/254).toFixed(2);

         kremnitz1783.value = (value/262).toFixed(2);
         kaiserlich1783.value = (value/260).toFixed(2);
         ordinary1783.value = (value/258).toFixed(2);

         kremnitz1786.value = (value/270).toFixed(2);
         kaiserlich1786.value = (value/270).toFixed(2);
    }
    if (source == "ordinary-1771") {
         value = inputValue * 254;
         totalkreuzer.value = value;
         gulden.value = Math.floor(value/60);
         kreuzer.value = value % 60;

         kremnitz1771.value = (value/258).toFixed(2);
         kaiserlich1771.value = (value/256).toFixed(2);

         kremnitz1783.value = (value/262).toFixed(2);
         kaiserlich1783.value = (value/260).toFixed(2);
         ordinary1783.value = (value/258).toFixed(2);

         kremnitz1786.value = (value/270).toFixed(2);
         kaiserlich1786.value = (value/270).toFixed(2);
    }

    if (source == "kremnitz-1783") {
        value = inputValue * 262;
        totalkreuzer.value = value;
        gulden.value = Math.floor(value/60);
        kreuzer.value = value % 60;

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kaiserlich1783.value = (value/260).toFixed(2);
        ordinary1783.value = (value/258).toFixed(2);

        kremnitz1786.value = (value/270).toFixed(2);
        kaiserlich1786.value = (value/270).toFixed(2);
    }
    if (source == "kaiserlich-1783") {
        value = inputValue * 260;
        totalkreuzer.value = value;
        gulden.value = Math.floor(value/60);
        kreuzer.value = value % 60;

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kremnitz1783.value = (value/262).toFixed(2);
        ordinary1783.value = (value/258).toFixed(2);

        kremnitz1786.value = (value/270).toFixed(2);
        kaiserlich1786.value = (value/270).toFixed(2);
    }
    if (source == "ordinary-1783") {
        value = inputValue * 258;
        totalkreuzer.value = value;
        gulden.value = Math.floor(value/60);
        kreuzer.value = value % 60;

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kremnitz1783.value = (value/262).toFixed(2);
        kaiserlich1783.value = (value/260).toFixed(2);

        kremnitz1786.value = (value/270).toFixed(2);
        kaiserlich1786.value = (value/270).toFixed(2);
    }

    if (source == "kremnitz-1786") {
        value = inputValue * 270;
        totalkreuzer.value = value;
        gulden.value = Math.floor(value/60);
        kreuzer.value = value % 60;

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kremnitz1783.value = (value/262).toFixed(2);
        kaiserlich1783.value = (value/260).toFixed(2);
        ordinary1783.value = (value/258).toFixed(2);

        kaiserlich1786.value = (value/270).toFixed(2);
    }
    if (source == "kaiserlich-1786") {
        value = inputValue * 270;
        totalkreuzer.value = value;
        gulden.value = Math.floor(value/60);
        kreuzer.value = value % 60;

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kremnitz1783.value = (value/262).toFixed(2);
        kaiserlich1783.value = (value/260).toFixed(2);
        ordinary1783.value = (value/258).toFixed(2);

        kremnitz1786.value = (value/270).toFixed(2);
    }

}
