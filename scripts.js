var trigger = false;

function RartText() {
    var input = splitNChars($('#txt1').val(), 1);
    allLower(input);
    rartify(input);

    var output="";
    for (var i = 0; i < input.length; i++) {
        output += input[i];
    }
    $('#txt2').val(output);


}

function normieLower() {
    var input = splitNChars($('#txt1').val(), 1);
    allLower(input);
    var output = "";
    for (var i = 0; i < input.length; i++) {
        output += input[i];
    }
    $('#txt2').val(output);
}

function normieUpper() {
    var input = splitNChars($('#txt1').val(), 1);
    allUpper(input);
    var output = "";
    for (var i = 0; i < input.length; i++) {
        output += input[i];
    }
    $('#txt2').val(output);
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
