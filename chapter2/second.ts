// type World = 'world' | 'hello';
// const aa: World = 'world';

// type Greeting = `hello ${World}`;
// const bb: Greeting = 'hello hello';

// const tuple: [string, number] = ['1', 1];

// tuple[2] = 'hello2';
// tuple.push('hello');

// const ODirection = {
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Right: 3,
// } as const;

// const typeObj = { a: '123', b: 'hello', c: 'world' } as const;
// type Key = typeof typeObj[keyof typeof typeObj];

// type Direction = typeof ODirection[keyof typeof ODirection];
// function run(dir: Direction) {}

// run(ODirection.Right);

// function add(x: string | number, y: string | number): string | number {
//   return x + y;
// }
// add(1, 2);
// add('1', '2');
// add(1, '2');

// type A = {
//   a: string;
// };
// type B = {
//   b: string;
// };

// const aa: A | B = { a: 'hello', b: 'world' };
// const bb: A & B = { a: 'hello', b: 'world' };
