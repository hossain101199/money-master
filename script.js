
let TotalExpenses = 0;
function clculator() {
    let IncomeIncome = document.getElementById("IncomeInput")
    let FoodExpenses = document.getElementById("FoodInput");
    let RentExpenses = document.getElementById("RentInput");
    let ClothesExpenses = document.getElementById("ClothesInput");
    let totalExpensesOutput = document.getElementById("TotalExpensesID")
    let BalanceOutput = document.getElementById("BalanceExistID")
    totalExpensesOutput.innerText = Number(FoodExpenses.value) + Number(RentExpenses.value) + Number(ClothesExpenses.value) + Number(totalExpensesOutput.innerText);
    BalanceOutput.innerText = Number(IncomeIncome.value) - Number(totalExpensesOutput.innerText);
    IncomeIncome.value = "";
    FoodExpenses.value = "";
    RentExpenses.value = "";
    ClothesExpenses.value = "";

}