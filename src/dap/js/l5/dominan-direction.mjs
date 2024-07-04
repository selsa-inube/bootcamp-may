import scriptsDirection from './script.mjs';

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.find(c => c.name == name);
        if (!known) {
            counts.push({ name, count: 1 });
        } else {
            known.count++;
        }
    }
    return counts;
}

function characterScript(code) {
    for (let script of scriptsDirection) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}


const dominantDirection = (text) => {
    let counted = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({ name }) => name != "none");

    if (counted.length == 0) return "ltr";

    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));