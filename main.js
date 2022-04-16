// Ezrandom
const axios = require('axios');

/* TODO:
    - Add times to password
    - Fix bugs
*/

module.exports = {
    
    /**
        * @param {number} min
        * @param {number} max
        * @param {number} time
        * @param {object} options
    */

    genInt: async(min, max, time, options) => {
        time = (time == null || time == undefined) ? 1 : time ;
        options = (options == null || options == undefined) ? {useRandomorg: false} : options; 
        if(typeof(min) !== 'number') throw new ReferenceError("\"min\" Must be a Number!");
        if(typeof(max) !== 'number') throw new ReferenceError("\"max\" Must be a Number!");
        if(options.useRandomorg){
            let response;
                await axios.get(`https://www.random.org/integers/?num=${time}&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`).then(async (res) => {
                    const data = await res.data;
                    if(time > 1){
                        response = data.split("\n");
                        response.pop();
                        response.forEach((element, index) => {
                            response[index] = parseInt(element)
                        });
                    } else if(time === 1){
                        response = data;
                    }
                }).catch(error => {
                    console.error(error)
                });
            return response;
        } else {
            if(time > 1){
                var numbers = [];
                for(var i = 0; i !== time; i++){
                    numbers.push(Math.floor(Math.random() * max) + min);
                }
                return numbers;
            } else {
                return Math.floor(Math.random() * max) + min;
            }
        }
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
        if(typeof(number) !== 'number' && typeof(number) !== 'object' ) throw new ReferenceError("\"number\" Must be a Number or a number Array!");
        if(typeof(times) !== 'number') throw new ReferenceError("\"times\" Must be a Number!");
        var randomP = 0;
        if (typeof(number) === 'object'){
            for(var i = 0; i <= times; i++){
                if( number.includes(Math.floor(Math.random() * max) + min) ) {
                    randomP += 1;
                }
            }
        } else {
            for(var i = 0; i <= times; i++){
                if(Math.floor(Math.random() * max) + min === number) randomP += 1;
            }
        }
        return randomP / times
    },

    /** 
     * @param {object} options
    */
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
            return "#" + (Math.floor(Math.random() * 16777215) + 0).toString(16);
        },
        rgb: () => {
            let result = [(Math.floor(Math.random() * 255) + 0), Math.floor(Math.random() * 255) + 0, Math.floor(Math.random() * 255) + 0];
            return result;
        }
    }
}