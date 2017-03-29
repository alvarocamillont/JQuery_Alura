var frase = $('.frase').text()
var numPalavras = contaPalavras(frase)
var tamanhoFrase = $('#tamanho-frase')
var tempoRestante = $("#tempo-digitacao").text()
tamanhoFrase.text(numPalavras)

var campo = $('.campo-digitacao')
campo.on('input', function () {
  var frase = $('.campo-digitacao').val()
  var numPalavras = contaPalavras(frase)
  var contadorCaracteres = $('#contador-caracteres').text(frase.length)
  var contadorPalavras = $('#contador-palavras').text(numPalavras)
})

campo.one("focus", function() {
    var cronometroID = setInterval(function() {
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if (tempoRestante < 1) {
            campo.attr("disabled", true);
            clearInterval(cronometroID);
        }
    }, 1000);
});

function contaPalavras (frase) {
  var numPalavras = frase.split(/\S+/).length - 1
  return numPalavras
}

