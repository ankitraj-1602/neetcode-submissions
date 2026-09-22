class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0
        let right = 0
        let size = s.length - 1
        let mp = new Map()
        let maxFreq = 0
        let maxWindow = 0
        while (right <= size) {
            mp.set(s[right], (mp.get(s[right]) || 0) + 1)
            if (mp.get(s[right]) > maxFreq) {
                maxFreq = mp.get(s[right])
            }
            if (((right - left + 1) - maxFreq) <= k) {
                maxWindow = Math.max(maxWindow, right - left + 1)
            } else {
                mp.set(s[left], (mp.get(s[left]) || 0) - 1)
                left++
            }
            right++
        }
        return maxWindow
    }
}
