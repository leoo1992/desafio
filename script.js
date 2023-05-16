function calcularMediaTresValores() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  document.getElementById("nota1").value = nota1;
  document.getElementById("nota2").value = nota2;
  document.getElementById("nota3").value = nota3;
  var validarValores = false;

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    validarValores = true;
    var erroModal = "Todas as notas devem ser números válidos.";
  } else {
    validarValores = false;
    erroModal = "";
  }

  if (validarValores) {
    document.getElementById("resultado").innerHTML = erroModal;
    var myModal = new bootstrap.Modal(
      document.getElementById("resultadoModal"),
      {
        keyboard: false
      }
    );
    myModal.show();
  } else {
    var media = (nota1 + nota2 + nota3) / 3;
    document.getElementById("resultado").innerHTML =
      "A média é : " + media.toFixed(2);
    var myModal = new bootstrap.Modal(
      document.getElementById("resultadoModal"),
      {
        keyboard: false
      }
    );
    myModal.show();
  }
}
