var frase = $('.frase').text()
var numPalavras = contaPalavras(frase)
var tamanhoFrase = $('#tamanho-frase')
tamanhoFrase.text(numPalavras)

var campo = $('.campo-digitacao')
campo.on('input', function () {
  var frase = $('.campo-digitacao').val()
  var numPalavras = contaPalavras(frase)
  var contadorCaracteres = $('#contador-caracteres')
  var contadorPalavras = $('#contador-palavras')
  contadorPalavras.text(numPalavras)
  contadorCaracteres.text(frase.length)
})

function contaPalavras (frase) {
  var numPalavras = frase.split(/\S+/).length - 1
  return numPalavras
}

