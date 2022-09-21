console.log("1. Buatlah sebuah array dengan nama my_bucket_list yang merepresentasikan bucket list dirimu.");
let my_bucket_list = ["Hafal Quran","Punya PC gaming"];
console.log(my_bucket_list);
document.querySelector("#id1").textContent = ("My list : " +my_bucket_list.join(", "));

console.log("2. gunakan .push() untuk menambahkan item ke dalam bucket list paling belakang.");
my_bucket_list.push("Berkurban saat Idul Adha");
console.log(my_bucket_list);
document.querySelector("#id2").textContent = ("My list menggunakan .push() : " +my_bucket_list.join(", "));

console.log("3. gunakan .unshift() untuk menambahkan item ke dalam bucket list paling depan.");
my_bucket_list.unshift("Pergi Haji");
console.log(my_bucket_list);
document.querySelector("#id3").textContent = ("My list menggunakan .unshift() : " +my_bucket_list.join(", "));

console.log("4. gunakan .pop() untuk menghapus nilai atau item terakhir di arraymu.");
my_bucket_list.pop();
console.log(my_bucket_list);
document.querySelector("#id4").textContent = ("My list menggunakan .pop() : " +my_bucket_list.join(", "));

console.log("5. gunakan .shift() untuk menghapus nilai atau item pertama di arraymu.");
my_bucket_list.shift();
console.log(my_bucket_list);
document.querySelector("#id5").textContent = ("My list menggunakan .shift() : " +my_bucket_list.join(", "));