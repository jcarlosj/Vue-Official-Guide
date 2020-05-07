/** Propiedades Computadas */

var app = new Vue({             // Instancia de Vue
    el: '#app',                 // Elemento al que hace referencia la Instancia
    data: {
        message: ''
    },
    methods: {
        doSomething: function ( event ) {
            this .message = event .target .name .value;
        }
    },
    computed: {
        reversedMessase: function ( event ) {
            return this .message .split('') .reverse() .join('');
        }
    }
});
