let count = 1;
function compressedString(str) {
    let newstr = '';
    for (let i = 0; i < str.length; i++){
        let currentstr = str[i]
        let nextstr = str[i + 1]

        if( currentstr === nextstr){
            count +=1;
        }
        else{
            newstr += currentstr + String(count);
            count = 1;
        }
    }
    return newstr.length < str.length ? newstr : str
}