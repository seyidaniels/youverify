function arePermutation(str1, str2) {
    let n1 = str1.length;
    let n2 = str2.length;

    if( n1 !== n2){
        return false;
    }

    let arrchar1 = str1.split('');
    let arrchar2 = str2.split('');

    arrchar1.sort();
    arrchar2.sort();

    for( let i = 0; i < n1; i++){
        if( arrchar1[i] !== arrchar2[i]){
            return false;
        }
    }
    return true;
}