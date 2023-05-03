// const searchName = (value: string | null) => {
//     if (value === null) {
//         console.log('there is nothing to search');
//     }
//     else {
//         console.log('searching...');
//     }
// };


// searchName(null);

// //kmh - ms



// const getMyCarSpeed = (speed: unknown) => {
//     if (typeof speed == 'number') {
//         const convertedSpeed = (speed * 1000) / 3600
//         console.log(`My speed is ${convertedSpeed}`)
//     }
//     if (typeof speed === "string") {
//         const [value, unit] = speed.split(' ');
//         const convertedSpeed = (parseFloat(value) * 1000) / 3600;
//         console.log(`My speed is ${convertedSpeed}`)
//     }
//     else {
//         console.log('there is wrong type');
//     }
// };

// getMyCarSpeed(10)
// getMyCarSpeed('10 kmh^-1 ');
// getMyCarSpeed(true);

// function thowError(message: string): never {
//     throw new Error('Error is mortal')
// }

// thowError('eroor hoice')

