const analyzeArray = require('./analyseArray')

test('analyze array',()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average : 4,
        Min : 1,
        Max : 8,
        length : 6
    })
})