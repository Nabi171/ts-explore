//interface

// interface IVehile{
//     name:string;
//     model:string;
// }

// const vehile :IVehile={
//     name:"car",
//     model:'2000',
// }

interface Vehile {



    startEngine(): void
    stopEngine(): void;
    move(): void;
}

class Car implements Vehile {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) {

    }
    startEngine(): void {
        console.log('I am starting Engine...')
    }
    stopEngine(): void {
        console.log('i am stopping engine')
    }
    move(): void {
        console.log('i am stopping engine')
    }

    test() {
        console.log('i am for testyiong purpose');
    }
}

const vehile1 = new Vehile('car', 'toyota', 2000)

//abstract class



// abstract class Vehile {
//     constructor(
//         public name: string,
//         public brand: string,
//         public model: number
//     ) {

//     }
//     abstract startEngine(): void
//     abstract stopEngine(): void
//     move(): void {
//         console.log('i am stopping engine')
//     }

// }

// class Car extends Vehile {
//     startEngine(): void {
//         console.log('I am startiong engine ...')
//     }
//     stopEngine(): void {
//         console.log('I am stopping engine ...')
//     }
// }

// const car1 = new Vehile('Car', "Honda", 2015)
