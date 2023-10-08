document.getElementById("formDowhile").addEventListener("submit", function (e) {
  e.preventDefault();
  let input = document.getElementById("doWhile").value;
  let jumlahPerulangan = parseInt(document.getElementById("number").value);
  let tampil = document.getElementById("data");

  tampil.textContent = "";

  let i = 0;

  do {
    tampil.textContent += input + "\n";
    i++;
  } while (i < jumlahPerulangan);
});
