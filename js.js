const formTemp =document.querySelector('#formulario');
const resultadoTemperatura= document.querySelector('#res_temperatura');
//var formHumedadAire=document.querySelector('#humedadAire');
//var formHumedadTierra=document.querySelector('#humedadTierraa');
//var formLuz=document.querySelector('#Luz');

evenListeners();
function evenListeners(){
    formTemp.addEventListener('submit',agregandoTemperatura;
}

function verTemperatura(e){
    e.preventDefault();
    console.log('agregando temp');
}

function agregarTemperatura(){
    const temperatura = document.querySelector('#res_temperatura').nodeValue;
    console.log(temperatura);
}


