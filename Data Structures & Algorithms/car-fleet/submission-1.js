class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let mp = []
        let stack = []
        for(let i = 0;i<position.length;i++){
            mp.push([position[i],speed[i]])
        }
        let sorted = [...mp].sort((a,b)=>b[0]-a[0])
        stack.push((target-sorted[0][0])/sorted[0][1])
        for(let i =1;i<sorted.length;i++){
            let arrival = (target-sorted[i][0])/sorted[i][1]

            if(arrival>stack[stack.length-1]){
                stack.push(arrival)
            }
        }

        return stack.length
    }
}
