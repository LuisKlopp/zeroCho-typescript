'use strict';
// type A = { name: string };
// type B = { age: number };
const forEach_a = [1, 2, 3];
forEach_a.forEach((item, index) => {
  console.log(item, index);
  item.toFixed(1);
});
forEach_a.forEach((item) => {
  console.log(item);
  return '3';
});
const forEach_b = ['1', '2', '3'];
forEach_b.forEach((item) => {
  console.log(item);
  item.charAt(3);
});
const map_a = [1, 2, 3];
const map_b = map_a.map((v, i) => v + 1);
const map_c = map_a.map((v, i) => v.toString());
const map_d = map_a.map((v, i) => v % 2 === 0);
const map_e = ['1', '2', '3'];
const map_f = map_e.map((v) => +v);

console.log(map_a, map_b, map_c, map_d, map_e, map_f);
