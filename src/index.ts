import path from 'path'
import { fileURLToPath } from 'url'

export function filename(url: string): string {
  return fileURLToPath(url)
}

export function dirname(url: string): string {
  return path.dirname(filename(url))
}
