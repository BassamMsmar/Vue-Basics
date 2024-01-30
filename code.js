const { createApp } = Vue;

createApp({
    data() {
        return {
            name: 'Bassam',
            link: 'https://www.google.com',
            count: 0,
        }
    },
        methods: {
            welcome(name){
                return "Hello " + name
                
            },
            myTest(){
                alert("bassam")
                console.log("bassam")
            },
            increase(){
                this.count += 1
            },
            decrease(){
                this.count -= 1
            }

        }
    }).mount("#app")