const historyList = document.getElementById('historyList');

function addHistoryItem(itemText) {
    const li = document.createElement('li');
    li.className = 'historyItem';
    li.textContent = itemText;
    historyList.appendChild(li);
}

document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let validateFlag = true;
    
    if (isNaN(num1) || isNaN(num2)) {
        validateFlag = false;
        alert('Не все ячейки заполнены!');
    }

    let result = (num2 * (num1 / 100)).toFixed(2);

    if (validateFlag) {
        const historyItemText = `${num1}% от числа ${num2} = ${result}`;
        addHistoryItem(historyItemText);
        document.getElementById('result').innerText = "Результат: " + result;
    }
});
