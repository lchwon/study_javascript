/**
 * 
 * Data types
 * 
 * 여섯개의 Primitive Type(원시타입)
 * 한개의 Reference Type(참조타입) || 오브젝트 타입
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) object (객체)
 *    - function (함수)
 *    - array (배열)
 *    - object (객체)
 * 
 */


// `typeof`를 통해서 타입을 알 수 있다.

/**
 * Number 타입
 */
const age = 32;
console.log(typeof age)
// 무한대 값을 지정할 수 있음
const infinity = Infinity;
const ninfinity = -Infinity;
console.log('infinity:', typeof infinity); //Number 타입
console.log('-infinity:', typeof ninfinity); //Number 타입
console.log('----------');

/** 
 * String 타입
 */
const chaeWon =  '이채원';
console.log('chaeWon: ', typeof chaeWon);

//따옴표, 큰따옴표를 사용(출력)하고 싶을 때는 반대로 바꿔가면서 사용하면된다.
const chaeWon2 = '"이"채원';
const chaeWon3 = "'이'채원";
console.log('----------');

/**
 * Template Literal (백틱 ``)
 * 
 * Excaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶으면 두번 입력
 */
const chaeWon4 = '이채원\n입니다.';
console.log(chaeWon4);
const chaeWon5 = '이채원\t입니다.';
console.log(chaeWon5);
const backSlash = '이채원\\입니다.';
console.log(backSlash);
const smallQutoation = '이채원\'입니다.';
console.log(smallQutoation);

//Template Literal (백틱 ``)을 사용하면 Excaping Character보다 쉽게 쓸 수 있다.
const chaeWon6 = ` 이채원 \' "" 
입니다.`
console.log(chaeWon6);
