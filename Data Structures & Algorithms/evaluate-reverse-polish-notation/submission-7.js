class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let res = Number(tokens[0])
        for (let i of tokens) {
            if (i == "+") {
                res = stack.pop() + stack.pop()
                stack.push(res)
            } else if (i == "-") {
                let a = stack.pop()
                let b = stack.pop()
                stack.push(b-a)
            } else if (i == "*") {
                res = stack.pop() * stack.pop()
                stack.push(res)
            } else if (i == "/") {
                let a = stack.pop()
                let b = stack.pop()
                stack.push(Math.trunc(b/a))
            } else {
                stack.push(Number(i))
            }
        }
        return stack.pop()
    }
}
