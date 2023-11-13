const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menampilkan menu awal
console.log("Pilihan Menu: ");
console.log("1. Makanan");
console.log("2. Minuman");

rl.question("Silahkan pilih nomor menu (1/2): ", (pilihan) => {
  if (pilihan === "1") {
    // Jika pilih menu 1 (Makanan)
    console.log("Daftar Makanan: ");
    console.log("- Bakso");
    console.log("- Mie Ayam");
    console.log("- Soto");
    console.log("- Kambing Guling");
    console.log("- Ayam Bakar");
    console.log("- Sate");
    console.log("- Mie Goreng");
    console.log("- Mendoan");
  } else if (pilihan === "2") {
    // Jika pilih menu 2 (Minuman)
    console.log("Daftar Minuman: ");
    console.log("- Es Milo");
    console.log("- Es Teh Manis");
    console.log("- Es Jeruk");
    console.log("- Es Campur");
    console.log("- Es Kopi Susu");
    console.log("- Es Teh Tawar");
    console.log("- Es Dawet");
  } else {
    // Jika pilihan tidak valid
    console.log("Pilihan tidak valid. Silahkan pilih menu yang benar.");
  }

  rl.close();
});
