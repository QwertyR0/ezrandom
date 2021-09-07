module.exports = {
    
    /**
        * @param {number} min
        * @param {number} max
    */

    genInt: (min, max) => {
        if(typeof(min) !== 'number') throw new ReferenceError("\"min\" Must be a Number!");
        if(typeof(max) !== 'number') throw new ReferenceError("\"max\" Must be a Number!");
        return Math.floor(Math.random() * max) + min;
    },

    /**
        * @param {array} array
        * @param {number} amount
    */

    selection: (array, amount) => {
        if(array.constructor !== Array) throw new ReferenceError("Argument must be an Array");
        if(typeof(amount) !== 'number') throw new ReferenceError("\"amount\" Must be a Number!");
        var selections = [];
        amount--;
        for (var i = 0; i <= amount; i++){
            selections.push(array[Math.floor(Math.random() * array.length) + 0]);
        }
        return selections;
    },

    /**
        * @param {number} min
        * @param {number} max
        * @param {number} number
        * @param {number} times
    */

    possibility: (min, max, number, times) => {
        if(typeof(min) !== 'number') throw new ReferenceError("\"min\" Must be a Number!");
        if(typeof(max) !== 'number') throw new ReferenceError("\"max\" Must be a Number!");
        if(typeof(number) !== 'number') throw new ReferenceError("\"number\" Must be a Number!");
        if(typeof(times) !== 'number') throw new ReferenceError("\"times\" Must be a Number!");
        var randomP = 0;
        for(var i = 0; i <= times; i++){
            if(Math.floor(Math.random() * max) + min === number) randomP += 1;
        }
        return randomP / times
    },

    password: (options) => {
        if(options.constructor !== Object) throw new ReferenceError("The 1st Argument must be a \"object\"");
        if(typeof(options.passLength) !== "number") throw new ReferenceError("pasLength Argument must be a \"number\"");
    options = {
        passLength: options.passLength || 10,
    }

    var abc = "abcdefghijklmnopqrstuvwxyz";
    /*
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
    */
    var result = "";
    for(var i = 0; i <= options.passLength; i++){
        //let randomPut = Math.floor(Math.random() * 4) + 1;
        //if(randomPut === 1){
            result += abc.charAt(Math.floor(Math.random() * abc.length) + 0);
        //}
    }
    return result
    },
    ranColor: {
        hex: () => {

        },
        rgb: () => {
            
        }
    }
}