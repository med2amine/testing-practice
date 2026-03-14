const caesarCipher = require('./caesarCipher')

test('shift letters',()=>{
    expect(caesarCipher('abc',1)).toBe('bcd')
})