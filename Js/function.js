var dataToDo = ["Mengerjakan Tugas", "Healing"];

function showToDo() {
  var listToDo = document.getElementById("list-ToDo");
  // clear list barang
  listToDo.innerHTML = "";

  // cetak semua ToDo
  for (let i = 0; i < dataToDo.length; i++) {
    var btnEdit = "<a href='#' onclick='editToDo(" + i + ")'>Edit</a>";
    var btnHapus = "<a href='#' onclick='deleteToDo(" + i + ")'>Hapus</a>";

    listToDo.innerHTML += "<li>" + dataToDo[i] + " [" + btnEdit + " | " + btnHapus + "]</li>";
  }
}

function addToDo() {
  var input = document.querySelector("input[name=ToDo]");
  dataToDo.push(input.value);
  showToDo();
}

function editToDo(id) {
  var newToDo = prompt("Nama baru", dataToDo[id]);
  dataToDo[id] = newToDo;
  showToDo();
}

function deleteToDo(id) {
  dataToDo.splice(id, 1);
  showToDo();
}

showToDo();
