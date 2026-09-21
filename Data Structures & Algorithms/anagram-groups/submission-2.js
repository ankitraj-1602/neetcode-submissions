class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mp = new Map()
        for( let i of strs){
            let key = i.split("").sort().join("")
            if(!mp.get(key)){
                mp.set(key,[])
            }
            mp.get(key).push(i)
        }
        return [...mp.values()]
    }
}
