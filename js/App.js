/** Propiedades Computadas */

var app = new Vue({             // Instancia de Vue
    el: '#app',                 // Elemento al que hace referencia la Instancia
    data: {
        message: ''
    },
    computed: {
        reversedMessase: function ( event ) {
            return this .message .split('') .reverse() .join('');
        }
    }
});
