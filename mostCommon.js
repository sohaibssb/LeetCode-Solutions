//Ex 'abcccc' --> 'c'


function maxChar(str) {
    
    let charMap = {}
    let max = 0
    let MaxC = []

    //Step 1 : Count the letters
    for(let char of str) {
        charMap[char] = ++charMap[char] || 1
    }

    //Step 2 : Find the max
    for (let key in charMap) {
        if (charMap[key] > max) {
            max = charMap[key]
            MaxC = [key]
        } else if (charMap[key] === max) {
            MaxC.push(key);
        }
    }
    console.log(charMap)
    return MaxC

}

console.log(maxChar('kayakk'))

////////------------------------------