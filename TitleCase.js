//Capitalize First Letter of Each Word
//Ex. capitalize('this is sohaib') --> 'This Is Sohaib'


function capitalize(str) {
    const words = str.split(' ')
    const NewSen = []

    for (let word of words) {
        
        NewSen.push(word[0].toUpperCase() + word.slice(1));
    }
    return NewSen.join(' ')

}

console.log(capitalize('this is sohaib'))

////////------------------------------

function capitalizeWay2(str) {
    const words = str.split(' ')

    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

}

console.log(capitalizeWay2('this is sohaib'))