// https://www.codewars.com/kata/52a112d9488f506ae7000b95

// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.



function isIntArray(arr) {
    if (Array.isArray(arr)) {
        if (arr.length==0) {
            return true;
        };
        let i = 0;
        for (let num of arr) {
            if  (!Number.isNaN(num)) {
                if (Number.isInteger(num)) {
                    i++;
                }
            }
        }
        if (i==arr.length) {
            return true
        }
    }
    return false
}