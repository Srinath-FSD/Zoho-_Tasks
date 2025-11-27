//FOR LOOP

// // EXAMPLE 1

// for (let team = 1 ; team <10 ;team ++){
//     console.log('team ' + team)
// }

// //EXAMPLE 2

// for (let evenNum = 2 ; evenNum <=20;evenNum += 2){
//     console.log('Even is :' + evenNum);
    
// }

// //EXAMPLE 3

// let hero = ["VIJAY","AJITH","SK","PRADHEEP"]

// for (let i=0;i <hero.length ;i ++){
//     console.log(hero[i]);
    
// }

//NESTED FOR LOOP

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  // spaces
  for (let s = 1; s <= n - i; s++) {
    row += " ";
  }

  // ascending numbers
  for (let j = 1; j <= i; j++) {
    row += j;
  }

  // descending numbers
  for (let j = i - 1; j >= 1; j--) {
    row += j;
  }

  console.log(row);
}
