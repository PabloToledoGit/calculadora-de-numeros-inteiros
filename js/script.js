var input1 = document.querySelector('#input1');
var botao = document.querySelector('#botaoinput');
var input2 = document.querySelector('#input2');
var resultado = document.querySelector('#resultado');

botao.addEventListener('click', () =>{
    var calculo = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerHTML = calculo;

})

