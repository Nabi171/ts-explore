//Pick

interface Person {
    name: string;
    email?: string;
    contactNo: string;
}

type contactNo = Pick<Person, "contactNo" | 'email'>;

// omit 
type Name = Omit<Person, "email" | "contact No">;

type Optional = Partial<Person>;
type RequiredProps = Required<Person>

const person: Person = {
    name: "Persian",
    email: 'abc@gmail.com',
    contactNo: '1234',
}

person.name = "Forhan";

//Record Type

// type myObj = {
//     a: string;
//     b: string;
//     c: string;
// };

//using index signature
type myObj = {
    [key: string]: string
}

const obj: myObj = {
    a: "1",
    b: "2",
    c: "3"
}