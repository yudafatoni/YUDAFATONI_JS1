// if else nested if
// umur diinputkan, apabila umur <18 belum dewasa, jika >= 18 sudah dewasa, jika >= 60 Sepuh

document.getElementById("formUmur").addEventListener("submit", function (e) {
  e.preventDefault();
  let umur = parseInt(document.getElementById("umur").value);

  if (isNaN(umur)) {
    alert("Silakan masukkan umur yang valid.");
  } else {
    if (umur < 18) {
      alert("Anda masih di bawah umur");
    } else if (umur >= 18 && umur <= 60) {
      alert("Anda sudah dewasa");
    } else {
      alert("Anda adalah sepuhh :)");
    }
  }
});
