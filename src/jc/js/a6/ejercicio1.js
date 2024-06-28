class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(otherVec) {
    return new Vec(this.x + otherVec.x, this.y + otherVec.y);
  }

  minus(otherVec) {
    return new Vec(this.x - otherVec.x, this.y - otherVec.y);
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}
//ejemplo
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// {x: 3, y: 5}

console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// {x: -1, y: -1}

console.log(new Vec(3, 4).length);
// 5
