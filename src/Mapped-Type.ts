// const arrayofNumbers = [1, 2, 3];
// const arrayOfStrings = arrayofNumbers.map((number) => number.toString());
// console.log(arrayOfStrings);


// type Volume = {
//     height: number;
//     width: number;
//     deepth:number

// };

// type Area<T> = {
//     // [key in keyof Volume]: Volume[key];
//    readonly [key in keyof T] : T[key]
// };

// const area1:Area<{height:number,width:string}>={height:10,width:'10'}

// area1.height=17

// type AreaString = {
//     height: string;
//     width: string;
// }

// type AreaReadonly = {
//     readonly height: number;
//     readonly width: number;
// }

// const rectangularArea: AreaReadonly = {
//     height: 10,
//     width: 12,
// }

// rectangularArea.width = 10


// type A = AreaNumber['height']
// type B = keyof AreaNumber;