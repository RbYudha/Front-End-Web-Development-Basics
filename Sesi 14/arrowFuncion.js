// let add = function (x,y) {
//         return x+y;
// }

//arrow functionl

// let add = (x,y) => {return x+y};
// console.log(add(10,6));
// console.log(typeof(add));

// let number = [2,1,3];
// number.sort(function (a,b){
//     return b-a;
// });
// console.log(number);

// let number = [2,1,3];
// number.sort((a,b) => {return b-a});
// console.log(number);

let names = ["Tofan", "Rahmat", "veve"];
//untuk mapping panjang names menjadi masing2 name
let panjang = names.map(name => name.length);

console.log("panjang nama : "+ panjang);

