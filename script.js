
// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the total number of integers stored inside this array

//sledeca funkcija dobija niz kao argument i koristeci for loop
//proverava svaki clan tog niza, ukoliko je clan broj, suma se povecava za jedan
//ukoliko je u pitanju niz, funkcija samu sebe poziva i kao argument dodeljuje isti taj niz
//proces se ponavlja, a zatim funkcija vraca sumu unutrasnjeg niza kako bi je nadodala na prethodnu sumu (sumu prvenstvenog niza)
function totalIntegers(arr){
    let sum = 0;
    let len = arr.length;
    for (let i =0; i < len; i++) {
        if (typeof arr[i] === "number") sum += 1;
        else if (typeof arr[i] === "object") sum += totalIntegers(arr[i]);
    }
    return sum;
}

var seven = totalIntegers([ [[5,[6], 7], 3], 0, 8, 'oi',['foo', [5]], [], [4, 3, [5, 6]] ]); // 11
console.log(seven)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// RESENJE SA CODINGGAME.COM

// u ovom resenju se shiftuje prva vrednost,a zatim se proverava njen tip i na osnovu toga
// se suma povecava ili funkcija ponovo poziva
// benefit koji vidim u njihovom kodu, ili barem koliko mi se cini, je veca brzina

function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}
var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);
