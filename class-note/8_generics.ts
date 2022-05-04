// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10) //숫자 10;
// logText('text') // 문자열 text
// logText([1, 2]) // 배열 [1,2]

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>('하이');

// function logText(text: string) {
//   console.log(text);
//   text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// logText('a'); // 이런식으로 타입에 따라서 함수를 만들면
// logNumber(10);// 프로젝트 방대해지고 중복코드 증가

// function logText(text: string | number) {
// 문제점1 string과 number의 교집합 함수에만 접근 가능
// console.log(text);
// return text;
// }

// const a = logText('a');
//a.split() error 발생 반환값 또한 string과 number의 교집합 함수에만 접근 가능
// logText(10);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const a = logText<string>('a');
a.charAt(1); //string 함수 접근 가능
logText<number>(10);
const b = logText<boolean>(true);

//인터페이스에 제네릭 선언하는 방법
// 1. 제네릭 사용 X
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// const obj: Dropdown = { value: '12', selected: false };
// 2. 제네릭 사용
interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const objStr: Dropdown<string> = { value: 'abc', selected: false };
const objNum: Dropdown<number> = { value: 123, selected: false };
