const calculator = require('./calculator')

test('add number',()=>{
    expect(calculator.add(2,4)).toBe(6)
})

test('subtract number',()=>{
    expect(calculator.subtract(4,2)).toBe(2)
})

test('multiply number',()=>{
    expect(calculator.multiply(2,4)).toBe(8)
})

test('divide number',()=>{
    expect(calculator.divide(10,5)).toBe(2)
})