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
function numOrStr(a: number | string) {
  if (typeof a === 'number') {
    a.toFixed(1);
    console.log(1);
  } else {
    a.charAt(3);
    console.log(a);
  }
}

numOrStr('123');
numOrStr(1);
// interface는 파이프를 사용할 수 없음;
type B = 'Human' | 'Mammal' | 'Animal';
type A = { [key in B]: B };
const aaaa: A = { Human: 'Animal', Mammal: 'Mammal', Animal: 'Mammal' };

function abc(a: number, b?: number, c?: number) {}
abc(1);
abc(1, 2);
abc(1, 2, 3);

//제네릭은 선언할때말고 함수를 쓸때 타입을 정할 수 있도록 해주는 역할
function add<T extends number | string>(x: T, y: T): T;
function add(x: any, y: any) {
  return x + y;
}
add<number>(1, 2);
add(1, 2);
add<string>('1', '2');
add('1', '2');
