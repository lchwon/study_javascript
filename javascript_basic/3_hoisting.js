/**
 * Hoisting
 */
console.log('이');
console.log('채원');
console.log('----------');

// console.log(name);
// var name = '이채원';
// console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

//위에 출력했을 때 값과 같은 출력 방식
var name;
console.log(name);
name = '이채원';
console.log(name);

/**
 * ★중요☆ 
 *  
 * const와 let은 Hoisting 현상(변수를 선언하기 전 값(undefined)을 가져오는 현상), 버그를 막아주기 때문에 var보다 let, const를 사용해야 한다.
 * undefined로 배정이 되어 정의가 되어 있지만 let, const로 선언했기에 실제 변수에 할당하기 전에 접근할 수 없게되는 것이다.
 * */

