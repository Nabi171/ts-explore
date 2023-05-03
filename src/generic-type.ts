type GenericTuple<X, Y> = [X, Y]
const relation: GenericTuple<string, string> = ['Persian', 'kate wing']

const relationWithSalary: GenericTuple<object, string> = [
    {
        name: 'Persian',
        salary: 20390485,
    },
    'kate Winslet',
];

type RelationwithSalaryType = { name: string, salary: number }

const relationWithSalary2: GenericTuple<RelationwithSalaryType, string> = [
    {
        name: 'Persian',
        salary: 20390485,
    },
    'kate Winslet',
];

type GenericArray<T> = Array<T>



const rollnumbers: GenericArray<number> = [2, 3, 45, 6];
const rollNumbers2: GenericArray<string> = ['3', '5', '6'];
const rollNumbers3: GenericArray<boolean> = [true, false];

type NameRollType = {
    name: string; roll: number
}

const userNameAndRollNumbers: GenericArray<NameRollType> = [{
    name: "Mr Eng",
    roll: 1,
},
{
    name: "Mr Y",
    roll: 3,
}
];

