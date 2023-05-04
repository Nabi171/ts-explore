class Student {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, adress: string) {
        this.name = name;
        this.age = age;
        this.address = adress;
    }

    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`
    }
}

class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;


    constructor(name: string, age: number, address: string, designation: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }
    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`
    }
    takeClasses(numOfClass: number): string {
        return `This ${this.name} will take ${class} class`
    }
}