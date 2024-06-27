//primer intento
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(z){
        return new Vec(this.x + z.x, this.y + z.y);
    };
    minus(z){
        return new Vec(this.x - z.x, this.y - z.y);
    };
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

console.log( new Vec( 3 , 4 ).length);//5

console.log(new Vec(1,2).plus(new Vec(3,4))) //x:4 y: 6