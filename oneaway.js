let count = 0;
let i = 0;
let j = 0;
function oneAway(str1, str2){
   let n1 = str1.length
   let n2 = str2.length
   if( Math.abs( n1 - n2 ) > 1){
       return false
   }
   while(i < n1 && j < n2){
       if(str1[i] !== str2[j]){

            if(count === 1){
                return false
            }

            if(n1 > n2){
                i++
            }
            else if(n2 > n1){
                j++
            }
            else{
                i++;
                j++
            }

            count++
       }
       else{
           i++
           j++
       }
   }
   if( i < n1 || j < n2){
       count++
   }
   return count <= 1
}