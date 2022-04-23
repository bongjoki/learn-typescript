// interface Person2 {
//   name: string;
//   age: number;
// }

type Person2 = {
  name: string;
  age: number;
};

var seho: Person2 = {
  name: 'seho',
  age: 30,
};

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}
