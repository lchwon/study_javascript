/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

//암묵적
// 숫자에 문자를 더하면 String type이 된다.
let test = age + '';
console.log(typeof test, test);

// 숫자에 문자를 더하면 982가 나온다
console.log('98' + 2); 
console.log('98' * 2); // 196
console.log('98' - 2); // 96

console.log('----------');

/**
 * 명시적 변환 몇가지
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입을 변환
console.log(typeof parseInt('0'), parseInt('0')); //정수를 다룰 때
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); //실수를 다룰 때
console.log(typeof +'1', +'1');

/**
 * Boolean 타입으로 변환
 */
//string값이 있냐 없냐에 따라서 true, false로 나눠진다.
console.log(!!'어떤 값이 있더라도 값이 있으면 ture')

/**
 * 0, '', false, undefined, null 의 경우는 false , 값이 있을 경우는 ture라고 생각하는게 좋다. object{}, array[]는 Boolean 값으로
 * 변환하면 무조건 true가 나온다 값이 있는 없든 
 * 
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두  false를 반환
 *  */ 
