// 타입 단언(type assertion)

var a; // a : any
a = 20;
a = 'b';
var b = a; // typescript가 정의 b : any
var c = a as string; // 개발자가 직접 정의 c : string

// DOM API 조작
// <div id="app">hi</div>;
var div1 = document.querySelector('#app'); // div1 : element
var div2 = document.querySelector('div'); // div2 : HTMLDivElement
var div3 = document.querySelector('#app') as HTMLDivElement; // div3 : HTMLDivElement
