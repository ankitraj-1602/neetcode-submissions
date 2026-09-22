class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let st = []
        for (let i of s) {
            if (i == "(" || i == "{" || i == "[") {
                st.push(i)
            } else {
                let top = st[st.length - 1]
                if ((top == "{" && i == "}") || (top == "[" && i == "]") || (top == "(" && i == ")")) {
                    st.pop()
                }else{
                    return false
                }
            }
        }
        return st.length == 0
    }
}
