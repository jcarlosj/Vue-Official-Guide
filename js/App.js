/** Interpolaciones */

var app = new Vue({             // Instancia de Vue
    el: '#app',                 // Elemento al que hace referencia la Instancia
    data: {                     // Definición de propiedades
        applyStyle: false
    },
    methods: {                  // Definicion de Metodos
        removeIdSelector: function () {
            this .applyStyle = ! this .applyStyle;
            console .log( `${ this .applyStyle ? 'Pone ' : 'Quita' } el estilo` );
        }
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Hola Vue.js!'
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        message: 'Hola Vue.js!'
    }
});
