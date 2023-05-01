const { createApp } = Vue

createApp({
    data() {
    return {
        email: [

        ]
    }
    },


    created(){

        for( let i=0; i<10; i++){
            //prendiamo tutto cio che e presente nel nostro indirizzo API tramite l'elemento (get)
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            //slaviamo il contenuto dell'api all'intertno di una variabile 
            .then( ( res ) =>{
                console.log(res.data.response ),
                //seguiamo il percorso che ci porterà all'elemento a noi interessato e lo pushiamo nel nostro arrey
                this.email.push(res.data.response)
        })
        }
        
        
    }, 


    methods: {



    }

}).mount('#app')