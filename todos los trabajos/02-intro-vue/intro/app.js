
const {createApp, ref} = Vue;

const app = createApp({
    // template: `
    //     <h1>{{ message }}</h1>
    //     <p>- {{ author }}</p>
    
    // `,
    setup(){
        // ref es para hacer una variable reactiva,
        // es decir, está nos permitirá realizar un 
        //cambio en el valor de la variable en tiempo de ejcución
        //el ref cambia el valor de message a any
        const message = ref("I´m batman")
        const author = ref("Bruce Wayne")

        const changeQuote = () =>{
            message.value="Hola, soy Goku";
            author.value ="Goku";
        }




        // setTimeout(() =>{
        //     //el message al ser variable reactiva podemos cambiarle su valor con el .value
        //     message.value="soy goku";
        //     author.value="Goku"
        // },1000)
        return {
            message,
            author,
            changeQuote,
        }
    }
});

app.mount('#myApp');


