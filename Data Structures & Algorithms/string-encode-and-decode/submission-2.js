class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s = ""
        for(let i of strs){
            s= s+i.length+"#" + i
        }
        console.log(s)
        return s
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ans = []
        
        for(let i = 0;i<str.length;){
            let num = ""
            while(str[i]>='0' && str[i]<='9'){
                num+=str[i]
                i++
            }

            num = Number(num)
            ans.push(str.slice(i+1,num+i+1))
            i = i+num+1
        }
        return ans
    }
}
