var validateStackSequences = function(pushed, popped) {
    let helper = [],i = 0
    pushed.forEach((val,index) => {
        helper.push(val)
        if (helper.length > 0 && helper[helper.length - 1] == popped[i]){
            helper.pop()
            i++
        }
    })
    return helper.length > 0 ? false :true
};

console.log(validateStackSequences([2,1,0],[1,2,0]))