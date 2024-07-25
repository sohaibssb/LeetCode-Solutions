//Two provided strings are anagrams of eachother.
//Ex. anagrams('coding money', 'money coding') --> True
//Ex. anagrams('Rail! safety', 'fairy tales') --> True
//Ex. anagrams('Hi there', 'Bye there') --> False

function charMap(str) {

    const charmap = {}
    str = str.toLowerCase().replace(/[\W]/g, '')
    for (let char of str) {
        charmap[char] = ++charmap[char] || 1
    }
    return charmap
}

function anagrams(stringA, stringB) {

    const charmapA = charMap(stringA)
    const charmapB = charMap(stringB)

    if (Object.keys(charmapA).length !== Object.keys(charmapB).length) return false
    
    for (let key in charmapA) {
        if(charmapA[key]!== charmapB[key]) return false
    }
    return true
}
console.log(anagrams('Rail! safety', 'fairy tales'));

//------------------------------------

function cleanStr(str) {

    return str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('')
}

function anagramsWay2(stringA, stringB) {

    return cleanStr(stringA) === cleanStr(stringB)

}
console.log(anagramsWay2('Rail! safety', 'fairy tales'));