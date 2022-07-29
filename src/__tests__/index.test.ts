import { describe, test, expect } from 'vitest'

import { filename, dirname } from '../index.js'

describe('index', () => {
  describe('filename', () => {
    test('should return a file path', () => {
      expect(filename('file:///dir/file.txt')).toBe('/dir/file.txt')
    })
    test('should throw an error if provided with wrong url', () => {
      const resultFn = () => {
        filename('file.txt')
      }

      expect(resultFn).toThrow(/Invalid URL/)
    })
    test('should throw an error if provided with empty', () => {
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
    test('should throw an error if provided with wront url', () => {
      const resultFn = () => {
        dirname('dir/file.txt')
      }

      expect(resultFn).toThrow(/Invalid URL/)
    })
    test('should throw an error if provided with empty', () => {
      const resultFn = () => {
        dirname('')
      }

      expect(resultFn).toThrow(/Invalid URL/)
    })
  })
})
