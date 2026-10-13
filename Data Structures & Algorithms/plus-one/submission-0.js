class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let number = 0
        for(let i of digits){
            number = number*10 + i
        }
        number = number +1
        let arr = []
        while(number!=0){
            let last = number %10
            arr.unshift(last)
            number = Math.floor(number/10)
        }
        console.log(arr)
        return arr
    }
}
