
class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let visited = new Set();

        while (n !== 1 && !visited.has(n)) {
            visited.add(n);

            let sum = 0;

            while (n > 0) {
                let digit = n % 10;
                sum += digit * digit;
                n = Math.trunc(n / 10);
            }

            n = sum;
        }

        return n === 1;
    }
}