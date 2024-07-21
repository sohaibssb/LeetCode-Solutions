//Ex 'kayak' if reverse will be the same --> true


function palindrome(str) {

    let Re = ''

    for (let char of str) {
        
        Re = char + Re
    }

    if (str === Re) {
        return true
    } else 
        return false
}

console.log(palindrome('kayak'))

////////------------------------------

function palindrome2(str) {

    let Re = ''

    for (let char of str) {
        
        Re = char + Re
    }
return str === Re
}

console.log(palindrome2('Sohaib'))

////////------------------------------

function palindrome3(str) {

return str.every()
}

console.log(palindrome3('Sohaib'))

////////------------------------------