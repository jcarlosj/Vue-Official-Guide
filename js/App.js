/** Propiedades Computadas */

var app = new Vue({
    el: '#app',
    data: {
        firstName: 'Ana Maria',
        lastName: 'Castro Chavez'
    },
    computed: {
        fullName: function () {
            return `${ this .firstName } ${ this .lastName }`
        }
    }
});

var app2 = new Vue({             // Instancia de Vue
    el: '#app-2',                // Elemento al que hace referencia la Instancia
    data: {
        firstName: 'Luisa Maria',
        lastName: 'Bazalar Salazar',
        fullName: 'Luisa Maria Bazalar Salazar'
    },
    watch: {                    // Observa por los cambios de cada  uno de las propiedades incluidas en el
        firstName: function ( value ) {
            this .fullName = `${ value } ${ this .lastName }`;
        },
        lastName: function ( value ) {
            this .fullName = `${ this .firstName } ${ value }`;
        }
    }
});
