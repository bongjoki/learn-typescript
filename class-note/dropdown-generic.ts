// # 1. Union 타입을 이용한 방법의 단점 -> 매번 인터페이스를 추가해줘야함

// interface Email {
//   value: string;
//   selected: boolean;
// }

// const emails: Email[] = [
//   { value: 'naver.com', selected: true },
//   { value: 'gmail.com', selected: false },
//   { value: 'hanmail.net', selected: false },
// ];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// const numberOfProducts: ProductNumber[] = [
//   { value: 1, selected: true },
//   { value: 2, selected: false },
//   { value: 3, selected: false },
// ];

// function createDropdownItem(item: Email | ProductNumber) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// emails.forEach(function (email) {
//   const item = createDropdownItem(email);
//   const selectTag = document.querySelector('#email-dropdown');
//   selectTag.appendChild(item);
// });

// numberOfProducts.forEach(function (product) {
//   const item = createDropdownItem(product);
//   const selectTag = document.querySelector('#product-dropdown');
//   selectTag.appendChild(item);
// });

// // # 2. 제네릭을 이용한 인터페이스
// interface DropdownItem<T> {
//   value: T;
//   selected: boolean;
// }

// const emails: DropdownItem<string>[] = [
//   { value: 'naver.com', selected: true },
//   { value: 'gmail.com', selected: false },
//   { value: 'hanmail.net', selected: false },
// ];

// const numberOfProducts: DropdownItem<number>[] = [
//   { value: 1, selected: true },
//   { value: 2, selected: false },
//   { value: 3, selected: false },
// ];

// function createDropdownItem<T>(item: DropdownItem<T>) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// emails.forEach(function (email) {
//   const item = createDropdownItem<string>(email);
//   const selectTag = document.querySelector('#email-dropdown');
//   selectTag.appendChild(item);
// });

// numberOfProducts.forEach(function (product) {
//   const item = createDropdownItem<number>(product);
//   const selectTag = document.querySelector('#product-dropdown');
//   selectTag.appendChild(item);
// });

// 제네릭의 타입 제한

// function logTextLegnth<T>(text: T[]): T[] {
//   console.log(text.length);
//   return text;
// }

// logTextLegnth(['hi', 'abc']);

// 제네릭의 타입 제한 2 - 정의된 타입 이용하기

// interface LegthType {
//   length: number;
// }

// function logTextLength<T extends LegthType>(text: T): T {
//   text.length;
//   return text;
// }

// logTextLength('abc');
// logTextLength({ length: 10 });

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption('a');
getShoppingItemOption('name');
