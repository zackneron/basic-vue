const app = Vue.createApp({
    data(){
        return {
            displayBooks: true,
            title: 'Kath Way City',
            author: 'Zack Mutombo',
            age: 35,
            likes: 20+'k',
            btn: 'Hide Books',
        }
    },
    methods: {
        toogleBooks(){
            this.displayBooks = !this.displayBooks;
            if(this.btn === 'Hide Books') {
                this.btn = 'Show Books'
            } else {
                this.btn = 'Hide Books'
            }
        },
    }
});

app.mount('#app');