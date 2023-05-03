// //Generic Interface

// interface CrushInterface<T, U = null> {
//     name: string;
//     husband: T;
//     wife?: U;

// }


// interface PersonInterface { name: string, age: number }

// const crush4: CrushInterface<PersonInterface, PersonInterface> = {
//     name: 'kate',
//     husband: {
//         name: 'Persian',
//         age: 30,
//     },
//     wife: {
//         name: 'winki',
//         age: 40,
//     }
// }

// const crush1: CrushInterface<boolean, string> = {
//     name: "kate Winslet",
//     husband: true,
//     wife: 'chokina',
// };
// const crush2: CrushInterface<string, null> = {
//     name: "kate Winslet",
//     husband: 'persian'
// };

// interface HusbandInterface {
//     name: string;
//     salary: number;
// }

// const crush3: CrushInterface<HusbandInterface> = {
//     name: "kate Winslet",
//     husband: {
//         name: 'Persian',
//         salary: 0.01
//     }
// };





// type GenericTuple<X, Y> = [X, Y]
// const relation: GenericTuple<string, string> = ['Persian', 'kate wing']

// const relationWithSalary: GenericTuple<object, string> = [
//     {
//         name: 'Persian',
//         salary: 20390485,
//     },
//     'kate Winslet',
// ];

// // type RelationwithSalaryType = { name: string, salary: number }
// interface RelationwithSalaryInterface {
//     name: string,
//     salary: number
// }

// const relationWithSalary2: GenericTuple<RelationwithSalaryInterface, string> = [
//     {
//         name: 'Persian',
//         salary: 20390485,
//     },
//     'kate Winslet',
// ];

// type GenericArray<T> = Array<T>



// const rollnumbers: GenericArray<number> = [2, 3, 45, 6];
// const rollNumbers2: GenericArray<string> = ['3', '5', '6'];
// const rollNumbers3: GenericArray<boolean> = [true, false];

// type NameRollType = {
//     name: string; roll: number
// }

// const userNameAndRollNumbers: GenericArray<NameRollType> = [{
//     name: "Mr Eng",
//     roll: 1,
// },
// {
//     name: "Mr Y",
//     roll: 3,
// }
// ];

