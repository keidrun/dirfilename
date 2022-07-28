import { describe, test, expect } from 'vitest'

import { filename, dirname } from '../index.js'

describe('index', () => {
  describe('filename', () => {
    test('should return a file path', () => {
      expect(filename('file:///dir/file.txt')).toBe('/dir/file.txt')
    })
    test('should return undefined if provided with empty', () => {
      expect(filename('')).toBeUndefined()
    })
    test('should return undefined if provided with undefined', () => {
      expect(filename(undefined)).toBeUndefined()
    })
    test('should return undefined if provided with wrong url', () => {
      expect(filename('file.txt')).toBeUndefined()
    })
  })
  describe('dirname', () => {
    test('should return a directory path', () => {
      expect(dirname('file:///dir/file.txt')).toBe('/dir')
    })
    test('should return undefined if provided with empty', () => {
      expect(dirname('')).toBeUndefined()
    })
    test('should return undefined if provided with undefined', () => {
      expect(dirname(undefined)).toBeUndefined()
    })
    test('should return undefined if provided with wrong url', () => {
      expect(dirname('file.txt')).toBeUndefined()
    })
  })
})
