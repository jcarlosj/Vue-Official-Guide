/** Directivas */

var app = new Vue({             // Instancia de Vue
    el: '#app',                 // Elemento al que hace referencia la Instancia
    data: {                     // Definición de propiedades
        url: 'https://es.vuejs.org/'
    },
    methods: {
        doSomething: function () {
            console .log( 'Hola Vuejs!' );
            alert( 'Hola Vuejs!' );
        }
    }
});
