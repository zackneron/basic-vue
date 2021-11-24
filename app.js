const app = Vue.createApp({
    data(){
        return {
            title: 'Kath Way City',
            author: 'Zack Mutombo',
            age: 35,
            likes: 20+'k'
        }
    },
    methods: {
        updateTitle: function(){
            this.title = "I am a man in the misor"
        },
        changeAuthor(author){
            this.author = author
        }
    }
});

app.mount('#app');