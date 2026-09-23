class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        let stack = []
        let ans = new Array(temp.length).fill(0)

        for (let i = 0; i < temp.length; i++) {
            while (stack.length && temp[stack[stack.length - 1]] < temp[i]) {
                let prev = stack.pop()
                ans[prev] = i - prev

            }
            stack.push(i)
        }
        return ans

    }
}
