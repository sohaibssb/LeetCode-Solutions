//Ex. chunk([1,2,3,4],2) --> [[1,2],[3,4]]
//Ex2. chunk([1,2,3,4,5,6,7,8],3) --> [[1,2,3],[4,5,6],[7,8]]


function chunk(array, size) {
    
    const NewArray = []
    let i = 0
    let j = size
    while(i<array.length){ 
    
        NewArray.push(array.slice(i, j))
        i += size
        j += size
    }
    return NewArray
}

console.log(chunk([1,2,3,4,5,6,7,8],3))