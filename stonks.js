var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function decimal (x) {
    return Number.parseFloat(x).toFixed(2);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = decimal((initial * quantity) - (current * quantity));
        var lossPercentage = decimal((loss / (current * quantity)) * 100);

        outputBox.textContent = ("The invested amount is ${(initial * quantity)} and loss is ${loss} and the percent is ${lossPercentage}%")
        outputBox.style.color = "purple"
    }
} else if (current > initial) {
    var profit = decimal((current * quantity) - (initial * quantity));
    var profitPercentage = decimal((profit / (initial * quantity)) * 100);

    outputBox.textContent = ("The invested amount is ${(initial * quantity)} profit is ${profit} and the percent is ${profitPercentage}%")
    outputBox.style.color = "green"
} else {

    outputBox.textContent = (`No Pain No Gain and No Gain No Pain`);
    outputBox.style.color = "yellow"
}

}