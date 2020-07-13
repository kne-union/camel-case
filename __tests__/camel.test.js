import camel from '../src/index.js'

test('input: camel_ab', () => {
  expect(camel('camel_ab')).toBe('camelAb');
})
test('input: camel_ab lower', () => {
  expect(camel('camel_ab')).toBe('camelAb');
})
test('input: camel_ab upper', () => {
  expect(camel('camel_ab', 'upper')).toBe('CamelAb');
})
test('input: 0camel_ab lower', () => {
  function getIntArrayWrapFn(){
  	camel('0camel_ab')
  }
  expect(getIntArrayWrapFn).toThrow('0camel_ab is not validate');
})