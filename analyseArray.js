function analyzeArray(arr){
    if (arr.length === 0) return null
    
    const sum = arr.reduce((a,b) => a+b,0)

    return {
        average : sum/arr.length,
        Min : Math.min(...arr),
        Max : Math.max(...arr),
        length : arr.length
    }
}

module.exports = analyzeArray