function findSelectors(element, swap) {
  let divSelector = element.parentNode;
  while (divSelector.className != "selector-block") {
    divSelector = divSelector.parentNode;
  }

  let leftSelector = null;
  let rightSelector = null;

  for (let idx in divSelector.children) {
    child = divSelector.children[idx];
    switch (child.id) {
      case "left-select":
        leftSelector = child;
        break;
      case "right-select":
        rightSelector = child;
        break;
    }
  }

  if (swap) {
    tmp = leftSelector;
    leftSelector = rightSelector;
    rightSelector = tmp;
  }
  return [leftSelector, rightSelector]
}

function allOptions(element, swap) {
  selectors = findSelectors(element, swap)
  leftSelector = selectors[0]
  rightSelector = selectors[1]

  leftLen = leftSelector.options.length
  if (leftLen == 0) {
    alert("Нечего перемещать!");
    return
  }

  while (leftSelector.options.length > 0) {
    rightSelector.options.add(leftSelector.options[0])
  }
}

function selectedOptions(element, swap) {
  selectors = findSelectors(element, swap)
  leftSelector = selectors[0]
  rightSelector = selectors[1]

  options = [];
  for (let i = 0; i < leftSelector.options.length; i++) {
    if (leftSelector.options[i].selected) {
      options.push(leftSelector.options[i])
    }
  }
  if (options.length == 0) {
    alert("Нечего перемещать!")
  }

  for (let idx in options) {
    rightSelector.options.add(options[idx])
  }
}
