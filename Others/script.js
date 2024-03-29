let isDec = true;
let isBin = false;
let isOct = false;
let isHex = false;

function onDec(){
    isDec = true;
    isBin = false;
    isOct = false;
    isHex = false;
}

function onBin(){
    isDec = false;
    isBin = true;
    isOct = false;
    isHex = false;
}

function onOct(){
    isDec = false;
    isBin = false;
    isOct = true;
    isHex = false;
}

function onHex(){
    isDec = false;
    isBin = false;
    isOct = false;
    isHex = true;
}

function isDecimal(str) {
    const decimalRegex = /^-?\d+(\.\d+)?$/;
    return decimalRegex.test(str) && parseInt(str, 10) !== NaN;;
}

function isBinary(str) {
    const binaryRegex = /^[01]+$/;
    return binaryRegex.test(str) && parseInt(str, 2) !== NaN;
}

function isOctal(str) {
    const octalRegex = /^[0-7]+$/;
    return octalRegex.test(str) && parseInt(str, 8) !== NaN;
}

function isHexadecimal(str) {
    const hexRegex = /^[0-9a-fA-F]+$/;
    return hexRegex.test(str) && parseInt(str, 16) !== NaN;;
}

function convertToDecimal(){
    const userInput = document.getElementById("userInput").value;
    if(isBin){
        if (isBinary(userInput)) {
            let decimalEquiv = parseInt(userInput, 2);
            document.getElementById("conversionResult").innerHTML = decimalEquiv;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Binary String';
        }
    }else if(isOct){
        if (isOctal(userInput)){
            let decimalEquiv = parseInt(userInput, 8);
            document.getElementById("conversionResult").innerHTML = decimalEquiv;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Octal String';
        }
    }else if(isHex){
        if (isHexadecimal(userInput)){
            let decimalEquiv = parseInt(userInput, 16);
            document.getElementById("conversionResult").innerHTML = decimalEquiv;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Hexadecimal String';
        }
    }else if(isDec){
        if (isDecimal(userInput)){
            document.getElementById("conversionResult").innerHTML = userInput;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Decimal String';
        }
    }
    
}

function convertToBinary() {
    const userInput = document.getElementById("userInput").value;
    if(isDec){
        if (isDecimal(userInput)) {
            let decimalEquiv = parseInt(userInput, 10);
            let binaryEquiv = (decimalEquiv >>> 0).toString(2);
            document.getElementById("conversionResult").innerHTML = binaryEquiv;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Decimal String';
        }
    }else if(isOct){
        if (isOctal(userInput)){
            let decimalEquiv = parseInt(userInput, 8);
            let binaryEquiv = (decimalEquiv >>> 0).toString(2);
            document.getElementById("conversionResult").innerHTML = binaryEquiv;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Octal String';
        }
    }else if(isHex){
        if (isHexadecimal(userInput)){
            let decimalEquiv = parseInt(userInput, 16);
            let binaryEquiv = (decimalEquiv >>> 0).toString(2);
            document.getElementById("conversionResult").innerHTML = binaryEquiv;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Hexadecimal String';
        }
    }else if(isBin){
        if (isBinary(userInput)){
            document.getElementById("conversionResult").innerHTML = userInput;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Binary String';
        }
    }
}

function convertToOctal() {
    const userInput = document.getElementById("userInput").value;
    if(isDec){
        if (isDecimal(userInput)) {
            let decimalEquiv = parseInt(userInput, 10);
            let octalEquiv = (decimalEquiv >>> 0).toString(8);
            document.getElementById("conversionResult").innerHTML = octalEquiv;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Decimal String';
        }
    }else if(isBin){
        if (isBinary(userInput)){
            let decimalEquiv = parseInt(userInput, 2);
            let binaryEquiv = (decimalEquiv >>> 0).toString(8);
            document.getElementById("conversionResult").innerHTML = binaryEquiv;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Binary String';
        }
    }else if(isHex){
        if (isHexadecimal(userInput)){
            let decimalEquiv = parseInt(userInput, 16);
            let octalEquiv = (decimalEquiv >>> 0).toString(8);
            document.getElementById("conversionResult").innerHTML = octalEquiv;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Hexadecimal String';
        }
    }else if(isOct){
        if (isOctal(userInput)){
            document.getElementById("conversionResult").innerHTML = userInput;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Octal String';
        }
    }
}

function convertToHexadecimal() {
    const userInput = document.getElementById("userInput").value;
    if(isDec){
        if (isDecimal(userInput)) {
            let hexadecimalEquiv = (parseInt(userInput, 10)).toString(16).toUpperCase();
            document.getElementById("conversionResult").innerHTML = hexadecimalEquiv;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Decimal String';
        }
    }else if(isBin){
        if (isBinary(userInput)){
            let hexadecimalEquiv = (parseInt(userInput, 2)).toString(16).toUpperCase();
            document.getElementById("conversionResult").innerHTML = hexadecimalEquiv;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Binary String';
        }
    }else if(isOct){
        if (isOctal(userInput)){
            let hexadecimalEquiv = (parseInt(userInput, 8)).toString(16).toUpperCase();
            document.getElementById("conversionResult").innerHTML = hexadecimalEquiv;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Octal String';
        }
    }else if(isHex){
        if (isHexadecimal(userInput)){
            document.getElementById("conversionResult").innerHTML = userInput;
        } else {
            document.getElementById("conversionResult").innerHTML = 'Invalid Hexadecimal String';
        }
    }
}
