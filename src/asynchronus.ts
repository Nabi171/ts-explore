//mocking
const makePromice = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'Data is fetched'
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to feted data!');
        }
    });
};

const makePromiceBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = 'Data is fetched'
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to feted data!');
        }
    });
};


const getPromiseData = async (): Promise<string> => {
    const data = await makePromice();
    return data
}

//Promise<string>Promise<boolean>Promise<object>