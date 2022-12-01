const fromNumSystem = document.querySelector('#first_selector');
const toNumSystem = document.querySelector('#second_selector');
const valueToBeConverted = document.querySelector('#input_field');
const convertedValue = document.querySelector('#result');
const convert = document.querySelector('#convert-btn');
const swapValues = document.querySelector('.fa-sharp');

convertedValue.setAttribute("disabled","");

convert.addEventListener('click',()=>{
    execute();
})

swapValues.addEventListener('click',()=>{
    // var rot=360;
    // swapValues.style.transition = '1s';
    // swapValues.style.transform = `rotate(${rot}deg)`;
    let tempSelect=fromNumSystem.value;
    let tempValue=valueToBeConverted.value;
    fromNumSystem.value=toNumSystem.value;
    toNumSystem.value=tempSelect;
    
    valueToBeConverted.value=convertedValue.value;
    convertedValue.value=tempValue;
})



function execute(){
    if(fromNumSystem.value!="Select" && (fromNumSystem.value)===(toNumSystem.value) && valueToBeConverted.value!=""){
        convertedValue.value=valueToBeConverted.value;
        convertedValue.setAttribute("disabled","");
    }
    // Decimal to other
    else if(fromNumSystem.value==="Decimal" && toNumSystem.value==="Binary"){
        decimalToBinary(valueToBeConverted.value);
    }
    
    else if(fromNumSystem.value==="Decimal" && toNumSystem.value==="Octal"){
        decimalToOctal(valueToBeConverted.value);
    }
    
    else if(fromNumSystem.value==="Decimal" && toNumSystem.value==="Hexadecimal"){
        decimalToHexadecimal(valueToBeConverted.value);
    }
    // Binary to Other
    else if(fromNumSystem.value==="Binary" && toNumSystem.value==="Decimal"){
        binaryToDecimal(valueToBeConverted.value);
    }

    else if(fromNumSystem.value==="Binary" && toNumSystem.value==="Octal"){
        binaryToOctal(valueToBeConverted.value);
    }

    else if(fromNumSystem.value==="Binary" && toNumSystem.value==="Hexadecimal"){
        binaryToHexadecimal(valueToBeConverted.value);
    }

    //Octal to Others 
    else if(fromNumSystem.value==="Octal" && toNumSystem.value==="Decimal"){
        octalToDecimal(valueToBeConverted.value);
    }

    else if(fromNumSystem.value==="Octal" && toNumSystem.value==="Binary"){
        octalToBinary(valueToBeConverted.value);
    }

    else if(fromNumSystem.value==="Octal" && toNumSystem.value==="Hexadecimal"){
        octalToHexadecimal(valueToBeConverted.value);
    }

    // Hexadecimals to Others

    else if(fromNumSystem.value==="Hexadecimal" && toNumSystem.value==="Decimal"){
        hexadecimalToDecimal(valueToBeConverted.value);
    }

    else if(fromNumSystem.value==="Hexadecimal" && toNumSystem.value==="Binary"){
        hexadecimalToBinary(valueToBeConverted.value);
    }

    else if(fromNumSystem.value==="Hexadecimal" && toNumSystem.value==="Octal"){
        hexadecimalToOctal(valueToBeConverted.value);
    }
}

// Decimal to Others
function decimalToBinary(input){
    convertedValue.value=parseInt(input, 10).toString(2);
    convertedValue.setAttribute("disabled","");
}

function decimalToOctal(input){
    convertedValue.value=parseInt(input, 10).toString(8);
    convertedValue.setAttribute("disabled","");   
}

function decimalToHexadecimal(input){
    convertedValue.value=parseInt(input, 10).toString(16).toUpperCase();
    convertedValue.setAttribute("disabled","");
}

// Binary to Others

function binaryToDecimal(input){
    convertedValue.value=parseInt(input, 2).toString(10);
    convertedValue.setAttribute("disabled","");
}

function binaryToOctal(input){
    convertedValue.value=parseInt(input, 2).toString(8);
    convertedValue.setAttribute("disabled","");   
}

function binaryToHexadecimal(input){
    convertedValue.value=parseInt(input, 2).toString(16).toUpperCase();
    convertedValue.setAttribute("disabled","");
}

// Octal to Other
function octalToDecimal(input){
    convertedValue.value=parseInt(input, 8).toString(10);
    convertedValue.setAttribute("disabled","");
}

function octalToBinary(input){
    convertedValue.value=parseInt(input, 8).toString(2);
    convertedValue.setAttribute("disabled","");   
}

function octalToHexadecimal(input){
    convertedValue.value=parseInt(input, 8).toString(16).toUpperCase();
    convertedValue.setAttribute("disabled","");
}

// Hexadecimal to Other

function hexadecimalToDecimal(input){
    convertedValue.value=parseInt(input, 16).toString(10);
    convertedValue.setAttribute("disabled","");
}

function hexadecimalToBinary(input){
    convertedValue.value=parseInt(input, 16).toString(2);
    convertedValue.setAttribute("disabled","");   
}

function hexadecimalToOctal(input){
    convertedValue.value=parseInt(input, 16).toString(8);
    convertedValue.setAttribute("disabled","");
}