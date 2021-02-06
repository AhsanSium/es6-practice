// const let ..............
const hubby = "Elis Kanchon";
console.log(hubby); 
const numbers = [12, 17, 25, 30, 19];
numbers[1] = 13;

//Function default value practice................
function add (num1, num2 = 0){
    const value =  num1 + num2;
    console.log(value);
    return value;
}
console.log(add(12, 14));

//String Template....................
const fullName = `${add(17, 27)} i am practicing ES-6
So far JS Looks OK! 
don't know about Future`;

console.log(fullName);

// ES-6 Function ( Arrow Function )..............................
// const doubleIt (){
//     return num * 2;
// }

const doubleIt = num => num * 2;
console.log(doubleIt(5));

const addIt = (num1, num2) => x + y;
console.log(doubleIt(5, 5));

const give10 = () => 10;
console.log(give10());

const bishal = (x = 0, y = 0) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
console.log(bishal(5, 4));

// tHree dots ... 
const ages = [12, 14 ,12, 13, 15, 17];
const ages2 = [12, 14 ,12, 17];
const ages3 = [22, 34 ,32, 27];

const allAges = ages.concat(ages2).concat([0, 10]).concat(ages3);
console.log(allAges);
// ES-6 Technique.........
const allAges2 = [...ages, ...ages2, 5, 10, 11,...ages3];
console.log(allAges2);

const takaPoysa = [650, 450, 250];
const maximum = Math.max(...takaPoysa);
const minimum = Math.min(...takaPoysa);
console.log(maximum);
console.log(minimum);

//class........................
class student{
    constructor(sId, sName){
        this.name = sName;
        this.id = sId;
    }
}
const student1 = new student(11, "Shuvo");
const student2 = new student(12, "Mahi");
console.log([student1, student2]);

// Inheritance................. 
class parent{
    constructor(){
        this.fathersName = "Schwerznegger";
    }
}
class child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const newName = new child("Ahsan");
console.log([newName]);

// De-structure.................
const person = {name:"Jack", age:17, job:"Facebook", phone:"017111111"}
const {phone} = person;
console.log(phone);





