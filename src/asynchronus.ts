//mocking

//json placeholder

interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

const getTodo = async (): Promise<ITodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
};

const getTodoData = async () => {
    const result = await getTodo();
    console.log(result);
};

getTodoData();

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
        const data: boolean = true
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to feted data!');
        }
    });
};

// type DataType={
//     data:string
// }
interface DataType {
    data: string
}

const makePromiceObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: 'Data is fetched' };
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to feted data!');
        }
    });
};


const getPromiseObject = async (): Promise<DataType> => {
    const data = await makePromiceObject();
    return data
}
const getPromiseData = async (): Promise<string> => {
    const data = await makePromice();
    return data
}
const getPromiseBoolean = async (): Promise<boolean> => {
    const data = await makePromiceBoolean();
    return data
}

//Promise<string>Promise<boolean>Promise<object>