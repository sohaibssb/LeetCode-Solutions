//Ex 15 --> 51


function reverseInt(n) {

    const ReN = n.toString().split('').reverse().join('')

    return parseInt(ReN) * Math.sign(n)
} 
console.log(reverseInt(-15))

