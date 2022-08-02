export async function filename(url: string): Promise<string> {
  return import('url').then(({ fileURLToPath }) => {
    return fileURLToPath(url)
  })
}

export async function dirname(url: string): Promise<string> {
  return import('path').then(async ({ dirname }) => {
    return dirname(await filename(url))
  })
}
