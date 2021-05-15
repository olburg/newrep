// const ivan = {
//     name: 'Ivan',
//     age: 29,
//     profession: 'IT Manager'
// };
//
// const yuri ={
//     name: 'Yuri',
//     age: 30,
//     profession: 'Doctor'
// }

// function Person1(name, age, profession) {
//     this.name= name;
//     this.age = age;
//     this.profession = profession;
// }

// class Person {
//     constructor( name, age ) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log( `hello, my name is ${this.name}` );
//     }
// }
//
// class Employee extends Person {
//     constructor( name, age, profession, salary ) {
//         super(name, age);
//         this.salary = salary;
//         this.profession = profession;
//     }
//     aboutSalary() {
//         console.log( `I have a salary of ${this.salary}` );
//     }
// }
//
// class Child extends Person{
//     constructor(name, age, toy) {
//         super(name, age);
//         this.toy = toy;
//     }
//     canSmile() {
//         console.log( `${this.name} - I can smile` );
//     }
// }
//
// class SchoolChild extends Child {
//     constructor(name, age, toy, group) {
//         super(name, age, toy);
//         this.group = group;
//     }
//     sayHello() {
//         console.log( `hello, my name is ${this.name}` );
//         console.log( `I learning in ${this.group}` );
//     }
// }
//
// const ivan = new Employee('Ivan', 29, 'IT Manager', 1000);
// const yuri = new SchoolChild('Yuri', 17, 'Bear', '10-a');
//
// console.log( ivan )
// console.log( yuri )
// yuri.canSmile();

// class Animal {
//     constructor( type ) {
//         this.type = type;
//     }
//     get type() {
//         return this._type;
//     }
//     set type( value ) {
//         if ( value === 'Dog' ) {
//             this._type= value
//             return
//         }
//         // this._type = value;
//     }
// }
//
// const dog = new Animal("Cat");

class Boy {
    constructor( value ) {
        this.boyName = value
    }
    get boyName() {
        return this._boyName;
    }

    set boyName( value ) {
        if ( value[ value.length - 1 ] === 'а' ) {
            this._boyName = 'Это должен быть мальчик'
            return
        }
        this._boyName = value
    }
}

const boy = new Boy('Маша');