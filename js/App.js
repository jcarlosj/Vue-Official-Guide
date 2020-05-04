/** Hooks del Ciclo de vida de la Instancia */

var app = new Vue({             // Instancia de Vue
    el: '#app',                 // Elemento al que hace referencia la Instancia
    data: {                     // Definición de propiedades
        message: 'Mira lo que pasa en consola!'
    },
    /** Hooks del Ciclo de vida de la Instancia */
    beforeCreate: function () {
        // `this` hace referencia a la instancia vm
        console .group( 'beforeCreate!' );
        console.log( `mensaje: ${ this .message }` );
        console .groupEnd();
    },
    created: function () {
        console .group( 'created!' );
        console.log( `mensaje: ${ this .message }` );
        console .groupEnd();
    },
    beforeMount: function () {
        console .group( 'beforeMount!' );
        console.log( `mensaje: ${ this .message }` );
        console .groupEnd();
    },
    mounted: function () {
        console .group( 'mounted!' );
        console.log( `mensaje: ${ this .message }` );
        console .groupEnd();
    },
    beforeUpdate: function () {
        console .group( 'beforeUpdate!' );
        console.log( `mensaje: ${ this .message }` );
        console .groupEnd();
    },
    updated: function () {
        console .group( 'updated!' );
        console.log( `mensaje: ${ this .message }` );
        console .groupEnd();
    },
    beforeDestroy: function () {
        console .group( 'beforeDestroy!' );
        console.log( `mensaje: ${ this .message }` );
        console .groupEnd();
    },
    destroyed: function () {
        console .group( 'destroyed!' );
        console.log( `mensaje: ${ this .message }` );
        console .groupEnd();
    }
});
