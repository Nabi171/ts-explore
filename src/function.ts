// //normal function
// //default peramater

// function add(num1: number, num2: number = 12): number {
//     return num1 + num2;
// }
// add(30, 50)
// //spread operator
// const myFriends = ['chhan', "mana", 'ross'];

// const myBestFriend = {
//     fullName: 'abul kakl',
// };

// const [bestfriend] = myFriends;
// const { fullName: string } = myBestFriend;

// console.log({ string });



// const newFriends = ['monica', 'rachel', 'pheoo'];
// myFriends.push(...newFriends);
// // console.log(myFriends);
// //rest operator
// const greetFriends = (...friends: string[]): void => friends.forEach((friend) => console.log(`
// Hi ${friend}\n 


// `));

// greetFriends('Kasem', "hasem", 'gashem', 'lasem', 'bangla vhai');

// //array and object destructuring



// const addArrow = (num1: number, num2: number): number => num1 + num2;

// const arr = [1, 3, 4];

// const newArry = arr.map((elem: number) => elem * elem)

// const person: {
//     name: string;
//     balance: number;
//     addBalance(money: number): void;
// } = {
//     name: "Mezba",
//     balance: 5,
//     addBalance(money: number) {
//         console.log(`My Balance is ${this.balance + money}`)
//     }
// }