// # 타입 추론 기본 1

var a; // a : any
// 변수 할당 안할 시 기본적으로 any로 타입추론 되어 있음

// 값을 넣을 시 넣은 값으로 타입 추론
var b = 10;
function getA(a = 1) {
  // a : number
  var c = 'hi'; // c : string
  return a + c; // 1 + 'hi' = '1hi' -> string
}

// # 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: Dropdown<string> = {
//   value: 'abc', // <T>에 들어간 타입으로 추론
//   title: 'hello',
// };

// # 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}

// 상속 받은 인터페이스에 타입 부여 가능
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedDropdown: DetailedDropdown<string> = {
  title: 'abc',
  description: 'cd',
  value: 'a', // <K>에 들어간 타입으로 추론
  tag: 'a', // 위와 동일
};

// Best Common Type (about 타입 추론 알고리즘)

var arr1 = [1, 2, 3]; // number
var arr2 = [1, 2, false]; // number | boolean
var arr3 = [1, 2, false, 'a']; // number | boolean | string
