/** Interpolaciones */

var app = new Vue({             // Instancia de Vue
    el: '#app',                 // Elemento al que hace referencia la Instancia
    data: {                     // Definición de propiedades
        dynamicId: 'title',
        isButtonDisabled: false
    },
    methods: {
        removeIdSelector: function () {
            this .dynamicId = '';
            this .isButtonDisabled = true;
            console .log( 'Elimina ID de estilo del texto y deshabilita el botón' );
        }
    }
});
