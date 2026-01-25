/**
 * Static Keyword
 */

class IdolModel{
  name;
  year;
  static localName = '덕이동';

  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  static returnLocalName(){
    return '덕이동 태영아파트';
  }
}

const chaewon = new IdolModel('이채원', 1992);
console.log(chaewon);

console.log(IdolModel.localName); //static은 class에 귀속된다. 인스턴트 귀속X
console.log(IdolModel.returnLocalName()); //함수(function)반환도 가능


console.log('------- factory constructor ------')
/**
 * Factory Constructor
 */

class localInfo{
  name;
  address;

  constructor(name, address){
    this.name = name;
    this.address = address;
  }

  static fromObject(object){ //Object로부터 이 class의 인스턴스를 만들겠다.
    return new localInfo( 
      //object로 부터 받아와서 name, address을 받아올 수 있다.
      object.name,
      object.address,
    )
  }
 
  static fromList(list){
    return new localInfo(
      list[0],
      list[1],
    )
  }
}

const local1 = new localInfo('일산', '덕이동');
console.log(local1);

const duc = localInfo.fromObject({
  name: '덕이동',
  address: 12345,
})
console.log(duc);

const duc2 = localInfo.fromList(
  [
    '덕이동',
    1234225,
  ]
)
console.log(duc2);
