import path from 'path'
import { fileURLToPath } from 'url'

export function filename(url: string | undefined): string | undefined {
  if (!url) return undefined

  try {
    return fileURLToPath(url)
  } catch (error) {
    return undefined
  }
}

export function dirname(url: string | undefined): string | undefined {
  const file = filename(url)
  return file ? path.dirname(file) : undefined
}
