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

// 띄어쓰기 방식
const chaeWon7 = '이채원';
console.log(chaeWon7 + ' 입니다.'); 
//Template Literal을 사용하면 더 편리하게 사용이 가능하다.
console.log(`${chaeWon7} 입니다.`);
console.log('----------');

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('----------');

/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 떄
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */
let noInit;
console.log(noInit); //값 -> undefined
console.log(typeof noInit); //타입 -> undefined

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때 사용된다.
 */
let init = null;
console.log(init); //값 -> null
console.log(typeof init); // 타입 -> object (오류임 하지만 레거시 코드로 인해 수정을 못 함 원래는 null이 맞음)
console.log('----------');

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할때 사용
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용
 */
const test1 = '1';
const test2 = '1';
console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2); //어떤 값을 'Symbol'에 넣더라도 값은 보존이 되지만 무조건 유일무이한 값이 되기에 'false'로 찍힌다.
console.log('----------');

/**
 * Object 타입
 * 
 * Map
 * 키:벨류의 쌍으로 이루어짐
 * key:value
 */
const dictionary = {
   red: '빨간색',
   orange: '주황색',
   yellow: '노란색',
};
console.log(dictionary);
console.log(dictionary['red']);
console.log(typeof dictionary);
console.log('----------');

/**
 * Array타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입
 */
const fruit = [
   '사과', // 0 index
   '딸기', // 1 index ..
   '배', 
   '수박', 
   '포도' // 4 index
];
console.log(fruit);

/**
 * index
 * 
 * 0부터 시작해서 1씩 올라감
 */
console.log(fruit[0]); // 0번째 index의 값

//array에 들어가 있는 값을 변경할 수 있다.
fruit[0] = '이채원';
console.log(fruit); // [ '이채원', '딸기', '배', '수박', '포도' ]
console.log(typeof fruit); //object 타입

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시한다.
 *                  예를들어 'C언어'
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다.
 *                  예를들어 'Javascript'가 'dynamic typing'다.
 */