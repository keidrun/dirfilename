import { describe, test, expect } from 'vitest'

import { filename, dirname } from '../index.js'

describe('index', () => {
  describe('filename', () => {
    test('should return a file path', () => {
      expect(filename('file:///dir/file.txt')).toBe('/dir/file.txt')
    })
    test('should return a file path with a drive', () => {
      expect(filename('file:///C:/dir/file.txt')).toBe('/C:/dir/file.txt')
    })
    test('should throw an error if provided with a wrong url', () => {
      const resultFn = () => {
        filename('file.txt')
      }

      expect(resultFn).toThrow(/Invalid URL/)
    })
    test('should throw an error if provided with an empty', () => {
      const resultFn = () => {
        filename('')
      }

      expect(resultFn).toThrow(/Invalid URL/)
    })
  })
  describe('dirname', () => {
    test('should return a directory path', () => {
      expect(dirname('file:///dir/file.txt')).toBe('/dir')
    })
    test('should return a directory path with a drive', () => {
      expect(dirname('file:///C:/dir/file.txt')).toBe('/C:/dir')
    })
    test('should throw an error if provided with a wrong url', () => {
      const resultFn = () => {
        dirname('dir/file.txt')
      }

      expect(resultFn).toThrow(/Invalid URL/)
    })
    test('should throw an error if provided with an empty', () => {
      const resultFn = () => {
        dirname('')
      }

      expect(resultFn).toThrow(/Invalid URL/)
    })
  })
})
