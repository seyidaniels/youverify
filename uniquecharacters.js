function isUnique(char) {
    let arrychar = char.split('')
    let setchar = new Set(arrychar)
    if(setchar.size !== arrychar.length){
        return false;
    }
    return true;
}



const characters = ['seyi', 'daniels']
const results = [true, true]


for(let i =0; i < characters.length; i+=1) {
    
    if (isUnque(characters[i] === result[i])) {
     console.log('Test case passed')   
    }else {
        console.log('Test case failed')
    }
    
}

/**


 Write test cases 
# 


**/
