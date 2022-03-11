function Converter() {
    var valorElemento = document.getElementById("valorEmReal");
    var valorEmReal = parseFloat(valorElemento.value);

    var valorEmDolar = valorEmReal / 5

    var elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = valorEmDolar
}