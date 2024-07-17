const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const tableEquivalencies = {
    0: '',
    1: '',
    2: '',
    3: ''
}

const convert = () => {
    let romanNumber = ``;
    romanNumber += romanThousands(input.value);
    output.innerText = romanNumber;
}

const romanThousands = (number) => {
    const thousands = Math.floor(number / 1000);
    let roman = ``;
    for(let i = 0; i < thousands; i++) {
        roman += 'M';
    }
    return roman;
}

// When Button or enter in textbox pressed
//

convertBtn.addEventListener("click", convert);

// Algorithm to convert numbers to roman

// If number is between 1000 and 3000 -> M
// 