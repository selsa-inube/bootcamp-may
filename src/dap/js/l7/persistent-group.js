class PGroup {

    constructor(member) {
        this.member = member;
    }

    has(value) {
        return this.member.includes(value);
    }

    add(value) {
        if (!this.has(value)) {
            return new PGroup([...this.member, value]);
        }
        return this;
    }

    delete(value) {
        if (this.has(value)) {
            return new PGroup(this.member.filter(n => n !== value));
        }
        return this;
    }
}

PGroup.empty = new PGroup([]);


let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
console.log(a.has("b"));
console.log(b.has("a"));