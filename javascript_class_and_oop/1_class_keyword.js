/**
 * Class Keyword
 *  - 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀
 *  -> 정보를 일반화해서 정리하는 방법이다.
 */

// 대문자로 시작해 class로 인지할 수 있도록 만든다
 class IdolModel{ 
   // 아래 property를 정의하는게 javascript에서는 option이다. 해도되고 안 해도 된다.
   name; 
   year;

   constructor(name, year){
      this.name = name; // 여기서 this가 붙은 this.name, this.year 은  현재의 인스턴스 위의 name, year를 가르키는 것이며 name, year은 외부에서 받는 값을 말한다
      this.year = year;
   }

   sayName(){
      return `안녕하세요 ${this.name}입니다.`
   }
 } 

 // constructor - 생성자

 const chaeWon = new IdolModel('이채원', 1992);
 console.log(chaeWon);
 const gaeul = new IdolModel('가을', 2002);
 console.log(gaeul);
 const ray = new IdolModel('레이', 2004);
 console.log(ray);
 const wonYoung = new IdolModel('원영', 2004);
 console.log(wonYoung);
 const liz = new IdolModel('리즈', 2004);
 console.log(liz);
 const eseo = new IdolModel('이서', 2007);
 console.log(eseo);

 console.log(chaeWon.name);
 console.log(chaeWon.year);

 console.log(chaeWon.sayName());
 console.log(wonYoung.sayName());


 console.log(typeof IdolModel); // class는 함수(function)로 인식한다.
 console.log(typeof chaeWon); // class로 생성한 인스턴스는 객체(object)다.