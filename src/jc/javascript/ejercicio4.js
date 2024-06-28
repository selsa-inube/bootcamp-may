// Ejemplo simplificado de SCRIPTS
const SCRIPTS = [
  {
    name: "English",
    ranges: [[0x0000, 0x024f]],
    direction: "ltr",
  },
  {
    name: "Arabic",
    ranges: [[0x0600, 0x06ff]],
    direction: "rtl",
  },
];

function dominantDirection(text) {
  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (
        script.ranges.some(([from, to]) => {
          return from <= code && code < to;
        })
      ) {
        return script;
      }
    }
    return null;
  }

  function countBy(items, groupName) {
    let counts = {};
    for (let item of items) {
      let name = groupName(item);
      counts[name] = (counts[name] || 0) + 1;
    }
    return counts;
  }

  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  });

  delete scripts["none"];

  let dominant = Object.keys(scripts).reduce((a, b) =>
    scripts[a] > scripts[b] ? a : b
  );

  return dominant;
}

console.log(dominantDirection("Hello!"));
// ltr
console.log(dominantDirection("Hey, مساء الخير"));
// rtl
