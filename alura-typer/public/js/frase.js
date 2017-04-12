/* global $  atualizaTamanhoFrase  atualizaTempoInicial */

$('#botao-frase').click(fraseAleatoria)

function fraseAleatoria () {
  $.get('http://localhost:3000/frasesd', trocaFraseAleatoria) // TODO TESTE
  .fail(function (data) {
    $('#erro').fadeToggle(2000, function (params) {
      $(this).fadeToggle(2000)
    })
  })
}

function trocaFraseAleatoria (data) {
  var frase = $('.frase')
  var numeroAleatorio = Math.floor(Math.random() * data.length)

  frase.text(data[numeroAleatorio].texto)
  atualizaTamanhoFrase()
  atualizaTempoInicial(data[numeroAleatorio].tempo)
}
