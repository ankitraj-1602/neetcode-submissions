class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0, size = s.length - 1, right = 0
        let st = new Set()
        let mxLength = 0
        while (right <= size) {
            while (st.has(s[right])) {
                st.delete(s[left])
                left++
            }
        mxLength = Math.max(mxLength, right - left + 1)
        st.add(s[right])
        right++
        }
        return mxLength
    }
}
