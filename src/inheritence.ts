// class Parent {
//     name: string;
//     age: number;
//     address: string;

//     constructor(name: string, age: number, adress: string) {
//         this.name = name;
//         this.age = age;
//         this.address = adress;
//     }

//     makeSleep(hours: number): string {
//         return `This ${this.name} will sleep for ${hours}`
//     }
// }


// class Student extends Parent {
//     constructor(name: string, age: number, address: string) {
//         super(name, age, address)

//     }
// }


// const student1 = new Student('Mr. X', 15, 'Uganda');


// class Teacher extends Parent {
//     designation: string;

//     constructor(name: string, age: number, address: string, designation: string) {
//         super(name, age, address)
//         this.designation = designation;
//     }

//     takeClasses(numOfClass: number): string {

//         return `This ${this.name} will take ${class} class`
//     }
// }

// const teacher1 = new Teacher('Mr. y', 54, 'Usa', 'Professor');