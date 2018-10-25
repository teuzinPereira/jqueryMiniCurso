$('#ativaEvento').click(function (e) {
    contador();
});


$("#campoTexto").focus(function (e) {});

$("#contarText").click(function (e) {
    var tempo = 5;
    var controlador = setInterval(function(){
        tempo--;
        if(tempo > -1){
            $("#contadorTempo").text(tempo);
        }else{
            clearInterval(controlador);
            var textoDigitado = $("#campoTexto").val();
            if(textoDigitado == 'Vamos contar essa frase que tem 8 palavras') {
                alert("Jogo Terminou, você ganhou");
            }else{
                alert('Você perdeu');
            }
        }
    },1000);
});

function contador() {
    var texto = $("#campoTexto").val();
    var temp = texto.split(' ');
    $("#contadorPalavras").text(temp.length);
}

