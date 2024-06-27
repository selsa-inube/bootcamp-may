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
}

let group = Group.from([10,20]);

console.log(group.has(10));//true

group.delete(10);

console.log(group.has(10));//false