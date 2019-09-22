module.exports = function multiply(first, second) {
  let num1 = first.split('').reverse();
  let num2 = second.split('').reverse();

  let stack = [];

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      let mult = num1[i] * num2[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + mult : mult;
    }
  }

  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10;
    let move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1])
      stack[i + 1] += move;
    else if (move != 0)
      stack[i + 1] = move;
  }

  return stack.reverse().join('');
}
