import { describe, test, expect } from 'vitest'

import { filename, dirname } from '../index.js'

describe('index', () => {
  describe('filename', () => {
    test('should return a file path', () => {
      expect(filename({ url: 'file:///dir/file.txt' })).toBe('/dir/file.txt')
    })
    test('should throw an error if provided with empty url', () => {
      const resultFn = () => {
        filename({ url: '' })
      }

      expect(resultFn).toThrow(/Invalid URL/)
    })
    test('should throw an error if provided with undefined url', () => {
      const resultFn = () => {
        filename({ url: undefined })
      }

      expect(resultFn).toThrow(/The "path" argument must be of type string or an instance of URL/)
    })
    test('should throw an error if provided with null url', () => {
      const resultFn = () => {
        filename({ url: null })
      }

      expect(resultFn).toThrow(/The "path" argument must be of type string or an instance of URL/)
    })
  })
  describe('dirname', () => {
    test('should return a directory path', () => {
      expect(dirname({ url: 'file:///dir/file.txt' })).toBe('/dir')
    })
    test('should throw an error if provided with empty url', () => {
      const resultFn = () => {
        dirname({ url: '' })
      }

      expect(resultFn).toThrow(/Invalid URL/)
    })
    test('should throw an error if provided with undefined url', () => {
      const resultFn = () => {
        dirname({ url: undefined })
      }

      expect(resultFn).toThrow(/The "path" argument must be of type string or an instance of URL/)
    })
    test('should throw an error if provided with null url', () => {
      const resultFn = () => {
        dirname({ url: null })
      }

      expect(resultFn).toThrow(/The "path" argument must be of type string or an instance of URL/)
    })
  })
})
