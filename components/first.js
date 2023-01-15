"use strict";
const a = 5;
const b = '5';
const c = true;
const d = undefined;
const e = null;
const f = 5;
// function add(x: number, y: number): number {
//   return x + y;
// }
// type Add = (x: number, y: number) => number;
// const add: Add = (x, y) => x + y;
// interface Add {
//   (x: number, y: number): number;
// }
// const add: Add = (x, y) => x + y;
const obj = { lat: 37.5, lon: 127.5 };
const arr = ['123', '456'];
const arr2 = [123, 456];
const arr3 = [123, 456, 'hello'];
// 빈배열 선언할때는 타이핑이 꼭 필요함
try {
    const array = [];
    array.push('hello');
}
catch (error) {
    error;
}
const head = document.querySelector('#head');
//head 는 Element 혹은 null이다
//뒤에 느낌표를 붙이면 null이 아니라고 확신할 수 있지만 느낌표 쓰는 건 좋은방법아님
if (head) {
    head.innerHTML = 'hello';
}
// 이런식으로 쓰자
