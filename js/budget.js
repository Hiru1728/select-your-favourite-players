// event heandler using calculate button
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerPriceElement = document.getElementById('per-player');
    const totalPlayersElement = document.getElementById('total-players');
    const totalPlayersString = totalPlayersElement.innerText;
    const totalPlayers = parseInt(totalPlayersString);

    const perPlayerPrice = perPlayerPriceElement.value;

    const totalPlayerPrice = perPlayerPrice * totalPlayers;

    // Clear the input value

    perPlayerPriceElement.value = '';

    if (isNaN(totalPlayerPrice)) {
        alert('Please input the number types veriable');
        totalPlayerPrice = 0;
    }

    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesElementString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesElementString)
    playerExpensesElement.innerText = totalPlayerPrice;

})
document.getElementById('calculate-total').addEventListener('click', function () {

    const playerExpenses = getTextElementValueById('player-expenses');


    const managerSalaryElement = document.getElementById('manager-salary');
    const managerSalaryString = managerSalaryElement.value;
    const managerSalary = parseFloat(managerSalaryString);
    managerSalaryElement.value = '';




    const coachSalaryElement = document.getElementById('coach-salary');
    const coachSalaryString = coachSalaryElement.value;
    const coachSalary = parseFloat(coachSalaryString);
    coachSalaryElement.value = '';

    if (isNaN(managerSalary)) {
        alert('Please input the number types veriable of Manager Salary');
        totalSalary = 0;
    }

    if (isNaN(coachSalary)) {
        alert('Please input the number types veriable of Coach Salary');
        totalSalary = 0;
    }


    let totalSalary = playerExpenses + managerSalary + coachSalary;

    const totalExpensesElement = document.getElementById('total-expense');
    const totalExpensesString = totalExpensesElement.innerText;
    const totalExpense = parseFloat(totalExpensesString);
    totalExpensesElement.innerText = totalSalary;



})