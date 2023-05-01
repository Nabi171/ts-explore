//ternary operator

const age: number = 22

// if (age >= 18) {
//     console.log('yes');
// }
// else {
//     console.log('no')
// }


const isAdult = age >= 18 ? 'Yes' : 'No';
console.log(isAdult);

//Nullish coalescing operator
//null and undefined

const isAuthenticatedUser = ''
const userName = isAuthenticatedUser ?? 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'guest'

console.log({ userName }, { userName2 });


type Manush = {
    name: string;
    age: number;
    adress: {
        city: 'No city',
        road: "no road",
        home?: '',
    }
}

const manush1: Manush = {
    name: 'Manush',
    age: 100,
    adress: {
        city: "No city",
        road: "no road",
    }
}

const home = manush1 ?.address ?.home ?? 'No home' 

console.log({ home })