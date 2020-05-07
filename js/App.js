/** Directivas */

var app = new Vue({             // Instancia de Vue
    el: '#app',                 // Elemento al que hace referencia la Instancia
    methods: {
        doSomething: function ( event ) {
            event .preventDefault();

            console .log( event .target .name .value );
            alert( `Hola ${ event .target .name .value }! \nBienvenido a Vue.js` );
        }
    }
});

var app2 = new Vue({             // Instancia de Vue
    el: '#app-2',                // Elemento al que hace referencia la Instancia
    methods: {
        doSomething: function ( event ) {

            if( event .target .name .value .length < 'vue' .length ) {
                alert( `Vaya! tu nombre es mas corto que 'Vue'` );
            }
            else if( event .target .name .value .length === 'vue' .length ) {
                alert( `La longitud de tu nombre es igual a la de 'Vue'` );
            }
            else {
                alert( `Hola ${ event .target .name .value }! \nBienvenido a Vue.js` );
            }
        }
    }
});
