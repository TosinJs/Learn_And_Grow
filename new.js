const getRandom = (arr, n) => {
    let result = new Array(n)
    let len = arr.length
    let taken = new Array(len)
    console.log(result, taken)
    if (n > len) {
        throw new RangeError("More Elemnts than available")
    }
    while (n--) {
        const x = Math.floor(Math.random() * len)
        console.log(taken[x])
        result[n] = arr[x in taken ? taken[x] : x]
        taken[x] = --len in taken? taken[len] : len
        console.log(result, taken,x, n)
    }
    return result;
}