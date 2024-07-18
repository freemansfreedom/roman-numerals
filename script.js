const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// const tableEquivalencies = {
//     0: '',
//     1: '',
//     2: '',
//     3: ''
// }

const convert = () => {
    let romanNumber = ``;
    romanNumber += romanThousands(input.value);
    romanNumber += romanHundreds(input.value);
    output.innerText = romanNumber;
}

const romanThousands = (number) => {
    const thousands = getNumberFromPosition(number, 3);
    if (thousands === -1) {
        return '';
    }
    let roman = ``;
    for(let i = 0; i < thousands; i++) {
        roman += 'M';
    }
    return roman;
}

const romanHundreds = (number) => {
    const hundreds = getNumberFromPosition(number, 3)
    return numbersToLetters(number, 'C', 'D', 'M');
}

const romanTenths = (number) => {
    const tenths = Math.floor(number / 100);
    return numbersToLetters(number, 'C', 'D', 'M');
}


const numberToLetters = (number, one, five, ten) => {
    
    return '';
}

const getNumberFromPosition = (number, position) => {
    // Convert the number to a string, for easier manipulation
    // Split it into an array and reverse it, so array[0] is the rightmost number and so on
    // Return the number found in that position, converted back to a number. 
    // Take one from position to acount for array 
    // Oneths -> 1, tenths -> 2 and so on
    // returns -1 if it does not exist (f.e. asking for position 3 on number 10)
    const numberArray = ('' + number).split("").reverse();
    if (numberArray.length <= position) {
        return -1;
    }
    return Number(numberArray[position - 1])
}

convertBtn.addEventListener("click", convert);

// Algorithm to convert numbers to roman

// If number is between 1000 and 3000 -> M
// 