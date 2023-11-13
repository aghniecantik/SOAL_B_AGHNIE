let kendaraan = ["mobil", "motor", "pesawat", "kapal", "kereta", "helikopter", "sepeda", "truk", "jetski", "bis"];

// Menampilkan seluruh data dalam array
console.log("Isi array kendaraan:", kendaraan);

// Mencari indeks 'mobil' dalam array
let indeksMobil = kendaraan.indexOf("mobil");
console.log("Indeks 'mobil' dalam array kendaraan:", indeksMobil);

// Menghapus satu data kendaraan dengan shift()
let kendaraanYangDihapus = kendaraan.shift();
console.log("Kendaraan yang dihapus:", kendaraanYangDihapus);
console.log("Array kendaraan setelah penghapusan:", kendaraan);
