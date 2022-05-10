// # 1. 인터페이스 타입호환
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  // class,type 여도 동일한 결과임
  name: string; // interface,type,class같은 명칭 말고 내부의 속성들을 통해 타입 호환 검사
}

var developer: Developer;
var person: Person;

// person에는 skill속성이 없기 때문에 타입 호환이 되지 않고 error
// developer = person; // error
person = developer; // 타입 호환 O

// # 2. 함수 타입 호환
var add = function (a: number) {
  // ...
};
// add와 파라미터 1개 차이
var sum1 = function (a: number, b: number) {
  // ...
};
var sum2 = function (a: string, b: string) {
  // ...
};
// add에는 b파라미터를 받을 수 없음
// add = sum; // error
sum1 = add; // a가 포함되고 타입이 같기 때문에 타입 호환 O
// sum2 = add; // a가 포함되지만 타입이 다르기 때문에 타입 호환 X

// # 3. 제네릭
interface Empty<T> {
  // ...
}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2; // 내부가 비었기 때문에 타입 호환 O
empty2 = empty1; // 위와 동일

interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

// 내부의 data 타입이 다르기 때문에 타입 호환 X
// notEmpty1 = notEmpty2; // error
// notEmpty2 = notEmpty1; // error
