// object destructure

// const person = { name: 'jack', age: 11, address: "chittagong"};
// console.log(person.address);
// console.log(person.address);
// console.log(person.address);


//1.oporer kaj take aro soje kra jai
// const person = { name: 'jack', age: 11, address: "chittagong"};
// const address=person.address;
// console.log(address);
// console.log(address);
// console.log(address);

//2 onekgula bebohar korar jonno

const person = { name: 'jack', age: 11, address: "chittagong" };
const { address, age, phone } = person;

console.log(address, age);
console.log(address, age);
console.log(address, age);

//3// array theke niye asar jonno

// const friends =['korim','rohim','hasan','jobhaier']
// const [chotoFriemd,nextFriend]=friends;
// console.log(chotoFriemd,nextFriend);

//4/ array er baki friend gula show kra

const friends = ['korim', 'rohim', 'hasan', 'jobhaier']
const [chotoFriemd, nextFriend, ...bakibondu] = friends;
console.log(bakibondu);

//5//complexobjec
// const complexObject = {
//     name: "hgy";
//     info: {
//         address: "rohim uddin"
//         leader: "korim"
//     }
// }
// const { leader } = complexObject.info
// confirm.log(leader);

// 6advance

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};
// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food);



//Array destructure

const [a,b]=[2,4,5]
console.log(a,b)



