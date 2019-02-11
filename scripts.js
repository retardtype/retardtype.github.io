var trigger = false;

function RartText() {
    var input = splitNChars($('#txt1').val(), 1);
    alertMsg(input);
    allLower(input);
    rartify(input);

    var output="";
    for (var i = 0; i < input.length; i++) {
        output += input[i];
    }
    $('#txt2').val(output);
    copyFunct();


}

function normieLower() {
    var input = splitNChars($('#txt1').val(), 1);
    alertMsg(input);
    allLower(input);
    var output = "";
    for (var i = 0; i < input.length; i++) {
        output += input[i];
    }
    $('#txt2').val(output);
    copyFunct();
}

function normieUpper() {
    var input = splitNChars($('#txt1').val(), 1);
    alertMsg(input);
    allUpper(input);
    var output = "";
    for (var i = 0; i < input.length; i++) {
        output += input[i];
    }
    $('#txt2').val(output);
    copyFunct();
}


function splitNChars(txt, num) {
    var result = [];
    for (var i = 0; i < txt.length; i += num) {
        result.push(txt.substr(i, num));
    }
    return result;
}

function allLower(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].toString().toLowerCase();
    }
}

function allUpper(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].toString().toUpperCase();
    }
}

function rartify(array) {
    for (var i = 0; i < array.length; i++) {
        if (isLetter(array[i])) {
            if (trigger) {
                array[i] = array[i].toUpperCase();
                trigger = false;
            } else {
                trigger = true;
            }
        }
    }
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function alertMsg(array) {
    var myArray = ['you have the gay', 'enter something you turd', 'you are a poo-sniffer', 'your mom probably hates you, why did you give me an empty input', 'ayy lmao','erich is gay','enter something please or I will have to kill another hostage'];   
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    if (array.length == 0) {
        alert(rand);
    }
}

function copyFunct() {
    var copyText = document.getElementById("txt2");
    copyText.select();
    document.execCommand("Copy");
}