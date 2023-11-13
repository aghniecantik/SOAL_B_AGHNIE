const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Meminta input dari pengguna
rl.question('Masukkan angka pertama: ', (angkaPertama) => {
  rl.question('Masukkan angka kedua: ', (angkaKedua) => {
    angkaPertama = parseFloat(angkaPertama);
    angkaKedua = parseFloat(angkaKedua);

    console.log("1. Penjumlahan");
    console.log("2. Pengurangan");
    console.log("3. Perkalian");
    console.log("4. Pembagian");
    console.log("5. Mencari Bilangan Terbesar");

    rl.question('Pilih operasi matematika (1-5): ', (pilihan) => {
      switch (pilihan) {
        case '1':
          // Penjumlahan
          console.log(`Hasil penjumlahan: ${angkaPertama + angkaKedua}`);
          break;
        case '2':
          // Pengurangan
          console.log(`Hasil pengurangan: ${angkaPertama - angkaKedua}`);
          break;
        case '3':
          // Perkalian
          console.log(`Hasil perkalian: ${angkaPertama * angkaKedua}`);
          break;
        case '4':
          // Pembagian
          if (angkaKedua === 0) {
            console.log("Tidak bisa membagi dengan nol.");
          } else {
            console.log(`Hasil pembagian: ${angkaPertama / angkaKedua}`);
          }
          break;
        case '5':
          // Mencari bilangan terbesar
          if (angkaPertama > angkaKedua) {
            console.log(`Bilangan terbesar: ${angkaPertama}`);
          } else {
            console.log(`Bilangan terbesar: ${angkaKedua}`);
          }
          break;
        default:
          console.log("Pilihan tidak valid.");
      }

      rl.close();
    });
  });
});
