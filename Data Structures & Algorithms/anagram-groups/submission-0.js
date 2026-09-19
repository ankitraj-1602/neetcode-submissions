class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    isAnagram(s,t){
        let mp1 = new Map()
        let mp2 = new Map()

        for(let i of s) mp1.set(i,(mp1.get(i) || 0 )+1)
        for(let i of t) mp2.set(i,(mp2.get(i) || 0 )+1)

        if(s.length!==t.length){
            return false
        }
        
        for(let [key,value] of mp1){
            if(mp2.get(key)!==value){
                return false
            }
        }
        return true
    }
    groupAnagrams(strs) {
        let ans = []
        let visited = new Array(strs.length).fill(false)
        for(let i =0;i<strs.length;i++){
            if(visited[i]==true) continue
            let temp = []
            temp.push(strs[i])
            for(let j=i+1;j<strs.length;j++){
                let res = this.isAnagram(strs[i],strs[j])
                if(res===true && visited[j]!=true){
                    temp.push(strs[j])
                    visited[j]=true
                }
            }
            ans.push(temp)
        }
        return ans
    }
}
