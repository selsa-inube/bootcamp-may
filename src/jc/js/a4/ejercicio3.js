function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, index) {
  if (!list) return undefined;
  else if (index === 0) return list.value;
  else return nth(list.rest, index - 1);
}

function nthRecursive(list, index) {
  if (!list) return undefined;
  else if (index === 0) return list.value;
  else return nthRecursive(list.rest, index - 1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
