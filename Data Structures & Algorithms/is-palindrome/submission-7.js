class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let st1 = ""
        for(let i of s){
            if((i>='a' && i<='z') || (i>='A' && i<='Z') || (i>='0' && i<='9')){
                st1+=i.toLowerCase()
            }
        }
        console.log(st1)
        let st2 = st1.split("").reverse().join("")
        return st1===st2
    }
}
