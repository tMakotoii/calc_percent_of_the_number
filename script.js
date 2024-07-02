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
    
    // switch(operation) {
    //     case 'add':
    //         result = num1 + num2;
    //         break;
    //     case 'subtract':
    //         result = num1 - num2;
    //         break;
    //     case 'multiply':
    //         result = num1 * num2;
    //         break;
    //     case 'divide':
    //         if(num2!== 0) {
    //             result = num1 / num2;
    //         } else {
    //             alert("Ошибка: деление на ноль невозможно");
    //             return;
    //         }
    //         break;
    //     default:
    //         alert("Выбрана неизвестная операция");
    //         return;
    // }
    
    // const historyItemText = `${num1} ${operation} ${num2} = ${result}`;
    if (validateFlag) {
        const historyItemText = `${num1}% от числа ${num2} = ${result}`;
        addHistoryItem(historyItemText);
        document.getElementById('result').innerText = "Результат: " + result;
    }
});
