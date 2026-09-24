class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = piles[0]
        for(let i =1;i<piles.length;i++){
            max = Math.max(max,piles[i])
        }
        let left = 1, right = max
        let ans = max
        while(left<=right){
            let mid = Math.floor((left+right)/2)
            let totalH = 0
            for(let i of piles){
                totalH += Math.ceil(i/mid)
            }
            console.log(totalH)
            if(totalH<=h){
                ans = mid
                right = mid-1
            }else{
                left = mid+1
            }
            console.log("ans",ans)
        }
        return ans
    }
}
