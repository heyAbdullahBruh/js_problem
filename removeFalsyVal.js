//Revmove Falsy valu for this array--->
let flower = ['Rose',undefined,'Sunflower ',false,'Lily ',NaN,'Tulip', null,'Peony ',0,'Lotus','','Daisy ' ];

/* Way One -->*/
let flower2 = flower.filter((e)=>e);
// console.log(flower2);

/* way two */
let flower3= flower.filter(Boolean);
// console.log(flower3);


/* Find falsy value from array */
let flower4 = flower.filter((e)=>!e);
console.log(flower4);
