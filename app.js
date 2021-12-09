const app = Vue.createApp({
    data(){
        return {
            books: [
                {title: 'A la croisee de chemin', author: 'Zack', img: 'assets/1.jpg'},
                {title: 'Une nuit de carnavale', author: 'Kath', img: 'assets/2.jpg'},
                {title: 'Quand tu n\'est plus la', author: 'Neron', img: 'assets/1.jpg'},
            ]
        }
    },
    methods: {
    }
});

app.mount('#app');