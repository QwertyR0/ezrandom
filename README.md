# **ezrandom**
**ezrandom** is a simple random number generator library.

![node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
)

## 📦**Installation**
You can use [npm](https://www.npmjs.com) to install:
```bash
npm i git+https://github.com/QwertyR0/ezrandom.git
```

## 👩‍💻**USAGE:**
```js
const ezRandom = require('ezrandom');

//random integer:
ezRandom.genInt(1, 3);
//-> 2
ezRandom.genInt(1, 3, 4);
//-> [1, 3, 2, 3]
ezRandom.genInt(1, 3, 4, {useRandomorg: true});
//-> [3, 3 ,1, 2]
// fetches from https://random.org/integers/

//random selection:
ezRandom.selection(["a", "b"], 1);
//-> ["a"]

// possibility:
ezRandom.possibility(1, 10, 3, 4);
//-> 1.39

//random password:
ezRandom.password({
    passLength: 11
});
//-> naxohnjykom
// I will Add More Options To Password Generation!

//random rgb color value:
ezRandom.ranColor.rgb();
//-> [ 52, 7, 109 ]

//random hex color value:
ezRandom.ranColor.hex();
//-> #a97b30
```
## 🧙‍♂️**Maintainer**
>![QwertyR0](https://github.com/QwertyR0.png?size=100)
>---
>**QwertyR0**
    
---

## 🚧**Todo:**
- Add more support for https://random.org/
- Make .password() better

## 🐛**Bugs:**
Create an issue [here](https://github.com/QwertyR0/ezrandom/issues)

## 📱**Contact:**
Discord: Qwerty.R#9850

# LICENSE: [MIT](https://choosealicense.com/licenses/mit/)
