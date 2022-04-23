var seho: string | number | boolean;
function logMessage(value: string | number): void {
  if (typeof value === 'number') {
    console.log(value.toLocaleString());
  }
  if (typeof value === 'string') {
    console.log(value.length);
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeoneUnion(someone: Developer | Person) {
  // Union
  // 공통된 속성만 접근 가능
  someone.name;
  // 공통되지 않은 속성은 오류
  someone.skill;
  someone.age;
  // 접근하려고 할 시 타입 가드 처리 필요
}

function askSomeoneIntersection(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}

var seho: string | number | boolean;
var capt: string & number & boolean;
