type A = { name: string };
type B = { age: number };

function a(): void {}

interface Human {
  talk: () => void;
}

const human: Human = {
  talk() {
    return 'abc';
  },
};

declare function forEach(arr: number[], callback: (el: number) => void): void;

let target: number[] = [];
forEach([1, 2, 3], (el) => target.push(el));
