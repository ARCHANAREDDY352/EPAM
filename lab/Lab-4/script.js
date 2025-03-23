// Function to reverse an integer while keeping the sign
function reverseNumber(num) {
    let reversedStr = Math.abs(num).toString().split('').reverse().join('');
    return parseInt(reversedStr) * Math.sign(num);
}

// Function to handle input and display the output in the center
function handleReverse() {
    let inputField = document.getElementById("numberInput");
    let resultField = document.getElementById("result");
    
    let num = parseInt(inputField.value);

    if (isNaN(num)) {
        resultField.textContent = "Please enter a valid number!";
        return;
    }

    let reversed = reverseNumber(num);
    resultField.textContent = `Reversed Number: ${reversed}`;
}

// Test cases for debugging in the console
console.log(reverseNumber(12345));  // Output: 54321
console.log(reverseNumber(-56789)); // Output: -98765
console.log(reverseNumber(100));    // Output: 1
console.log(reverseNumber(-90));    // Output: -9
