//arrow function




const createArray = <T>(param: T): T[] => {
    return [param];
};
const createArray1 = <T>(param: T): T[] => {
    return [param];
};

const result1 = createArray1<string>('Bangladesh')
const result2 = createArray1<boolean>(false)

type Name = { name: "Bangladesh" }

const result3 = createArray1<Name>({ name: string } >);