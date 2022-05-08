interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' };
}

var tony = introduce();
// console.log(tony.skill); // union type 때문에 공통 속성인 tony.name만 접근 가능

if ((tony as Developer).skill) {
  // tony가 Developer라고 단언하고 skill이 있을 경우
  const { skill } = tony as Developer;
  console.log(skill);
}
if ((tony as Person).age) {
  // tony가 Person라고 단언하고 age이 있을 경우
  const { age } = tony as Person;
  console.log(age);
}
// => # 단점 반복되는 부분이 많고 가독성이 떨어지게 됨
// 여기까지 타입 가드 써야하는 이유

// 타입 가드 정의
function isDevloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDevloper(tony)) {
  console.log(tony.skill); // 타입가드 덕분에 공통 속성아닌 skill 접근 가능
}
if (!isDevloper(tony)) {
  console.log(tony.age); // 타입 추론에 의하여 isDeveloper false인 경우 Person으로 추론
}
