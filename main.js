// Ezrandom
/**
    * @author: QwertyR0
    * @version: 2.1.0
*/

const willExport = {
    
    /**
        * @param {number} [min] default: 0
        * @param {number} [max] default: "Number.MAX_SAFE_INTEGER"
        * @param {number} [times] default: 
        * @returns {number}
    */
    genInt: (min, max, times) => {
        times = times || 1;
        if (min == undefined){
            min = 0;
            max = Number.MAX_SAFE_INTEGER;
        } else if(min && max === undefined){
            max = min;
            min = 0;
        }
        
        if(times > 1){
            let numbers = [];
            for(let i = 0; i !== times; i++){
                numbers.push(Math.floor(Math.random() * max) + min);
            }

            return numbers;
        } else {
            return Math.floor(Math.random() * max) + min;
        }
    },

    /**
        * @param {float|number} [min] default: 0
        * @param {float|number} [max] default: "Number.MAX_SAFE_INTEGER"
        * @param {number} [times] default: 1
        * @returns {float|number}
    */
    genFloat: (min, max, times) => {
        times = times || 1;
        if (min == undefined){
            min = 0;
            max = Number.MAX_SAFE_INTEGER;
        } else if(min && max === undefined){
            max = min;
            min = 0;
        }
        
        if(times > 1){
            let numbers = [];
            for(let i = 0; i !== times; i++){
                numbers.push(Math.random() * (max - min) + min);
            }

            return numbers;
        } else {
            return Math.random() * (max - min) + min;
        }
    },

    /**
        * @param {Array} array
        * @param {number} amount
        * @returns {Array}
    */
    selection: (array, amount) => {
        if(array.constructor !== Array) throw new ReferenceError("Argument must be an Array");
        if(typeof(amount) !== 'number') throw new ReferenceError("\"amount\" Must be a Number!");

        let selections = [];
        amount--;
        for (let i = 0; i <= amount; i++){
            selections.push(array[Math.floor(Math.random() * array.length) + 0]);
        }
        return selections;
    },

    /**
        * @param {number} min
        * @param {number} max
        * @param {number} times
        * @returns {float|number}
    */
    probability: (min, max, times) => {
        if(typeof(min) !== 'number') throw new ReferenceError("\"min\" Must be a Number!");
        if(typeof(max) !== 'number') throw new ReferenceError("\"max\" Must be a Number!");
        if(typeof(times) !== 'number') throw new ReferenceError("\"times\" Must be a Number!");
        
        let randomP = 0;
        
        for(let i = 0; i <= times; i++){
            if(Math.floor(Math.random() * max) + min === 5) randomP += 1;
        }
        
        return randomP / times;
    },

    /** 
     * @param {Object} [options]
     * @param {number} [pasLength] default: 10 
     * @param {boolean} [symbols] default: false
     * @param {boolean} [numbers] default: false
     * @param {boolean} [uppercase] default: false
     * @param {boolean} [lowercase] default: true
     * 
     * @returns {string}
    */
    password: (options) => {
        if(options.constructor !== Object) throw new ReferenceError("The 1st Argument must be a \"object\"");
        if(typeof(options.passLength) !== "number" && options.uppercase !== undefined) throw new ReferenceError("pasLength option must be a \"number\"");
        if(typeof(options.symbols) !== "boolean" && options.uppercase !== undefined) throw new ReferenceError("symbols option must be a \"boolean\"");
        if(typeof(options.numbers) !== "boolean" && options.uppercase !== undefined) throw new ReferenceError("numbers option must be a \"boolean\"");
        if(typeof(options.uppercase) !== "boolean" && options.uppercase !== undefined) throw new ReferenceError("uppercase option must be a \"boolean\"");
        if(typeof(options.lowercase) !== "boolean" && options.uppercase !== undefined) throw new ReferenceError("uppercase option must be a \"boolean\"");
        
        options = {
            passLength: options.passLength || 10,
            symbols: options.symbols || false,
            numbers: options.numbers || false,
            uppercase: options.uppercase || false,
            lowercase : options.lowercase !== false ? true : false
        }

        let list = "";

        let abc = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "0123456789";
        let symbols = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

        if (options.symbols){
            list += symbols;
        }

        if (options.uppercase){
            list += abc.toUpperCase();
        }

        if (options.numbers){
            list += numbers;
        }

        if (options.lowercase){
            list += abc;
        }

        if(list == 0) return false;

        let result = "";
        for (let i = 0; i <= options.passLength; i++){
                result += abc.charAt(Math.floor(Math.random() * list.length));
        }

        return result;
    },

    ranColor: {
        /**
         * @returns {string}
         */
        hex: () => {
            return "#" + (Math.floor(Math.random() * 16777215)).toString(16);
        },

        /**
         * @returns {Array}
         */
        rgb: () => {
            let result = [(Math.floor(Math.random() * 255)), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
            return result;
        }
    },
    /** 
     * @param {Array} arr
     * @returns {Array}
    */
    shuffle: (arr) => {
        return arr.sort(() => 0.5 - Math.random());
    },

    /** 
     * @param {number} number
     * @param {number|float} [range] default: 3.8
     * 
     * @returns {number|float}
    */
    mutate: (number, range) => {
        if(typeof(number) !== 'number') throw new ReferenceError("No number to be mutated is passed.");
        range = range || 3.8;

        let mutation = 0;
        while(mutation === 0){
            mutation = Math.random() * (range - (-range)) + -range;
        }

        return number + mutation
    }
}

export default willExport;