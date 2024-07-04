class Group {

  #arr = [];

  add(value){
    if(!this.has(value)) this.#arr.push(value);
  }

  has(value){
    return this.#arr.includes(value);
  }

  delete(value) {
    if(this.has(value)){
      const ind = this.#arr.indexOf(value);
      return this.#arr.splice(ind, 1);
  }
  }

  static from(arr) {
    const group = new Group;
    for (const iterator of arr) {
      group.add(iterator);
    }
    return group;
  }

}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));