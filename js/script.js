var input1 = document.querySelector('#input1');
var botao = document.querySelector('#botaoinput');
var input2 = document.querySelector('#input2');
var resultado = document.querySelector('#resultado');
var botao2 = document.querySelector('#botaoinput2')
var botao3 = document.querySelector('#botaoinput3')

botao.addEventListener('click', () =>{
    var calculo = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerHTML = calculo;

})

botao2.addEventListener('click', () => {

    var calculo2 = parseInt(input1.value) / parseInt(input2.value);
    resultado.innerHTML = calculo2;

})

botao3.addEventListener('click', () => {

    var calculo3 = parseInt(input1.value) * parseInt(input2.value);
    resultado.innerHTML = calculo3;
})





