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
// // interface는 파이프를 사용할 수 없음;
// type B = 'Human' | 'Mammal' | 'Animal';
// type A = { [key in B]: B };
// const aaaa: A = { Human: 'Animal', Mammal: 'Mammal', Animal: 'Mammal' };

// function abc(a: number, b?: number, c?: number) {}
// abc(1);
// abc(1, 2);
// abc(1, 2, 3);

// //제네릭은 선언할때말고 함수를 쓸때 타입을 정할 수 있도록 해주는 역할
// function add<T extends number | string>(x: T, y: T): T;
// function add(x: any, y: any) {
//   return x + y;
// }
// add<number>(1, 2);
// add(1, 2);
// add<string>('1', '2');
// add('1', '2');

// function a<T>() {}
// class B<T>() {}
// interface C<T> {}
// type D<T> = {};
// const e = <T>() => {};

// function add<T extends string>(x: T, y: T): T { return x + y }
// add(1, 2);
// add('1', '2')

interface Arr<T> {
  forEach(callback: (item: T, indext: number) => void): void;
  map<S>(callback: (v: T, i: number) => S): S[];
}

const forEach_a: Arr<number> = [1, 2, 3];

forEach_a.forEach((item, index) => {
  console.log(item, index);
  item.toFixed(1);
});
forEach_a.forEach((item) => {
  console.log(item);
  return '3';
});

const forEach_b: Arr<string> = ['1', '2', '3'];
forEach_b.forEach((item) => {
  console.log(item);
  item.charAt(3);
});

const map_a: Arr<number> = [1, 2, 3];

const map_b = map_a.map((v, i) => v + 1);
const map_c = map_a.map((v, i) => v.toString());
const map_d = map_a.map((v, i) => v % 2 === 0);

const map_e: Arr<string> = ['1', '2', '3'];
const map_f = map_e.map((v) => +v);
