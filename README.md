# dirfilename

[![NPM version](https://badge.fury.io/js/dirfilename.svg)](https://npmjs.org/package/dirfilename) [![CI](https://github.com/keidrun/dirfilename/actions/workflows/publish.yml/badge.svg)](https://github.com/keidrun/dirfilename/actions/workflows/publish.yml) [![codecov](https://codecov.io/gh/keidrun/dirfilename/branch/main/graph/badge.svg?token=i5tN0QQ197)](https://codecov.io/gh/keidrun/dirfilename) [![Known Vulnerabilities](https://snyk.io/test/github/keidrun/dirfilename/badge.svg)](https://snyk.io/test/github/keidrun/dirfilename) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Alternatives to `__dirname` and `__filename` when using ES modules.

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
