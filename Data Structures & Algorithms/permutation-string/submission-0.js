class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0;
        let right = s1.length - 1
        let size = s2.length - 1
        let mp = new Map()
        let mp2 = new Map()
        if (s1.length > s2.length) return false
        for (let i = 0; i < s1.length; i++) {
            mp.set(s1[i], (mp.get(s1[i]) || 0) + 1)
            mp2.set(s2[i], (mp2.get(s2[i]) || 0) + 1)
        }
        while (right <= size) {
            let isMatch = true
            for (let ch of mp.keys()) {
                if (mp.get(ch)!=mp2.get(ch)) {
                    isMatch = false
                    break
                }
            }
            if(isMatch){
                return true
            }
            mp2.set(s2[left], (mp2.get(s2[left]) || 0) - 1)
            if(mp2.get(s2[left])===0){
                mp2.delete(s2[left])
            }
            left++
            right++
            mp2.set(s2[right], (mp2.get(s2[right]) || 0) + 1)
        }
        return false
    }
}
