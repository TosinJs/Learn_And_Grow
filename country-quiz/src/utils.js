export const getRandom = (arr, n) => {
    let result = new Array(n)
    let len = arr.length
    let taken = new Array(len)
    if (n > len) {
        throw new RangeError("More Elemnts than available")
    }
    while (n--) {
        const x = Math.floor(Math.random() * len)
        result[n] = arr[x in taken ? taken[x] : x]
        taken[x] = --len in taken? taken[len] : len
    }
    return result;
}

export const fetchCountries = async () => {
    let data = await fetch("https://restcountries.com/v3.1/all")
    data = await data.json()
    const countries = getRandom(data, 100) 
    return countries
}

export const genRandomIndex = (array) => {
    const len = array.length
    return Math.floor(Math.random() * array.length)
}

// export const checkAnswer = (type, state, fn) => {
//     switch (type) {
//         case "correct":
//             return fn(state + 1)
//         case "wrong":
//             return fn(state)
//         default:
//             return fn(state)
//     }
// }