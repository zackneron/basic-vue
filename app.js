const app = Vue.createApp({
    data(){
        return {
            books: [
                {title: 'A la croisee de chemin', author: 'Zack', img: 'assets/1.jpg', isFav: true},
                {title: 'Une nuit de carnavale', author: 'Kath', img: 'assets/2.jpg', isFav: false},
                {title: 'Quand tu n\'est plus la', author: 'Neron', img: 'assets/1.jpg', isFav: true},
            ]
        }
    },
    methods: {
        toogleBtn(book){
            // if(book.isFav === true){
            //     book.isFav = false
            // } else {
            //     book.isFav = true
            // }
            book.isFav = !book.isFav
        }
    }
});

app.mount('#app');