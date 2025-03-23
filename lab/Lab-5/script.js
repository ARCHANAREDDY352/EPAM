// Function to calculate profit
function calculateProfit(principal, years) {
    let interestRate = 5.0; // Fixed 5% annual interest rate
    let profit = (principal * interestRate * years) / 100;
    let totalAmount = principal + profit;

    return {
        profit: profit.toFixed(2),
        totalAmount: totalAmount.toFixed(2)
    };
}

// Function to handle user input and display results
function handleCalculation() {
    let principal = parseFloat(prompt("Enter the Initial Deposit Amount (Rs):"));
    if (isNaN(principal) || principal <= 0) {
        alert("Invalid input! Please enter a valid deposit amount.");
        return;
    }

    let years = parseInt(prompt("Enter the Number of Years:"));
    if (isNaN(years) || years <= 0) {
        alert("Invalid input! Please enter a valid number of years.");
        return;
    }

    let result = calculateProfit(principal, years);

    document.getElementById("result").innerHTML = `
        <p>Initial Amount: <b>Rs. ${principal.toFixed(2)}</b></p>
        <p>Interest Rate: <b>5%</b></p>
        <p>Years: <b>${years}</b></p>
        <p>Profit: <b>Rs. ${result.profit}</b></p>
        <p>Total Amount After ${years} Years: <b>Rs. ${result.totalAmount}</b></p>
    `;
}
