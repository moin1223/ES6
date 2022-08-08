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






