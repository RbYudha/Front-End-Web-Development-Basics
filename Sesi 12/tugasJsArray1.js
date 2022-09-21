let resep = [];
resep [0] = "10 bakso sapi";
resep [1] = "3 bawang putih";
resep [2] = "2 bawang merah";
resep [3] = "1 saset kaldo bubuk";
resep [4] = "2 sendok garam";

//console.log("Resep baso:");
//console.log(resep);
//document.querySelector("#id1").textContent = (resep.join(", "));

for(a=0;a<5;a++){
    $(`.resep>#r${a+1}`).text("Resep "+(a+1)+" : "+resep[a]);
}

console.log("Resep pertama:");
console.log(resep[0]);
document.querySelector("#id2").textContent = ("Resep pertama adalah : "+resep[0]);

console.log("Resep terakhir:");
let last_step = resep[4];
console.log(last_step);
document.querySelector("#id3").textContent = ("Resep terakhir adalah : "+last_step);