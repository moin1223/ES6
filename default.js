
//1//
// function add(korim,rohim){

//     return korim+rohim;
// }
// const total = add(33,44);
// console.log(total);
// const total=(10)//ekere eror dekabe kara paramiter declaer 2 ta  but patacci 1 ta
//eta k solve korar jonno  logi dte pari ebabe
//2//
// function add(korim,rohim){
//     if(rohim==undefined){
//         rohim=2;
//     }

//     return korim+rohim;
// }
// const total = add(33);
// console.log(total);
//3//
//lgicta ebabew kora jai
function add(korim,rohim){
    rohim=rohim || 2;         //ebabe korle eksate 2 ta kaj hoitece mane paramiter ekta patalew kaj korbe 2 ta patalew 
                              //kaj korbe.
     return korim+rohim;
 }
 const total = add(33);
 console.log(total);
//4//
 function add(korim,rohim=2){  //ei 2 valu ta defult valu hesabe dore nive.

     return korim+rohim;
 }
 const total = add(33);
 console.log(total);
 
 
 