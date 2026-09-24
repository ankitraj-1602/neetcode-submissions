class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            console.log(nums[mid])
            if (nums[mid] === target) {
                return mid
            }
            else if (nums[left] <= nums[mid]) {
                // LEFT HALF IS SORTED

                if (nums[left] <= target && target <= nums[mid]) {
                    // go left
                    right = mid - 1
                } else {
                    // go right
                    left = mid + 1
                }

            }
            else {
                // RIGHT HALF IS SORTED

                if (nums[mid] <= target && target <= nums[right]) {
                    // go right
                    left = mid + 1
                } else {
                    // go left
                    right = mid - 1
                }
            }
        }
        return -1
    }
}
