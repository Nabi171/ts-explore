// //arrow function




// const createArray = <T>(param: T): T[] => {
//     return [param];
// };
// const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
//     return [param1, param2];
// };

// const result1 = createArray1<string, string>('Bangladesh', 'i love my country');
// const result2 = createArray1<boolean, Array<string>>(false, ["USA"]);

// type Name = { name: "Bangladesh" }

// const result3 = createArray1<Name, boolean>({ name: 'Bangladesh' }, false);


// //spread operator
// const addMeInMyCrushMind = <T>(myInfo: T) => {
//     const crush = 'kate winslet'
//     const newData = { ...myInfo, crush };
//     return newData;
// };

// const myInfo = {
//     name: "Persian",
//     age: 100,
//     salary: 100000,
// }

// const result5 = addMeInMyCrushMind(myInfo);

