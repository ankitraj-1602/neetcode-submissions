class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let output = []
        for(let i =0;i<=n;i++){
            let num = i
            let count = 0
            while(num>0){
                if(num & 1){
                    count++
                }
                num = num >> 1
            }
            output.push(count)
        }
        return output
    }
}
