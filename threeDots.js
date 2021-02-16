//problem:1
const ages = [22, 34, 77];
const ages2 = [55,99,55];
const allAges =ages.concat(ages2);
console.log(allAges);
//oprer kajta sohoj bhabe karar jonnnp three dots use kra hoi es6 e.
const allAges2 =[...ages,...ages2,5];//=>5 ta new akta element add korlum
console.log(allAges2);
//problem2:
const cha = 22;
const kopi = 11;
const muri = 11;
const maximum = Math.max(cha,kopi,muri);
console.log(maximum);
//oporer math three dots diye kra
const thaka =[22,11,11];
const maximum2 = Math.max(...thaka);
console.log(maximum2);