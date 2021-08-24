console.log("Helloka Nyalóka!")

function shSolution() {
    let topInput = document.querySelector("input[name='top-input']");
    let buttonInput = document.querySelector("input[name='button-input']");
    let amount = parseInt(topInput.value) * parseInt(buttonInput.value);
    let showSolution = document.querySelector("span.solution");
    showSolution.innerHTML = parseInt(amount);
    alert(amount);
}