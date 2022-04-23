interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: 'seho',
};

// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user);
}

getUser(seho);

// 함수의 구조에 인터페이스 활용
interface Sumfunction {
  (a: number, b: number): number;
}

var sum: Sumfunction;

sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string | boolean;
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0] = 'a';
arr[0] = true;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
obj['cssFile'] = /\.css$/;

Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const bongjo: Developer = {
  name: 'bongjo',
  age: 29,
  language: 'js',
};
