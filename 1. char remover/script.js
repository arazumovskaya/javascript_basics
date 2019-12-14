function charRemove() {
  let input = document.getElementById("inputstr").value;
  let word = [];
  let toRemove = [];
  delimiters = " .,;:!?"

  for (let i = 0; i < input.length; i++) {
    if (delimiters.includes(input.charAt(i))) {
      word = [];
      continue
    } else if (word.includes(input.charAt(i))) {
      toRemove.push(input.charAt(i));
    } else {
      word.push(input.charAt(i));
    }
  }

  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (!toRemove.includes(input.charAt(i))) {
      output += input.charAt(i);
    }
  }
  document.getElementById("outputstr").value = output;
}
