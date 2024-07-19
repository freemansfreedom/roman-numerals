const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// After researching possible solutions to this problem, I am going to tackle it with a mix of a lookup table for coin counting and recursion
// Written as an object that will alter be separated into key-value pairs for ease of reading
const tableEquivalencies = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
}

const updateUI = () => {
    const equivalenceArray= Object.entries(tableEquivalencies).reverse();
    let value = input.value;
    console.log(value);
    if(value > 3999){
        output.innerText = "Please enter a number less than or equal to 3999."
    } else {
        let romanOutput = recursiveCounting(value, equivalenceArray);
        output.innerText = romanOutput;
    }
}


const recursiveCounting = (value, equivalenceArray) => {
    console.log(Number(equivalenceArray[0][0]), value)
    if (value <= 0) {
        return '';
    } else {
        const currentEquivalence =  Number(equivalenceArray[0][0]);
        if(value >= currentEquivalence) {
            value -= currentEquivalence;
            return '' + equivalenceArray[0][1] + recursiveCounting(value, equivalenceArray);
        } else {
            equivalenceArray.shift();
            return '' + recursiveCounting(value, equivalenceArray);
        }
    }
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

convertBtn.addEventListener("click", updateUI);

// Algorithm to convert numbers to roman

// If number is between 1000 and 3000 -> M
// 