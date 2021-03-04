/**
 * 请实现一个函数用来匹配包含'. '和'*'的正则表达式。
 * 模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。
 * 在本题中，匹配是指字符串的所有字符匹配整个模式。
 * 例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。
 */
var isMatch = function(s, p) {
    const sLen = s.length, pLen = p.length;
    // 状态转移矩阵
    const dp = Array.from({
        length: sLen + 1
    }, _ => new Array(pLen + 1).fill(false));
    // 初始化基本情况
    dp[0][0] = true;
    for (let j = 1; j < pLen + 1; ++j) {
        if (p[j - 1] == "*") {
            dp[0][j] = dp[0][j - 2];
        }
    }
    // 执行状态转移方程
    for (let i = 1; i < sLen + 1; ++i) {
        for (let j = 1; j < pLen + 1; ++j) {
            if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] == "*") {
                if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }
    return dp[sLen][pLen];
};



"mississippi"
"mis*is*ip*."
const res = isMatch('abcd', "d*");
console.log(res);