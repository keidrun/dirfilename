import { describe, test, expect } from 'vitest'

import { filename, dirname } from '../../async/index.js'

describe('async/index', () => {
  describe('filename', () => {
    test('should return a file path', async () => {
      expect(await filename('file:///dir/file.txt')).toBe('/dir/file.txt')
    })
    test('should return a file path with a drive', async () => {
      expect(await filename('file:///C:/dir/file.txt')).toBe('/C:/dir/file.txt')
    })
    test('should throw an error if provided with a wrong url', () => {
      return expect(filename('file.txt')).rejects.toThrow(/Invalid URL/)
    })
    test('should throw an error if provided with an empty', () => {
      return expect(filename('')).rejects.toThrow(/Invalid URL/)
    })
  })
  describe('dirname', () => {
    test('should return a directory path', async () => {
      expect(await dirname('file:///dir/file.txt')).toBe('/dir')
    })
    test('should return a directory path with a drive', async () => {
      expect(await dirname('file:///C:/dir/file.txt')).toBe('/C:/dir')
    })
    test('should throw an error if provided with a wrong url', () => {
      return expect(dirname('dir/file.txt')).rejects.toThrow(/Invalid URL/)
    })
    test('should throw an error if provided with an empty', () => {
      return expect(dirname('')).rejects.toThrow(/Invalid URL/)
    })
  })
})
