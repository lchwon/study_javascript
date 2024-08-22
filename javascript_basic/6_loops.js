/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

const { compileScript } = require("vue/compiler-sfc");

for(let i = 0; i < 10; i++){
   console.log(i);
}

console.log('----------');

for(let i = 10; i > 0; i--){
   console.log(i);
}

console.log('----------');
//구구단
for(let i = 1; i < 10; i++){
   for(let j = 1; j < 10; j++){
      //console.log(i ,'*' ,j, '=', i*j);
      console.log(`${i} * ${j} = ${i*j}`);
   }
}

/**
 * for..in
 * //index 값을 가져오고 싶을 때 
 */
console.log('----------');
const chaeWon = {
   name: '이채원',
   teat: '1992',
   age: '33',
}
// key 값을 받을 수 있다.
for(let key in chaeWon){
   console.log(key);
}
console.log('----------');

const chaeWonArray = ['이채원', '일산', '33', '백수', '청소'];
//index를 받을 수 있다.
for(let key in chaeWonArray){
   console.log(key);
   console.log(`${key}: ${chaeWonArray[key]}`)
}

console.log('----------');

/**
 * for..of
 * // value 값을 가져오고 싶을 때
 */
for(let value of chaeWonArray){
   console.log(value);
}

console.log('----------');
/**
 * While
 */
let number = 0;

while(number < 10){
   number ++;
}

console.log(number);

console.log('----------');

/**
 * do...while
 */
number = 0;

do{
   number ++;
}while(number < 10);

console.log(number);

console.log('----------');

/**
 * break
 */
for( let i = 0; i < 10; i++){
   if (i === 5){
      break; // loop를 깨트린다.
   }
   console.log(i);
}

number = 0;
while(number < 10){
   if(number === 5){
      break;
   }
   
   number++;
   console.log(number);
}

console.log('----------');

/**
 * continue
 */
for(let i = 0; i < 10; i++){
   if( i === 5){
      continue; // true면 현재 진행하고 있는 loop을 종료하고 다음 loop으로 넘어가라
   }

   console.log(i);
}

number = 0;

while(number < 10){
   number++;

   if(number === 5){
      continue;
   }

   console.log(number);
}