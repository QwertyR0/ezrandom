# ezrandom
const ezrandom is a simple random number generator.

```js
const ezRandom = require('ezrandom');

//random int:
ezRandom.genInt(1, 3);
//-> 2

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

```

# LICENSE: MIT
