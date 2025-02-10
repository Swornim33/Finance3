// Show loan calculator modal
function showLoanCalculator() {
    document.getElementById('loan-calculator').style.display = 'block';
}

// Close loan calculator modal
function closeLoanCalculator() {
    document.getElementById('loan-calculator').style.display = 'none';
}

// Calculate the loan
function calculateLoan() {
    var amount = document.getElementById('loan-amount').value;
    var term = document.getElementById('loan-term').value;
    var rate = document.getElementById('interest-rate').value;

    if (!amount || !term || !rate) {
        alert("Please fill all fields.");
        return;
    }

    var monthlyInterestRate = (rate / 100) / 12;
    var numberOfPayments = term * 12;
    var loanAmount = amount;
    
    var monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    var totalPayment = monthlyPayment * numberOfPayments;
    var totalInterest = totalPayment - loanAmount;

    var resultText = `
        <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
        <p>Total Payment: $${totalPayment.toFixed(2)}</p>
        <p>Total Interest: $${totalInterest.toFixed(2)}</p>
    `;
    document.getElementById('loan-result').innerHTML = resultText;
}
