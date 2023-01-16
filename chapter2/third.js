"use strict";
// type A = { name: string };
// type B = { age: number };
// function a(): void {}
// interface Human {
//   talk: () => void;
// }
// const human: Human = {
//   talk() {
//     return 'abc';
//   },
// };
// declare function forEach(arr: number[], callback: (el: number) => void): void;
// let target: number[] = [];
// forEach([1, 2, 3], (el) => target.push(el));
// function numOrStr(a: number | string) {
//   if (typeof a === 'number') {
//     a.toFixed(1);
//     console.log(1);
//   } else {
//     a.charAt(3);
//     console.log(a);
//   }
// }
// numOrStr('123');
// numOrStr(1);
function numOrStr(a) {
    if (typeof a === 'number') {
        a.toFixed(1);
        console.log(1);
    }
    else {
        a.charAt(3);
        console.log(a);
    }
}
numOrStr('123');
numOrStr(1);
const aaaa = { Human: 'Animal', Mammal: 'Mammal', Animal: 'Mammal' };
function abc(a, b, c) { }
abc(1);
abc(1, 2);
abc(1, 2, 3);
function add(x, y) {
    return x + y;
}
add(1, 2);
add(1, 2);
add('1', '2');
add('1', '2');
