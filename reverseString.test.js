const reverseString = require('./reverseString')

test('reverse a word',()=>{
    expect(reverseString('hello')).toBe('olleh')
})