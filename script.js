// Input
let IncomeIncome = document.getElementById("IncomeInput")
let FoodExpenses = document.getElementById("FoodInput");
let RentExpenses = document.getElementById("RentInput");
let ClothesExpenses = document.getElementById("ClothesInput");
let SavePercentage = document.getElementById("SaveInput");
// Output
let totalExpensesOutput = document.getElementById("TotalExpensesID");
let BalanceOutput = document.getElementById("BalanceExistID");
let SavingOutput = document.getElementById("SavingAmountID");
let RemainingOutput = document.getElementById("RemainingID");
// addition function
function addition(food, rent, clothes) {
    return Number(food) + Number(rent) + Number(clothes);
};
// subtraction function
function subtraction(IncomeANDBalance, ExpensesANDSaving) {
    return Number(IncomeANDBalance) - Number(ExpensesANDSaving);
};
// percentage function
function percentage(incomeValue, savingValue) {
    return Number(incomeValue) * (Number(savingValue) / 100);
}
// income and expenses clculator
function clculator() {
    totalExpensesOutput.innerText = addition(FoodExpenses.value, RentExpenses.value, ClothesExpenses.value);
    BalanceOutput.innerText = subtraction(IncomeIncome.value, totalExpensesOutput.innerText);
    // income and expenses after clculat 
    IncomeIncome.value = "";
    FoodExpenses.value = "";
    RentExpenses.value = "";
    ClothesExpenses.value = "";
};
// income and expenses also saving clculator
function Savingclculator() {
    // income and expenses clculat
    totalExpensesOutput.innerText = addition(FoodExpenses.value, RentExpenses.value, ClothesExpenses.value);
    BalanceOutput.innerText = subtraction(IncomeIncome.value, totalExpensesOutput.innerText);
    // saving clculat
    SavingOutput.innerText = percentage(IncomeIncome.value, SavePercentage.value);
    RemainingOutput.innerText = subtraction(BalanceOutput.innerText, SavingOutput.innerText);
    // income and expenses after clculat 
    IncomeIncome.value = "";
    FoodExpenses.value = "";
    RentExpenses.value = "";
    ClothesExpenses.value = "";
    // saving after clculat 
    IncomeIncome.value = "";
    SavePercentage.value = "";
};