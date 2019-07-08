function addNumbs(arr){
let start = arr[0]; 
let finish = arr[1]; 
let total = 0;
for (var i = start; i <= finish; i++){
total += i;
console.log("bdbd", total);
}	
return total;
}
// //[start, finish] = arr
// // return start;


console.log(addNumbs([1,5]))