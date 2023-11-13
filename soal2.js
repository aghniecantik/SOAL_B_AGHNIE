// Menyertakan modul readline
const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Meminta input dari pengguna
rl.question('Masukkan jumlah kalimat yang ingin ditampilkan: ', (jumlahKalimat) => {
  jumlahKalimat = parseInt(jumlahKalimat); // Mengubah input string menjadi integer

  // Perulangan untuk mencetak kalimat sebanyak jumlahKalimat
  for (let i = 0; i < jumlahKalimat; i++) {
    console.log("Saya orang yang sabar, ramah, dan tidak membenci orang");
  }

  rl.close(); // Menutup interface setelah selesai
});
