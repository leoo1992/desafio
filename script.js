function calcularMediaTresValores() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);

  if (isNaN(nota1)) {
    nota1 = 0;
  }
  if (isNaN(nota2)) {
    nota2 = 0;
  }
  if (isNaN(nota3)) {
    nota3 = 0;
  }

  document.getElementById("nota1").value = nota1;
  document.getElementById("nota2").value = nota2;
  document.getElementById("nota3").value = nota3;

  var media = (nota1 + nota2 + nota3) / 3;
  document.getElementById("resultado").innerHTML =
    "A média é: " + media.toFixed(2);

  var myModal = new bootstrap.Modal(document.getElementById("resultadoModal"), {
    keyboard: false
  });
  myModal.show();
}
