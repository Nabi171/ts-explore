// type NoobDeveloper = {
//     name: string
// }

// // type JuniorDeveloper = {
// //     name: string,
// //     expertise: string;
// //     experience: number;
// // };

// type JuniorDeveloper = NoobDeveloper & {
//     expertise: string;
//     experience: number;
// };

// enum Level {
//     junior = "junior",
//     mid = 'mid',
//     senior = 'senior',
// }

// type NextLevelDeveloper = JuniorDeveloper & {
//     leadershipExperience: number;
//     level: Level,
// };


// const newDeveloper: NoobDeveloper | JuniorDeveloper = {
//     name: "monju",
//     expertise: "js",
//     experience: 1,

// }

// const developer: NextLevelDeveloper = {
//     name: "Next Bhai",
//     expertise: "ts",
//     experience: 3,
//     leadershipExperience: 2,
//     level: Level.junior,
// }