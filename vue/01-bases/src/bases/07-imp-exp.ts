import heroes, { type Owner, type Hero } from "../data/heroes";

export const getHeroById = (id: number) => {
    return heroes.find(hero => hero.id === id);
}
// console.log(getHeroById(100))
 const getHeroesByOwner=(owner: Owner) =>{
    return heroes.filter(hero => hero.owner===owner) ?? {};
}
console.log(getHeroesByOwner('DC'))
