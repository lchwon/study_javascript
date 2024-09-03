/**
 * object 객체
 */

// key value
let chaewon =  {
  name: '이채원', //프로퍼티 키 : name , 프로퍼티 값 : 이채원
  age: 32,
  dance: function(){
    return `${this.name}이 춤을 춥니다.` // 여기서 this는 함수에 정의되어 있는 object(객체)를 가르킨다.

  }
}

console.log(chaewon); //object의 값
console.log(chaewon.name); //이채원
console.log(chaewon['name']); //이채원

const key = 'name';
console.log(chaewon[key]); // key라는 변수에 name이 들어 있어 이채원이라는 값을 확인할 수 있다.

console.log(chaewon.dance()); //함수는 실행을 해줘야하기 때문에 ()을 추가 

console.log('----------');

// 각각 변수로 선언하여 만들 수 있다.
const nameKey = 'name';
const nameValue = '이채원';
const localKey = 'local';
const localValue = 'seoul';

const chaewon2 = {
  [nameKey]: nameValue, // key값의 경우에는 []를 사용해서 만들어 준다.
  [localKey]: localValue,
  dance: function(){
    return `${this.name}이 맞나요?` //메소드 또한 가능하다.
  }
}

console.log(chaewon2);
console.log(chaewon2.dance());

// key의 value값을 변경할 수 있다.
chaewon2['local'] = '경기도';
console.log(chaewon2);

// 새로운 key와 value값을 추가할 수 있다.
chaewon2['englishName'] = 'Lee chae won';
console.log(chaewon2);

// 프로퍼티도 삭제가 가능하다.
delete chaewon2['englishName'];
console.log(chaewon2);

console.log('----------');

/**
 * const로 선언한 객체(Object)의 특징
 *
 * 1) const로 선언할 경우 객체 자체는 변경할 수 없다.
 * 2) 객체 안에 프로퍼티나 메서드는 변경할 수 있다.
 */
const leeChaeWon = {
  name: '이채원',
  local: '제주도'
}

console.log(leeChaeWon);
//leeChaeWon = {}; 이렇게 객체 자체를 변경하게 된다면 오류가 난다. 

leeChaeWon['local'] = '경기도 고양시';
console.log(leeChaeWon); //객체 안의 프로퍼티나 메서드 변경은 가능하다.

console.log('----------');

/**
 * 모든 키(key)값 가져오기
 */
console.log(Object.keys(leeChaeWon)); // 선언한 객체의 모든 key값을 가져올 수 있다.

/**
 * 모든 value값 가져오기
 */
console.log(Object.values(leeChaeWon)); //선언한 객체의 모든 value값을 가져올 수 있다.


console.log('----------');


const name = '이채원';
const chaewon3 = {
  name // key값과 변수(name)의 이름이 같으면 하나만 입력할 수 있다. name: name과 같다.
};
console.log(chaewon3);