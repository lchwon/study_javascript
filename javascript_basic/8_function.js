/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3의 값을 
 * String 값으로 받으세요?
 */

console.log((2 * 10 / 2 % 3).toString());

console.log('----------');

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate(){
   console.log((2 * 10 / 2 % 3).toString());
}

// calculate();

function calculate(number){
   console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 하며
 * 
 * 실제 입력하는 값은 argument라고 한다.
 * 
 * number는 Parameter이며 넣은 4라는 값은 argument라고 한다.
 */
calculate(4);

console.log('----------');

function multiply(x, y){
   console.log(x * y);
}

multiply(2,4);

function multiply(x, y = 10){
   console.log(x*y);
}

multiply(2, 4);
multiply(2);


/**
 * 반환받기
 * return 받기
 * 
 * 함수 내부의 값을 함수 외부로 받을 수 있다.
 */

function multiply(x, y){
   return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);


/**
 * Arrow 함수
 */
const multiply2 = (x, y) => {
   return x * y;
}
console.log(multiply(3,4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4,5));

const multiply4 = x => x * 2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y} z:${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
   return function (y) {
      return function (z) {
         return `x: ${x} y: ${y} z:${z}`
      }
   }
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = function(x, y){
   return x*y;
}
console.log(multiplyTwo(4,5));

const multiplyThree = function(x,y,z){
   console.log(arguments); //[Arguments] { '0': 4, '1': 5, '2': 6 } 출력 각 x,y,z 순서 확인 가능
   return x * y * z;
}

console.log('----------');
console.log(multiplyThree(4,5,6));

//무한하게 파라미터 받기
const multiplyAll = function(...arguments){
   return Object.values(arguments).reduce((a,b) => a*b,1);
}

console.log(multiplyAll(3,5,6,7,8,9,10));

console.log('----------');

// immediately invoked function
(function(x,y){
   console.log(x*y);
})(5,6)

console.log(typeof multiply);
console.log( multiply instanceof Object); //좌측인 비교하려는 값 .. multiply가 Object인가 확인하는 것 같은 타입인지 확인하는 것
