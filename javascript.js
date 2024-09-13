function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const convertedAmountField = document.getElementById('converted-amount');

    if (!amount || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    // Placeholder conversion rates, replace with actual rates or API calls
    const rates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110,
        AUD: 1.35
    };

    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];

    if (!fromRate || !toRate) {
        alert('Invalid currency selected');
        return;
    }

    const convertedAmount = (amount * toRate / fromRate).toFixed(2);
    convertedAmountField.value = convertedAmount;
}