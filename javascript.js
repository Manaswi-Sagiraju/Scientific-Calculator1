function appendNumber(number) {
  document.getElementById('display').value += number;
}

function appendOperator(operator) {
  document.getElementById('display').value += operator;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let current = document.getElementById('display').value;
  document.getElementById('display').value = current.slice(0, -1);
}

function calculate() {
  let expression = document.getElementById('display').value;
  try {
    // Replace mathematical functions with JavaScript Math functions
    expression = expression.replace(/sin\(/g, 'Math.sin(');
    expression = expression.replace(/cos\(/g, 'Math.cos(');
    expression = expression.replace(/tan\(/g, 'Math.tan(');
    expression = expression.replace(/log\(/g, 'Math.log10(');
    expression = expression.replace(/ln\(/g, 'Math.log(');
    expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
    expression = expression.replace(/pi/g, 'Math.PI');
    expression = expression.replace(/\^/g, '**');

    let result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
