
const skills:string[] = ['bash','counters','healing'];



interface character {
    name:string;
    hp:number;
    skills:string[];
    hometown?:string;
}



const strider:character = {
    name: 'strider',
    hp: 100,
    skills: ['bash', 'counter'],
    hometown: undefined
}


strider.hometown = 'Riverdell';
console.table(strider);


















export{}