// three dot

// const ages = [22,33,44];
// const ages2= [44,55,66];
// const allAges =[...ages, 3]
// console.log(allAges)

// destructure

//  const student = {  name:"moin",  roll:12,age1:8 }

//  const { name, roll, age1 } = student
//  console.log(roll)

// template

// const habby = `bz Zn Zn z zN z
// z BZ bN Z ZN  
//  Zv Zvz zv `
//  const firstName = "moin"
//  const lastName ="uddin"
//  const fullName = `${firstName} ${lastName}`
//  console.log(habby)
//  console.log(fullName)

// default

// function add(a,b){
//     b = b || 4;
//     return a+b;
// }
// const result = add(2,88)
// console.log(result)



// 1.let and var

// const name ="moin"
// name="hasan"
// console.log(name)
// let name ="moin"
// name="hasan"
// console.log(name)


// 2.template string

// const firstName = "Moin"
// const lastName ="Uddin"
// const FullName = `${firstName} ${lastName}`
// console.log(FullName);

// 3 ThreeDot

// const studentroll1 = [1,6,7,8];
// const studentroll2 = [8,9,66,99];
// const allstudentRolls = [...studentroll1, studentroll2];
// console.log(allstudentRolls);

// 4. Arrow function
const number = (num)=>num*8
const gun = number(4)
console.log(gun)

// 5.destructure
const student = {
    id:1,
    name:"moin uddin",
    age:22,
}

const {id, name, age} = student;
console.log(name)

// 6.default

function calculate(num1, num2) {
     num2=num2 || 7
    plus = num1 + num2
    return plus
}
const result = calculate(4)
console.log(result)



// 7.callback higerorder fuction

const calculator = (num) =>{
    num=num*3;
    console.log(num)
}

const higerorderFunction = (num,callback) =>{
    calculator(num)

}

higerorderFunction(6,calculator)





 