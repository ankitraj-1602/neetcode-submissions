class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s = ""
        for(let i =0;i<strs.length;i++){
            s=s+strs[i].length+"#"+strs[i]
        }

        return s
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ans = []
        for(let i=0;i<str.length;){
            let num=''
            while(str[i]>='0' && str[i]<='9'){
                num+=str[i]
                i++
            }
            let dNum = Number(num)
            ans.push(str.slice(i+1,dNum+i+1))
            i = i+dNum+1
            
        }
        return ans
    }
}
