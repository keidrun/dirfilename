# dirfilename

[![NPM version](https://badge.fury.io/js/dirfilename.svg)](https://npmjs.org/package/dirfilename) [![CI](https://github.com/keidrun/where-are-we/actions/workflows/publish.yml/badge.svg)](https://github.com/keidrun/where-are-we/actions/workflows/publish.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Substitues for `__dirname` and `__filename` when using esm.

## Install

```shell
npm i dirfilename
```

## Usage

```typescript
import { dirname, filename } from 'dirfilename'

const __dirname = dirname(import.meta)
const __filename = filename(import.meta)
```
