const { createApp } = Vue;
createApp({
    data() {
      return {
        /* variables Vue 3 */
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        ],
        elimin: 0
      }
    },
    methods: {
        /* functions Vue 3 */
        eliminate(index){
            this.todos.splice(index, 1);
        }
    }
}).mount('#app')