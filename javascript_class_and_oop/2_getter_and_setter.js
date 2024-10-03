/**
 * Getter and Setter
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반호나할 때
     */
    get nameAndYear(){
        return `${this.name} - ${this.year}`
    }

    /**
     * 값을 변경해주는? 
     */
    set setName(name){ //setter의 경우에는 무조건 매개변수(parameter)값을 1개를 받아야한다.
        this.name = name;
    }
}

const chaeWon = new IdolModel('이채원', 1992);
console.log(chaeWon);
console.log(chaeWon.nameAndYear);

chaeWon.setName = '이재우';
console.log(chaeWon);


class IdolModel2{
    /**
     * private?
     * - 실제로 값은 저장하고 있지만 외부에 엑세스하지 못하는 값을 private
     */
    #name;  // 앞에 '#'을 붙여서 사용함 , es7에서부터 사용 가능한 문법
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

const chaeWon2 = new IdolModel2('이채원', 1992);
console.log(chaeWon2); //값을 출력할 경우 #name의 값은 엑세스하지 못 한다.
console.log(chaeWon2.name); //getter을 이용하면 private값을 가져올 수 있다.

chaeWon2.name = '이재우입니다.';
console.log(chaeWon2.name);