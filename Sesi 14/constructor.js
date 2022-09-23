//konstruktor javaScript
function pegawai (namaDepan, namaBelakang, birthday) {  
    this.namaDepan = namaDepan;
    this.namaBelakang = namaBelakang;
    this.birthday = birthday;
    this.getFullName = function () {
        return this.namaDepan + " " + this.namaBelakang;
    }
    this.getFullInfo = function () {
        return this.namaDepan + " " + this.namaBelakang + ", " + this.birthday;
    }
}

let pegawai1 = new pegawai ("Jon","Jones","29 Desember");

console.log(pegawai1);
console.log(pegawai1.getFullName());
console.log(pegawai1.getFullInfo());

console.log(pegawai1 instanceof pegawai);
console.log(pegawai1 instanceof Object);