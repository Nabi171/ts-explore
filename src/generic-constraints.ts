type MandatoryTypes = { name: string, age: number, salary: number }
interface MandatoryInterface { name: string, age: number, salary: number }
const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
    const crush = 'kate winslet'
    const newData = { ...myInfo, crush };
    return newData;
};


type MyInfoType = {
    name: string;
    age: number;
    salary: number;
    other1: boolean,
    other2: null;
}
const myInfo: MyInfoType = {
    name: "Persian",
    age: 100,
    salary: 100000,
    other1: false,
    other2: null,
}

const result5 = addMeInMyCrushMind(myInfo);
result5
