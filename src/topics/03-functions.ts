// function addNumbers(a:number,b:number){
//     return a + b;
// };

// const addNumbersarrow = (a:number, b:number):string => {
//     return `${a + b}`;
// }

// const result:number = addNumbers(1,2)
// const result2:string = addNumbersarrow(1,2)
// console.log({result})
// console.log({result2})

// const multiplyresult:number = multiply(5);
// console.log(multiplyresult)


// function multiply(firstnumber:number,secondnumber?:number,base:number = 2){
//     return firstnumber * base;
// }


interface character {
    name:string,
    hp:number,
    showHp:() => void;
}

const heal = ( character:character,amount:number) => {

    character.hp += amount;

};
const strider : character = {
    name:'strider',
    hp : 50,
    showHp() {
        console.log(`puntos de vida ${this.hp} `)
    }
}
heal(strider,10);
strider.showHp();


export{}