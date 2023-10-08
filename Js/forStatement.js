document.getElementById("motivasiForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let inputmotivasi = document.getElementById("formotivasi").value;
  let tampilmotivasi = document.getElementById("tampilmotivasi");

  tampilmotivasi.textContent = "";

  for (var i = 0; i < 5; i++) {
    tampilmotivasi.textContent += inputmotivasi + "\n";
  }
});
