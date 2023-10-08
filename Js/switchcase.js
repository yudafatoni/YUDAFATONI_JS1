function tampilkan() {
  let pulau = document.getElementById("pulau").value;
  let tampilpulau = document.getElementById("tampilpulau");

  switch (pulau) {
    case "Sumatra":
      tampilpulau.textContent = "Saya lahir di pulau Sumatra.";
      break;
    case "Jawa":
      tampilpulau.textContent = "Saya lahir di pulau Jawa";
      break;
    case "Kalimantan":
      tampilpulau.textContent = "Saya lahir di pulau Kalimantan.";
      break;
    case "Sulawesi":
      tampilpulau.textContent = "Saya lahir di pulau Sulawesi.";
      break;
    case "Papua":
      tampilpulau.textContent = "Saya lahir di pulau Papua.";
      break;
    default:
      tampilpulau.textContent = "Saya Lahir di Pulau yang Lain.";
  }
}
