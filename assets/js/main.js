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
        counter: 2,
      }
    },
    methods: {
        /* functions Vue 3 */
        eliminate(index){
            this.todos.splice(index, 1);
        },
        addTodo(){
            this.counter++;
            let todoNew = document.getElementById('newTodo').value;
            if ( todoNew == null || todoNew == "" ){

            } else {
                this.todos.push({text: todoNew, done: false});
            }
        }
    }
}).mount('#app')