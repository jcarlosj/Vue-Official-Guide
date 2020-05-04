/** Condicionales y Bucles */

var app = new Vue({             // Instancia de Vue
    el: '#app',                 // Elemento al que hace referencia la Instancia
    data: {                     // Definición de propiedades
        seen: true
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        todos: [
            { text: 'Aprender JavaScript' },
            { text: 'Aprender Vue' },
            { text: 'Construir algo increíble' }
        ]
    }
});