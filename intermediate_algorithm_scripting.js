// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
function sumAll(arr) {
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  var array = Array.apply(null, Array(max-min+1)).map(function (_, i) {return i+min;});

  var sum = array.reduce(function(sum, c){return sum + c;});
  return sum;
}

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diff(arr1, arr2) {
  var newArr = [];
  arr1.map(function(c){arr2.indexOf(c) === -1 && newArr.push(c);});
  arr2.map(function(c){arr1.indexOf(c) === -1 && newArr.push(c);});
  return newArr;
}

// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
function convert(num) {
    var romanNumbers = [
        ["","M","MM","MMM","","","","","",""],
        ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
        ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
        ["","I","II","III","IV","V","VI","VII","VIII","IX"]
    ];

    if (num >= 4000) { return ""; }

    num = (num + "").split("");

    while (num.length < 4) {
        num.unshift("0");
    }

 return num.reduce(function(string, c, i){ return string + romanNumbers[i][parseInt(c)]; },"");
}

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
function where(collection, source) {
    var keys = Object.keys(source);

    var arr = collection.map(function(c, i, a){
        var match = true;
        for (var key of keys) {
            match = source[key] === c[key];
        }
        if (match) { return c; }
        return;
    }).filter(function(value){ return value !== undefined; });

    return arr;
}

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
function myReplace(str, before, after) {
    return str.split(" ").map(function(c,i){
        if (c === before) {
            if (c.charCodeAt(c.charAt(0)) < 65+26) {
                return after.split("")[0].toUpperCase() + after.slice(1);
            }
            return after;
        }
        return c;
      }).join(" ");
}

// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
function translate(str) {
    var vowels = ["a","e","e","o","u"];
    if (vowels.indexOf(str.charAt(0)) !== -1 ) {
        return str + "way";
    } else {
        while (vowels.indexOf(str.charAt(0)) === -1) {
            str = str + str.charAt(0);
            str = str.slice(1);
        }
        return str + "ay";
    }
}

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pair(str) {
    return str.split("").map(function(strand){
        switch (strand) {
            case "G":
                return ["G","C"];
            case "C":
                return ["C","G"];
            case "A":
                return ["A","T"];
            case "T":
                return ["T","A"];
        }
    });
}

// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
    var missingLetter = undefined;
    str.split("").reduce(function(prev,curr){
        if (prev.charCodeAt() + 1 !== curr.charCodeAt()) {
            missingLetter = String.fromCharCode(prev.charCodeAt() + 1);
        }
        return curr;
    });
    return missingLetter;
}

// Check if a value is classified as a boolean primitive. Return true or false.
function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof(bool) === 'boolean';
}

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
function unite(arr1, arr2, arr3) {
    var arrays = [];
    for (var k in arguments) {
        arrays.push(arguments[k]);
    }

    var union = [];

    arrays.reduce(function(_,currentArray){
        for (var i in currentArray) {
            console.log(currentArray[i]);
            if (union.indexOf(currentArray[i]) === -1) {
                union.push(currentArray[i]);
            }
        }
    },[]);

    return union;
}

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convert(str) {
    str = str.replace(/&/g,"&amp;");
    str = str.replace(/</g,"&lt;");
    str = str.replace(/>/g,"&gt;");
    str = str.replace(/"/g,"&quot;");
    str = str.replace(/'/g,"&apos;");
  return str;
}

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  return str.replace(/_|\s/g,"-").replace(/\B([A-Z])/g, '-$1').toLowerCase();
}

// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
// The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
// As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
function fib(n) {
    var fib = [];

    fib[0] = 0;
    fib[1] = 1;
    var i = 2;
    while (fib[fib.length-1] <= n) {
        fib[i] = fib[i-2] + fib[i-1];
        i++;
    }
    if (fib[fib.length-1] !== n) {
        fib.pop();
    }
    return fib;
}

function sumFibs(num) {
    return fib(num).reduce(function(sum,n){
            if (n % 2 === 1) { return sum + n; }
            return sum;
        });
}

// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.
// The provided number may not be a prime.
function primes(n) {
    var primes = [];

    for (var i = 2; i <= n; i++) {
        var prime = true;
        for (var j = 0; j <= i; j++) {
            if (i % j === 0 && j !== 1 && j !== i) {
                prime = false;
            }
        }
        if (prime) { primes.push(i); }
    }

    return primes;
}

function sumPrimes(num) {
    return primes(num).reduce(function(sum,c){return sum+c;});
}