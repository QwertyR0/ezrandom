# **ezrandom**
**ezrandom** is a simple pseudo random number generator library.

![node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## 📦**Installation**
```bash
npm i @qwertyr0/ezrandom
# or:
npm i git+https://github.com/QwertyR0/ezrandom.git
```

## 👩‍💻**USAGE:**
```js
import ezRandom from "@qwertyr0/ezrandom";

//random numbers:
ezRandom.genInt(1, 3);
//-> 1

ezRandom.genInt(1, 3, 4);
//-> [1, 3, 2, 3]

ezRandom.genFloat(1, 3);
//-> 2.345

// random selection:
ezRandom.selection(["a", "b"], 1);
//-> ["a"]

// probability:
ezRandom.probability(1, 10, 3, 4);
//-> 1.39

// random password:
ezRandom.password({
    passLength: 11
});
//-> naxohnjykom

// Array shuffle:
ezRandom.shuffle([12, 53, 44, 23]);
//-> [44, 12, 23, 53]

// random rgb color value:
ezRandom.ranColor.rgb();
//-> [52, 7, 109]

// random hex color value:
ezRandom.ranColor.hex();
//-> "#a97b30"

/*
 There are more options that are not shown here
 but it's documented with jsdoc in "main.js"
*/
```
## 👔**Maintainer**
>![QwertyR0](https://github.com/QwertyR0.png?size=100)
>---
>**QwertyR0**
    
---

## 🐛**Bugs:**
Create an issue [here](https://github.com/QwertyR0/ezrandom/issues)

# LICENSE: [MIT](./LICENSE)
