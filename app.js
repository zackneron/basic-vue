const app = Vue.createApp({
    data(){
        return {
            title: 'Kath Way City',
            author: 'Zack Mutombo',
            age: 35,
            likes: 20+'k'
        }
    }
});

app.mount('#app');