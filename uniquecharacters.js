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

/**


 Write test cases 
# 


**/
