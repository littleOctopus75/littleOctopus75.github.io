interface Hero{
    name: string;
    age: number;
    codeName: string;
    power?: string;
}




export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
}

// const { age, name, power='no tiene poder'}= person;
// console.log({age,name,power})

interface CreateHeroArg{
    name:string;
    age:number;
    codeName:string;
    power?: string
}

const createHero = ({name,age,codeName,power}: CreateHeroArg) =>({
    id: 1232,
    name: name,
    age: age,
    codeName:codeName,
    power: power ?? 'No tiene poder',
})

console.log(createHero(person))
