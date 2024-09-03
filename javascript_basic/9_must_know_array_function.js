/**
 * Array Functions
 */

let iveMembers = [ '안유', '가을', '레이', '장원', '리즈', '이서',];

console.log(iveMembers);

// push() - 새로운 값을 맨 끝에다 추가하고 새로운 길이 값을 추가하는 것
iveMembers.push('채원');
console.log(iveMembers.push());
console.log(iveMembers);

console.log('----------');

// pop() - 마지막 값을 삭제 후 반환하는 것
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('----------');

// shift() - 첫 번째 값을 반환 받고 값이 삭제된다.
console.log(iveMembers.shift());
console.log(iveMembers);

console.log('----------');

// unshift() - length 값을 받고 첫 번째에 값을 넣어준다.
console.log(iveMembers.unshift('두 번째 안유'));
console.log(iveMembers);

console.log('----------');

// splice() - 첫 번째는 index의 몇 번째 부터 할건지, 두 번째는 그 index 부터 몇개까지 지울 것인지 
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

console.log('----------');
console.log('----------');

iveMembers = [ '안유', '가을', '레이', '장원', '리즈', '이서',];

console.log(iveMembers); 

// concat() - push()와 비슷하지마 새로운 array를 만들어서 반환한다.
console.log(iveMembers.concat('이채원'));

console.log(iveMembers); //변경이 안 된걸 확인할 수 있다.

// slice() - splice()와 비슷하지만 원래 array가 변경이 안됨
// 두 번째에 넣는 값은 몇번 index까지 삭제할지 적는데 삭제하고 싶은 index +1을 해야한다.
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

console.log('----------');

// spread operator - list 벗겨내서 상위 리스트에 펼쳐서 만들어 줌
let iveMembers2 = [
   ...iveMembers,
]

console.log(iveMembers2);

console.log('----------');

// join() - 모든 값을 String으로 엮을 때 사용
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort() - 오름차순 정렬 (ㄱ ~ , 1 ~ , a ~)
iveMembers.sort();
console.log(iveMembers);

// 오름차순을 반대로 정렬
console.log(iveMembers.reverse());

let number = [ 1, 9, 7, 5, 3];

console.log(number);

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면(뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면(앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
number.sort((a, b) => {
   return a > b ? 1 : -1;
})
console.log(number)

number.sort((a, b) => a > b ? -1 : 1);
console.log(number);

// map() - 모든 값을 순회하고 반환된 값을 반환한다. array를 변경하는데 사용하는 함수다. / 원래의 array를 반환하지 않고 새로운 array를 반환
console.log('----------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
   if(x === '이서'){
      return `테스트:${x}`;
   } else {
      return x;
   }
}));

console.log(iveMembers);

// filter() - true를 반환하면 킵 false면 킵하지 않음
number = [1, 8, 7, 6, 3]

console.log(number.filter((x) => x % 2 ===0)); // true인 8,6 반환

// find() - 가장 첫 번째에 해당되는 값을 반환
console.log(number.find((x) => x % 2 === 0)); // 가장 첫 번째인 8을 반환

// findIndex() - find()와 값지만 index를 반환한다,
console.log(number.findIndex((x) => x % 2 === 0)); // 8이지만 인덱스 값인 1을 반환

// reduce()
/**
 * 1. 초기값인 '0'이 p에 입력
 * 2. number array의 첫 번째 값인 '1'이 n에 입력
 * 3. p + n 즉, 0 + 1의 결과값인 '1'이 반환된다.
 * 4. 3에서 반환한 값'1'이 p에 입력
 * 5. array의 두 번째 값인 8이 n에 입력
 * 6. p + n 즉, 1 + 8의 결과값인 9가 반환
 * 7. 6에서 반환한 값'9'가 p에 입력
 * 8. number 리스트의 모든 값들을 모두 순회할 때까지 반복하며 모든 값을 더한 25가 반환된다.
 * 
 */
console.log(number.reduce((p, n) => p + n, 0)); 
//        순서는           1  2       3     초기값은 0
//                        4  5       6
//                        .... 