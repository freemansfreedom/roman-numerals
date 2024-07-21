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
    output.classList.add("box");
    if(value === ''){
        output.innerText = "Please enter a valid number"
        output.classList.add("error");
    } else if (value <= 0) {
        output.innerText = "Please enter a number greater than or equal to 1"
        output.classList.add("error");
    } else if(value > 3999){
        output.innerText = "Please enter a number less than or equal to 3999."
        output.classList.add("error");
    } else {
        let romanOutput = recursiveCounting(value, equivalenceArray);
        output.innerText = romanOutput;
        output.classList.remove("error")
        // Add box and remove error in not already in
    }



}

const recursiveCounting = (value, equivalenceArray) => {
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

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateUI();
});

input.addEventListener("keydown", (e) => {
    if(e.key === 'Enter') {
        updateUI();
    }
})