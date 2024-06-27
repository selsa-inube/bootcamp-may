//primer intento
class Group {
    #members = [];
    
    add(value){
        if (!this.has(value)){
            this.#members.push(value);
        }
    }

    delete(value){
        this.#members = this.#members.filter(v => v !== value);
    }
    
    has(value){
        return this.#members.includes(value);
    }
    
    static from(datos) {
        let group = new Group;
        for (let value of datos) {
          group.add(value);
        }
        return group;
      }
    
    [Symbol.iterator]() {
        return new GroupIterator(this.#members);
      }
}



class GroupIterator {
    #members;
    #position;
  constructor(members) {
    this.#members = members;
    this.#position = 0;
  }

  next() {
    if (this.#position >= this.#members.length) {
      return {done: true};
    }else{
        let result = {value: this.#members[this.#position],
                      done: false};
        this.#position++;
        return result;
      }
  }
}