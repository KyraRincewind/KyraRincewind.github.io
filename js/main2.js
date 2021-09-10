let temperatureValue =[11,12,13,16,18,20,12];

function weatherWidget() {
    let temperature = document.querySelector('#temperature');
    let dayValue = document.querySelector('#days').value;
    temperature.innerHTML = temperatureValue[dayValue] + '&deg;C';
}

function calcHug() {
    let multiplier = 1000000;
    let amountHug = document.querySelector("input[name='amount-input']");
    let kindOfHug = document.querySelector("input[name='kind-of-hug-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amount = parseInt(amountHug.value) * multiplier;
    showAmount.innerHTML = amount+ " " +kindOfHug.value;
}

console.log("Hellóka nyalóka!");