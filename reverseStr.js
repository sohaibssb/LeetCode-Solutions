//Ex 'Hi' --> 'iH'


function reverse(str) {

    let Re1 = ''

    for (let i = 0; i < str.length; i++){
        
        Re1 = str[i] + Re1 
    }

    return Re1
}

console.log(reverse('Hi'))

////////------------------------------

function reverseWay2(str) {

    let Re1 = ''
    for (let char of str){   
        Re1 = char + Re1 
    }
    return Re1
}

console.log(reverseWay2('Sohaib'))

////////------------------------------

function reverseWay3(str) {
    
    const A1 = str.split('').reverse().join('')
    
    return A1
}

console.log(reverseWay3('Sohaib'))