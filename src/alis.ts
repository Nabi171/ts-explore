type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address: string
}

const crush1: CrushType = {
    name: "moyna ",
    age: 22,
    profession: 'web dev',
    address: 'uaga'
};

const crush2: CrushType = {
    name: 'Tia',
    profession: 'next level developer',
    address: 'mexico',
}

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

// type CourseNameType

type CourseNameType = string

const courseName: CourseNameType = 'Next levl web dev'
