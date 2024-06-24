//primer intento
function min(a, b){
    return Math.min(a,b);
}
console.log(min(0,10));
console.log(min(0,-10));

//segundo intento
function min(a,b){
	if (a<b){
		return a;
	}else{
		return b;
	}
}
console.log(min(1,10));
console.log(min(4,2));
