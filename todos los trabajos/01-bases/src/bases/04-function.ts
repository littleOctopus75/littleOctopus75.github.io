// function greetPerson( name: string ){
// return `hola, ${ name }`;
// }

// const greetPerson = (name:string) => {
// return `hola, ${ name }`;
// }
const greetPerson = (name:string) => `hola, ${ name }`;

// const getUser = () => {
//     return{
//         uid:'ABC-123',
//         username: 'Tony001'
//     }
// }

const getUser = (uid:string) => 
    ({
        uid:uid,
        username: 'Tony001'
    })

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id:2,
        name: 'Superman',
        power: 'Super fuerza',
    }
]

const hero = heroes.find( (h) => h.id===1);

console.log(hero?.power?.toUpperCase);



