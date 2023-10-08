document.getElementById("whileForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let inputWhile = document.getElementById("whileInput").value;
  let jumlahPerulangan = parseInt(document.getElementById("no").value); // Mengambil jumlah perulangan dari input
  let tampilWhile = document.getElementById("tampilwhile");

  tampilWhile.textContent = "";

  let i = 0;
  while (i < jumlahPerulangan) {
    // Menggunakan jumlah perulangan yang diambil dari input
    tampilWhile.textContent += inputWhile + "\n";
    i++;
  }
});
