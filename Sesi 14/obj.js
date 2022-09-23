
let pegawai = {
    namaDepan :"Jon",
    namaBelakang :"Jones",
    greeting: function () {
        console.log("Hello!");
    },
    getNamaLengkap: function () {  
        return this.namaDepan + " " + this.namaBelakang; 
    }
}

console.log(pegawai.namaDepan);
console.log(pegawai.namaBelakang);

//console.log(pegawai);
//console.log(pegawai.hasOwnProperty("namaTengah"));
//console.log(pegawai.hasOwnProperty("namaDepan"));

// pegawai.greeting = function () {
//     console.log("Hello! " + pegawai.namaDepan);
// }

pegawai.greeting();
console.log(pegawai.getNamaLengkap());