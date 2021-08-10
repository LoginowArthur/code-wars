// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    let notUniqNum;

    if (arr[0] !== arr[1] && arr[1] === arr[2]) return arr[0];
    if (arr[0] !== arr[1] && arr[0] === arr[2]) return arr[1];
    if (arr[0] === arr[1] && arr[1] !== arr[2]) return arr[2];
    if (arr[0] === arr[1] && arr[1] === arr[2]) notUniqNum = arr[0]

    for (let i = 3; i < arr.length; i++) {
        console.log('asdfadsf')
        if (arr[i] !== notUniqNum) return arr[i]
    }
}

console.log(findUniq([1, 2, 1, 1, 1, 1, 1]))