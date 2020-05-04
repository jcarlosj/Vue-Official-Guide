/** Datos y Métodos */

var data = {                    // Define un Objeto
    text: 'Hola Vue.js!'
}

var app = new Vue({             // Instancia de Vue
    el: '#app',                 // Elemento al que hace referencia la Instancia
    data                        // Definición de propiedades
});


var data2 = {
    text: 'Vue.js, te saluda!'
}

Object .freeze( data2 );        // Impide agregar/eliminar propiedades, su capacidad de numeracion, configuracion o escritura 

var app2 = new Vue({
    el: '#app-2',
    data: data2
});