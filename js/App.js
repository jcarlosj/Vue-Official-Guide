/** Manejando Interacciones del Usuario */

var app = new Vue({             // Instancia de Vue
    el: '#app',                 // Elemento al que hace referencia la Instancia
    data: {                     // Definición de propiedades
        message: 'Hola Vue.js!'
    },
    methods: {                  // Definicion de Metodos 
        reverseMessage: function () {
            this .message = this .message .split('') .reverse() .join('')
        }
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Hola Vue.js!'
    }
});