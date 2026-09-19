class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sitem = s.split('').sort().join('')
        let titem = t.split('').sort().join('')
        if(sitem === titem){
            return true
        }
        return false
    }
}
