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
        ]
      }
    },
    methods: {
        /* functions Vue 3 */

    }
}).mount('#app')