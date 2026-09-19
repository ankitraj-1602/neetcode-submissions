class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let mp1 = new Map()
        let mp2 = new Map()
        if(s.length!==t.length){
            return false
        }
        for(let i of s){
           mp1.set(i,(mp1.get(i) || 0)+1)
        }
        for(let i of t){
           mp2.set(i,(mp2.get(i) || 0)+1)
        }
        for(let [key,value ] of mp1){
            if(mp2.get(key)!==value){
                return false
            }
        }
        return true

    }
}
