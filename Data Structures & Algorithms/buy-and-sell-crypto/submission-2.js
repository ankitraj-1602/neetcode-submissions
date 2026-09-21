class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0]
        let maxProfit = 0
        for(let i =1;i<prices.length;i++){
            console.log(minPrice,maxProfit)
            maxProfit = Math.max(maxProfit, prices[i]-minPrice)
            if(minPrice > prices[i]) {
                minPrice = prices[i]
                
            }
        }
        console.log(minPrice,maxProfit)
        return maxProfit
    }
}
