//Ubicacion dentro del DOM
var infomedia = document.getElementById('infomedia');

//Generar la funcion
function changecolor(){
    infomedia.style.color = 'grey'

var brown = Math.random() * 50;
var coral = Math.random() * 50;
var grey = Math.random() * 50;


infomedia.style.backgroundColor = 'rgb('+brown+', '+coral+','+grey+')';
}


//Ejecutar la funcion
changecolor();

//Actualizar la funcion
setInterval( changecolor, 1000);
