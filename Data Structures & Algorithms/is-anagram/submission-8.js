class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length) return false
        let mp = new Map()
        for(let i of s){
            mp.set(i,(mp.get(i) || 0)+1)
        }
        for(let i of t){
            mp.set(i,(mp.get(i) || 0)-1)
            if(mp.get(i)==0){
                mp.delete(i)
            }
        }
        console.log(mp.size)
        return mp.size == 0
    }
}
