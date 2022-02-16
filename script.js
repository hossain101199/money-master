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

function clculator() {
    totalExpensesOutput.innerText = Number(FoodExpenses.value) + Number(RentExpenses.value) + Number(ClothesExpenses.value) + Number(totalExpensesOutput.innerText);
    BalanceOutput.innerText = Number(IncomeIncome.value) - Number(totalExpensesOutput.innerText);
    IncomeIncome.value = "";
    FoodExpenses.value = "";
    RentExpenses.value = "";
    ClothesExpenses.value = "";

}

function Savingclculator() {
    // 1st
    totalExpensesOutput.innerText = Number(FoodExpenses.value) + Number(RentExpenses.value) + Number(ClothesExpenses.value) + Number(totalExpensesOutput.innerText);
    BalanceOutput.innerText = Number(IncomeIncome.value) - Number(totalExpensesOutput.innerText);
    // 2nd
    SavingOutput.innerText = Number(IncomeIncome.value) * (Number(SavePercentage.value) / 100)
    RemainingOutput.innerText = Number(BalanceOutput.innerText) - Number(SavingOutput.innerText);
    // 1st
    IncomeIncome.value = "";
    FoodExpenses.value = "";
    RentExpenses.value = "";
    ClothesExpenses.value = "";

    // 2nd
    IncomeIncome.value = "";
    SavePercentage.value = "";

}