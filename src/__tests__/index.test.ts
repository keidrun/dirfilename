import { hello } from '../index.js'

describe('index', () => {
  describe('hello', () => {
    test('should return message', () => {
      expect(hello()).toBe('Hello')
    })
  })
})
