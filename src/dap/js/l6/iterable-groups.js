class Group {
    arr = [];
    add(value) {
        if (!this.has(value)) this.arr.push(value);
    }

    has(value) {
        return this.arr.includes(value);
    }

    static from(arr) {
        const group = new Group;
        for (const iterator of arr) {
            group.add(iterator);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this.arr);
    }

}

class GroupIterator {
    group;
    position;

    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.length) {
            return { done: true };
        }
        const result = {
            value: this.group[this.position],
            done: false
        };
        this.position++;
        return result;
    }
}

console.log(Group.from(["a", "b", "c"]));
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}