


document.getElementById("calculateButton").addEventListener("click", calculateBill);

function calculateBill() {
  var billAmount = parseFloat(document.getElementById("billAmount").value);
  var tipPercentage = billAmount > 300 ? 0.2 : 0.15;

  var tipAmount = billAmount * tipPercentage;
  var totalAmount = billAmount + tipAmount;

  document.getElementById("totalAmount").textContent = "Total Amount: $" + totalAmount.toFixed(2);
}
