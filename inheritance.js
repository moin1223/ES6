//basic inheritance
// class parent{
//     constructor(){
//         this.fatherName="korim uddin";
//     }
// }
// class Child extends parent{
//     constructor(name){
//         super();
//         this.name=name;

//     }
// }
// const baby=new Child("hasan");
// const baby2=new Child("tom")
// console.log(baby,baby2);

//inheritence e function kew call kora ja.

class parent {
    constructor() {
        this.fatherName = "korim uddin";
    }
}
class Child extends parent{
    constructor(name) {
        super();
        this.name = name;

    }
    getFullName() {
        return this.name + " " + this.fatherName
    }
}
const baby = new Child("hasan");
const baby2 = new Child("tom")
console.log(baby.getFullName())
console.log(baby2.getFullName());