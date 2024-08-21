/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈 addition
 * 2) 뺄셈 subtraction
 * 3) 곱셈 multiplication
 * 4) 나눗셈 division
 * 5) 나머지
 */
console.log(10 + 10); //덧셈
console.log(10 - 10); //뻴셈
console.log(10 * 10); //곱셈
console.log(10 / 10); //나눗셈
console.log(10 % 10); //나머지
console.log(10 % 3); //나머지
console.log('----------');

console.log(10*(10 + 10));

/**
 * 증가와 감소
 */
let number = 1;

number ++;
console.log(number); //2

number --;
console.log(number); //1
console.log('----------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number); // '1, 2'가 출력 ++가 변수에 뒤에 있기 때문에 먼저 result로 값이 옮겨지고 그 이후에 ++ 연산자가 실행된다.

result = number --;
console.log(result,number) // '2, 1' 출력

result = ++ number;
console.log(result, number); // '2, 2'가 출력 ++가 변수의 앞에 있기 때문에

result = -- number;
console.log(result, number); // '1, 1'

/**
 *  숫자 타입이 아닌 타입에 +, - 사용하면??
 */
let sample = '99';

console.log(+sample);
console.log(typeof +sample); // Number 출력 -> '+'가 붙음으로써 Number로 변경 그렇다고 값이 변하지는 않음

console.log(sample);
console.log(typeof sample); // String

sample = true;
console.log(+sample); //1 출력 true는 1과 같다라고 볼 수 있다.
console.log(typeof +sample); // Number 출력

sample = false;
console.log(+sample); // 0 출력 false는 0과 같다라고 볼 수 있다.
console.log(typeof +sample); // Number 출력

sample = '이채원';
console.log(+sample); // NaN 출력 -> Not a Number '숫자가 아니다.'

sample = '99';
console.log(-sample);
console.log(typeof -sample);
console.log('----------');

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10; // number = number + 10
console.log(number); //110 출력

number -= 10; // number = number - 10
console.log(number); //100 출력

number *= 10; // number = number * 10
console.log(number); //1000 출력

number /= 10; // number = number / 10
console.log(number); //100 출력

number %= 10; // number = number % 10
console.log(number); //나머지 0 출력

console.log('----------');

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */
// 1) 값의 비교
console.log( 5 == 5); // true 출력
console.log( 5 == '5'); // true 출력
console.log( 0 == ''); // true 출력
console.log( true == 1); // true 출력
console.log( false == 0); // true 출력
console.log( true == '1'); // true 출력

// 2) 값과 타입의 비교
console.log( 5 === 5); // true 출력
console.log( 5 === '5'); // false 출력
console.log( 0 === ''); // false 출력
console.log( true === 1); // false 출력
console.log( false === 0); // false 출력
console.log( true === '1'); // false 출력

console.log('----------');

console.log( 5 != 5); // false 출력
console.log( 5 != '5'); // false 출력
console.log( 0 != ''); // false 출력
console.log( true != 1); // false 출력
console.log( false != 0); // false 출력
console.log( true != '1'); // false 출력

console.log( 5 !== 5); // false 출력
console.log( 5 !== '5'); // true 출력
console.log( 0 !== ''); // true 출력
console.log( true !== 1); // true 출력
console.log( false !== 0); // true 출력
console.log( true !== '1'); // true 출력

console.log('----------');

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 0);
console.log(100 < 0);
console.log(100 <= 0);
console.log(100 >= 0);

console.log('----------');

/**
 * 삼항 조건 연산자(ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다': '10이 0보다 작다')

console.log('----------');
/**
 * 논리 연산자
 * 
 * 1) && (and)
 * 2) || (or)
 */

// && 조건은 모두 'true'여야 true를 반환한다.
console.log( true && true); // true
console.log( true && false); // false
console.log( false && true); // false
console.log( false && false); // false (둘다 틀리기에(?) false)

// ||는 하나만 true여도 true를 반환
console.log( true || true); // true
console.log( true || false); // true
console.log( false || true); // true
console.log( false || false); // false (둘다 틀리기에 false)

console.log('----------');

console.log( 10 > 1 && 20 > 2); // true
console.log( 10 < 1 && 20 > 2); // false
console.log( 10 < 1 && 20 < 2); // false

console.log( 10 > 1 || 20 > 2); // true
console.log( 10 < 1 || 20 > 2); // true
console.log( 10 < 1 && 20 < 2); // false

console.log('----------');

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용할 때 좌측이 true면 우측 값 반환
 * &&를 사용할 때 좌측이 false면 좌측 값 반환
 * ||를 사용할 때 좌측이 true면 좌측 값 반환
 * ||를 사용할 때 좌측이 false면 우측 값 반환
 */

console.log( true || '이채원'); // ||좌측이 true 좌측 값 반환 -> true 출력
console.log( false || '이채원'); // ||좌측이 false 우측 값 반환 -> 이채원 출력
console.log( false && '이채원'); // &&좌측이 false 좌측 값 반환 -> 이채원 출력
console.log( true && '이채원'); // &&좌측이 true 우측 값 반환 -> true 출력

console.log(true && true && '이채원') // 1) true && true 비교 후 좌측이 true이기에 우측 출력 2) true && '이채원' 좌측 true 우측 출력 -> 이채원 출력
console.log(true && false && '이채원') // 1) true && false 비교 후 좌측이 true이기에 우측 출력 2) fasle && '이채원' 좌측 false 좌측 출력 -> false 출력

console.log('----------');

/**
 * 지수 연산자
 */
console.log(2 ** 2); // 4
console.lho(10 ** 3) // 1000

console.log('----------');
/**
 * null 연산자
 */
let name; //undefined
console.log(name); //undefined 출력

// ?? 좌측 값이 null이거나 undefined일 때 오른쪽 값을 반환하여라 
name = name ?? '이채원'; // 이채원 저장
console.log(name); // 이채원 출력

name = name ?? '변경'
console.log(name) // 이미 name은 null, undefined가 아니기에 이채원 출력

let name2;
name2 ??= '이채원'; // name2 = name2 ?? '이채원'
console.log(name2);