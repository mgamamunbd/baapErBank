/** @format */
//input fields
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const valueText = inputField.value;
  const value = Number(valueText);
  inputField.value = "";
  return value;
}
//update total
function updateTotal(id, amount) {
  const totalTag = document.getElementById(id);
  const previousTotalText = totalTag.innerText;
  const previousTotal = Number(previousTotalText);
  const newTotal = previousTotal + amount;
  totalTag.innerText = newTotal;
}
//current balance
function getCurrentBalance() {
  const balanceTag = document.getElementById("balance-output");
  const balanceText = balanceTag.innerText;
  const balance = Number(balanceText);
  return balance;
}
//update balance
function updateBalance(amount) {
  const balanceTag = document.getElementById("balance-output");
  const balanceText = balanceTag.innerText;
  const previousBalance = Number(balanceText);
  const newBalance = previousBalance + amount;
  balanceTag.innerText = newBalance;
}
//deposit button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const amount = getInputValue("deposit-value");
    if (amount > 0) {
      updateTotal("deposit-output", amount);
      updateBalance(amount);
    } else {
      alert("Please enter a valid amount");
    }
  });

//withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const amount = getInputValue("withdraw-value");
    if (amount > getCurrentBalance()) {
      alert("You do not have enough money to withdraw that amount");
    } else {
      updateTotal("withdraw-output", amount);
      updateBalance(-amount);
    }
  });
