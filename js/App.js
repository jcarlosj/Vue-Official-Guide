/** Composición con Componentes */

// Define un nuevo componente llamado todo-item
Vue .component( 'todo-item', {
    template: '<li>Esta es una tarea.</li>'
});

var app = new Vue({             // Instancia de Vue
    el: '#app'                  // Elemento al que hace referencia la Instancia
});

// Define un nuevo componente llamado grocery-item
Vue .component( 'grocery-item', {
    props: [ 'article' ],          // propiedad 'article' atributo personalizado (usado para hacer el bind en la vista)
    template: '<li>{{ article.text }}</li>'
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetales' },
            { id: 1, text: 'Queso' },
            { id: 2, text: 'Cualquier otra cosa que se supone que los humanos coman' }
        ]
    }
});