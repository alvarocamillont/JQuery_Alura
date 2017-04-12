/* global $  atualizaTamanhoFrase  atualizaTempoInicial */

$('#botao-frase').click(fraseAleatoria)

function fraseAleatoria () {
  $('#spinner').fadeToggle(2000)

  $.get('http://localhost:3000/frases', trocaFraseAleatoria) // TODO TESTE
  .fail(function (data) {
    $('#erro').fadeToggle(2000, function () {
      $(this).fadeToggle(2000)
    })
  })
  .always(function () {
    $('#spinner').toggle()
  })
}

function trocaFraseAleatoria (data) {
  var frase = $('.frase')
  var numeroAleatorio = Math.floor(Math.random() * data.length)

  frase.text(data[numeroAleatorio].texto)
  atualizaTamanhoFrase()
  atualizaTempoInicial(data[numeroAleatorio].tempo)
}
