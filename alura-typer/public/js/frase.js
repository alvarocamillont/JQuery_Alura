/* global $  atualizaTamanhoFrase  atualizaTempoInicial */

$('#botao-frase').click(fraseAleatoria)
$('#botao-frase-id').click(buscaFrase)

function fraseAleatoria () {
  requisitaFrase(trocaFraseAleatoria)
}

function trocaFraseAleatoria (data) {
  var frase = $('.frase')
  var numeroAleatorio = Math.floor(Math.random() * data.length)

  frase.text(data[numeroAleatorio].texto)
  atualizaTamanhoFrase()
  atualizaTempoInicial(data[numeroAleatorio].tempo)
}

function buscaFrase () {
  $('#spinner').toggle()
  var fraseId = $('#frase-id').val()

    // criacao do objeto JS que guarda a id
  var dados = {id: fraseId}
  requisitaFrase(trocaFrase, dados)
}

function trocaFrase (data) {
  var frase = $('.frase')
  frase.text(data.texto)
  atualizaTamanhoFrase()
  atualizaTempoInicial(data.tempo)
}

function requisitaFrase (funName, parametro) {
  $('#spinner').fadeToggle(2000)
  $.get('http://localhost:3000/frases', parametro, funName)
  .fail(function () {
    $('#erro').fadeToggle(2000, function () {
      $(this).fadeToggle(2000)
    })
  })
  .always(function () {
    $('#spinner').toggle()
  })
}
