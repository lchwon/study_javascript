/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 값은 copy by value다. (privitive = 원시타입)
 * 2) 객체는 copy by reference다. (reference = 참조타입)
 */

// copy by value
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

console.log('----------');

clone += ' 이채원입니다.';
console.log(original);
console.log(clone); // 여기서는 당연 clone에 '이채원입니다.'를 추가했기에 확인이 가능

console.log('----------');

// copy by reference
let originalObj = {
   name: '이채원',
   local: 'seoul'
}
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('----------');

originalObj['local'] = '경기도'; // originalObj 의 프로퍼티만 변경 했지만.
console.log(originalObj); // { name: '이채원', local: '경기도' }
console.log(cloneObj); //{ name: '이채원', local: '경기도' } 이렇게 출력되는 값이 같다.

console.log('----------');
console.log('----------');

console.log(originalObj === cloneObj); // true를 확인할 수 있다. 이것이 copy by reference다. orginalObj의 값만 변경 했지만 같이 변경되는. true라고 찍힌다.
console.log(original === clone); // false를 확인할 수 있다. 당연 값이 다르기에


console.log('----------');

/**
 * 그렇다고 해서 객체 안의 값(key, value)이 똑같아서 true가 나온다고 생각할 수 있지만 아니다.
 * 
 * Object의 경우에는 primitive와는 다르다. 메모리에 값이 들어가 있지만 변수가 그 메모리를 직접적으로 가리키는게 아니고 
 * 다른 메모리에 그 값을 가르키는 주소가 들어가 있으며 그 값을 가르키는 주소에 변수가 할당된다. 그렇기에 값을 변경하게되면
 * originalObj와 cloneObj의 값이 같이 변하게 되고 당연 값이 들어가 있는 값을 둘다 똑같이 가리키는게 아니기 때문에 
 * 객체 안에 값이 같더라도 각가 메모리를 할당하고 있기에 false가 나온다.
 * 
 * 
 *   originalObj 0x000001 -> ( 0x000003 )
 *      cloneObj 0x000002 -> ( 0x000003 )
 *                           (          )
 *               0x000003 -> (  { name: '이재우', local: '일산'}  )
 * 
 */

originalObj = {
   name : '이재우',
   local : '일산'
}

cloneObj = {
   name : '이재우',
   local : '일산'
}

console.log(originalObj === cloneObj); // 이렇게 Object의 property key, property value의 값들이 같다고해서 같은게 아니란 걸 알 수 있다.

console.log('----------');
console.log('----------');

const jaewoo = {
   name: '이재우',
   local: '일산',
}

const jaewoo2 = jaewoo;

const jaewoo3 = {
   name: '이재우',
   local: '일산',
}

console.log(jaewoo === jaewoo2); // true
console.log(jaewoo === jaewoo3); // false
console.log(jaewoo2 === jaewoo3); // false

console.log('----------');
console.log('----------');

/**
 * Spread Operator
 */
const jaewoo4 = {
   ...jaewoo3,
};
console.log(jaewoo4);

console.log(jaewoo3 === jaewoo4); // false copy by value다. 객체 안의 값은 같지만 당연 메모리 할당이 다르기 때문에

const jaewoo5 ={
   year: '1992', // 이렇게 property를 추가할 수 있다.
   ...jaewoo3,
};

console.log(jaewoo5); // { year: '1992', name: '이재우', local: '일산' }

const jaewoo6 = {
   name: '이채원',
   ...jaewoo3,
}

console.log(jaewoo6); // jaewoo3에는 'name'이 있다. 여기서 순서가 중요한데 name을 만들고 그 위에 jaewoo3의 name 덮어지기 떄문에 jaewoo3의 { name: '이재우', local: '일산' } 값이 출력된다.

const jaewoo7 = {
   ...jaewoo3,
   name: '이채원',
}

console.log(jaewoo7); // 경우에는 { name: '이채원', local: '일산' } 출력이 되는 걸 확인할 수 있다.

console.log('----------');
console.log('----------');

/**
 * Spread Operator의 경우에는 순서가 중요하다.
 * 아래 배열(Array)의 경우에서도 위의 객체(Object)와 같이 확인 할 수 있다.
 */

const  number = [2,3,4,5,6,7,8];
const number3 = ['가','나','다','라'];
const number2 = [
   10,
   ...number,
   12,
   ...number3
]
console.log(number2);


