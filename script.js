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
// button
let ClculatButton = document.getElementById("clculatbutton");
let SaveButton = document.getElementById("savebutton");
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

// button disabled
function disabledButton(Input, button) {
    Input.addEventListener("keyup", function (e) {
        if (e.target.value > 0 && e.target.value <= 100) {
            button.removeAttribute("disabled");
            ClculatButton.setAttribute("disabled", true);
        }
        else {
            ClculatButton.removeAttribute("disabled");
            button.setAttribute("disabled", true);

        }
    })

};
const saveInput = disabledButton(SavePercentage, SaveButton);
// income and expenses clculator
function clculator() {
    // input incorrect
    if (IncomeIncome.value < 0 || FoodExpenses.value < 0 || RentExpenses.value < 0 || ClothesExpenses.value < 0) {
        let inputIncorrect = document.getElementById("inputincorrect");
        inputIncorrect.style.display = "block"
    }
    else {
        totalExpensesOutput.innerText = addition(FoodExpenses.value, RentExpenses.value, ClothesExpenses.value);
        BalanceOutput.innerText = subtraction(IncomeIncome.value, totalExpensesOutput.innerText);
    }
    // error spend more than earn
    if (Number(totalExpensesOutput.innerText) > Number(IncomeIncome.value)) {
        let spended = document.getElementById("spendedmore");
        spended.style.display = "block"
    }
};
// income and expenses also saving clculator
function Savingclculator() {
    // input incorrect
    if (IncomeIncome.value < 0 || FoodExpenses.value < 0 || RentExpenses.value < 0 || ClothesExpenses.value < 0) {
        let inputIncorrect = document.getElementById("inputincorrect");
        inputIncorrect.style.display = "block"
    } else {
        // income and expenses clculat
        totalExpensesOutput.innerText = addition(FoodExpenses.value, RentExpenses.value, ClothesExpenses.value);
        BalanceOutput.innerText = subtraction(IncomeIncome.value, totalExpensesOutput.innerText);
        // saving clculat
        SavingOutput.innerText = percentage(IncomeIncome.value, SavePercentage.value);
        RemainingOutput.innerText = subtraction(BalanceOutput.innerText, SavingOutput.innerText);
    }
    // error spend more than earn
    if (Number(totalExpensesOutput.innerText) > Number(IncomeIncome.value)) {
        let spended = document.getElementById("spendedmore");
        spended.style.display = "block"
    }
    // do not have enough money
    if (Number(BalanceOutput.innerText) < Number(SavingOutput.innerText)) {
        let notEnough = document.getElementById("notenough");
        notEnough.style.display = "block"
    };
    // no money left
    if (Number(RemainingOutput.innerText) < 0) {
        let moneyLeft = document.getElementById("nomoney");
        moneyLeft.style.display = "block"
    };
};