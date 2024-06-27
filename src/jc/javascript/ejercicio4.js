function deepEqual(a, b) {
  if (a === b) return true;

  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  )
    return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

// Ejemplo
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// verdadero
console.log(deepEqual(obj, { here: 1, object: 2 }));
// falso
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// falso
