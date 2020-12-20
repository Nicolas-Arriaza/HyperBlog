const formulario = document.querySelector('.formulario')


eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarR)
}
function agregarR(e){
    e.preventDefault();

    console.log('guardando respuesta');

    const respuesta = document.querySelector('#temperatura').value;
    const respuesta1 = document.querySelector('#HumedadAire').value;
    const respuesta2 = document.querySelector('#HumedadTierra').value;
    const respuesta3 = document.querySelector('#Luz').value;
    
    mostrarEstado(respuesta,respuesta1,respuesta2,respuesta3);
    guardarLocal(respuesta,respuesta1,respuesta2,respuesta3);
    e.preventDefault();
}
function guardarLocal(temp,haire,htierra,luz){

    temperatura=[];
    humedadA=[];
    humedadT=[];
    Nluz=[];

    if(localStorage.getItem('temperatura')===!null){
        temperatura=localStorage.getItem('temperatura');
    }
    if(localStorage.getItem('haire')===!null){
        humedadA=localStorage.getItem('haire');
    }
    if(localStorage.getItem('htierra')===!null){
        humedadT=localStorage.getItem('htierra')
    }
    if(localStorage.getItem('luz')===!null){
        Nluz=localStorage.getItem('luz')
    }

    temperatura.add(temp);
    humedadA.add(haire);
    humedadT.add(htierra);
    Nluz.add(luz);

    localStorage.setItem('temperatura',temperatura);
    localStorage.setItem('haire',humedadA);
    localStorage.setItem('htierra',humedadT);
    localStorage.setItem('luz',Nluz);

//    MostrarHistorico(temperatura,humedadA,humedadT,Nluz);
}

function MostrarHistorico(T,hT, hA, L){
    const Mensaje= document.createElement('p');
    const Mensaje1= document.createElement('p');
    const Mensaje2= document.createElement('p');
    const Mensaje3= document.createElement('p');
    
   
    var mensaje=("Temperatura: " + T );
    var mensaje1=("Humedad del aire: "+hA);
    var mensaje2=("Humedad de la tierra: "+hT);
    var mensaje3=("Nivel de luz "+L);


    Mensaje.textContent = mensaje;
    Mensaje1.textContent = mensaje1;
    Mensaje2.textContent = mensaje2;
    Mensaje3.textContent = mensaje3;

    Mensaje.classList.add('mensaje1');
    Mensaje1.classList.add('mensaje1');
    Mensaje2.classList.add('mensaje1');
    Mensaje3.classList.add('mensaje1');

    
    const conetenido= document.querySelector('#historico');
    const conetenido1= document.querySelector('#historico');
    const conetenido2= document.querySelector('#historico');
    const conetenido3= document.querySelector('#historico');

    conetenido.appendChild(Mensaje);
    conetenido1.appendChild(Mensaje1);
    conetenido2.appendChild(Mensaje2);
    conetenido3.appendChild(Mensaje3);

}
function mostrarEstado(temp,haire,htierra,luz){
    const Mensaje= document.createElement('p');
    const Mensaje1= document.createElement('p');
    const Mensaje2= document.createElement('p');
    const Mensaje3= document.createElement('p');
    
   
    var mensaje=("Temperatura: " + temp  );
    var mensaje1=("Humedad del aire: "+haire);
    var mensaje2=("Humedad de la tierra: "+htierra);
    var mensaje3=("Nivel de luz "+luz);

    
    Mensaje.textContent = mensaje;
    Mensaje1.textContent = mensaje1;
    Mensaje2.textContent = mensaje2;
    Mensaje3.textContent = mensaje3;

    Mensaje.classList.add('mensaje');
    Mensaje1.classList.add('mensaje')
    Mensaje2.classList.add('mensaje')
    Mensaje3.classList.add('mensaje')

    const conetenido= document.querySelector('#formulID');
    const conetenido1= document.querySelector('#formulID');
    const conetenido2= document.querySelector('#formulID');
    const conetenido3= document.querySelector('#formulID');
    
    conetenido.appendChild(Mensaje);
    conetenido1.appendChild(Mensaje1);
    conetenido2.appendChild(Mensaje2);
    conetenido3.appendChild(Mensaje3);
}