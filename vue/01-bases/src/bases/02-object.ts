export const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 3245,
        lat: 14.2453,
        lng: 34.3452
    }
 };//as const;

//  const person2 = {...person, address: {...person.address}};
 const person2 = structuredClone(person)


 person2.lastName='Parker'
 person2.address.city = 'LA'

 console.log({person});
 console.log({person2});