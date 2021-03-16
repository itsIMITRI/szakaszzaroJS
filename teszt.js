//1.
//változó, szám
let szam = 1;
//konstans
const konstans = 2;
//string
const string = 'Szia';
//tömb, lehet benne szám és string is
const tomb = [1, 2, 3, 4, 6, 77, 773, 12];

//2.
//Const és let közötti különbség: Let változó, változhat az értéke, kezdő érték nem muszáj
//const az konstans, nem változhat az érkéte, muszáj neki kezdő értéket adni
let eredmeny = 0;
eredmeny = szam + konstans; //ha constként hoznám létre az eredmenyt nem futa le a program.

//4.

const containsElement = (src, num) => {
  for (let i = 0; i < src.length; i++) {
    if (src[i] === num) {
      return 'Megtalálható benne';
    }
  }
  return 'Nem található meg benne';
};
console.log(containsElement(tomb, 4));
console.log(containsElement(tomb, 88));

//5.
const humans = [
  { name: 'feri', age: 25 },
  { name: 'máté', age: 24 },
  { name: 'józsi', age: 33 },
];

const oldest = (src) => {
  let max = src[0];
  for (let i = 0; i < src.length; i++) {
    if (src[i].age > max.age) {
      max = src[i];
    }
  }
  return max.name;
};

console.log(oldest(humans));

//6.
const arr1 = [1, 3, 5, 7, 8, 9];
const arr2 = [4, 8, 2, 7, 10];
const metszet = [];
const metszetfg = (src1, src2) => {
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) {
      if (src1[i] === src2[j]) {
        metszet.push(src1[i]);
      }
    }
  }
  return metszet;
};

console.log(arr1);
console.log(arr2);
metszetfg(arr1, arr2);
console.log(metszet);

//7.
const muvelet = require('./modulok');

console.log(muvelet.szorzas(2, 5));

//8.
const readline = require('readline-sync');
const szam1 = readline.question('Add meg az első számot!');
const szam2 = readline.question('Add meg az második számot!');

const generate2d = (n, m) => {
  let array = new Array(n);
  for (let i = 0; i < n; i++) {
    array[i] = new Array(m);
  }
  return array;
};

const feltolt = (array) => {};
console.log(generate2d(szam1, szam2));
