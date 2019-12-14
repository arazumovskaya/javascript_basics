function mathCalculator() {
  let input = document.getElementById("inputstr").value;

  let numbers = input.match(/[0-9]+(\.[0-9]+){0,1}/g)
  let operators = input.match(/\+|\-|\*|\//g)

  let position = 1;
  let result = parseFloat(numbers[0]);

  if (input[input.length - 1] != "=") {
    alert("Выражение должно заканчиваться символом равно!");
    return
  }
  if (numbers.length < operators.length) {
    alert("Некорректное выражение!");
    return
  } else if (numbers.length == operators.length) {
    if (operators[0] == "-") {
      result *= -1;
      position = 0;
    } else {
      alert("Некорректное выражение!");
      return
    }
  }

  for (let i = 1; i < numbers.length; i++) {
    switch (operators[i - position]) {
      case "+":
        result += parseFloat(numbers[i]);
        break;
      case "*":
        result *= parseFloat(numbers[i]);
        break;
      case "-":
        result -= parseFloat(numbers[i]);
        break;
      case "/":
        result /= parseFloat(numbers[i]);
        break;
    }
  }

  document.getElementById("outputstr").value = result.toFixed(2);
}
