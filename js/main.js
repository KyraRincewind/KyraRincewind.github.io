function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amount = parseInt(amountInput.value) * price;
    alert("Fizetendő: " + amount + " Ft!");
}
console.log("Hellóka nyalóka!")