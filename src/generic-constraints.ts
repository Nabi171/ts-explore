

const addMeInMyCrushMind = <T>(myInfo: T) => {
    const crush = 'kate winslet'
    const newData = { ...myInfo, crush };
    return newData;
};

const myInfo = {
    name: "Persian",
    age: 100,
    salary: 100000,
}

const result5 = addMeInMyCrushMind(myInfo);

