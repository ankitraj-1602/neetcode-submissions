class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0, j= s.length-1
        while(i<j){
            while(!/^[a-zA-Z0-9]$/.test(s[i]) && i<j) i++
            while(!/^[a-zA-Z0-9]$/.test(s[j]) && j>=0 && i<j) j--
            // console.log(s[i],s[j])
            if(s[i].toLowerCase()!=s[j].toLowerCase()) return false
            i++
            j--

        }
        return true
    }
}
