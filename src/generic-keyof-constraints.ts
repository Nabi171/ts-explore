// type PersonType = {
//     name: string;
//     age: number;
//     address: string;
// };

// type newType = 'name' | 'age' | 'address'

// type newTypeUsingKeyof = keyof PersonType


// //const a:newType='age'
// //const b:newTypeUsingKeyOf='hh'

// function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
//     obj[key];
// }

// const property = getProperty({ name: "Mr. X", age: 100 }, 'age')

// //name({name:"Mr.X",age:100},'age')//100
// const a = {
//     name: 'Mr. X',
//     age: 100
// }

