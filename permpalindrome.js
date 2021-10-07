function permPalindrome(str) {
    let n_char = 128;
    let counts = Array(n_char).fill(0)

    for(let i of str){
        counts[i.charCodeAt()] += 1
    }

    let odd = 0;
    for(let i = 0; i < n_char; i++){
        odd += counts[i] % 2
    }
    return odd <= 1
}