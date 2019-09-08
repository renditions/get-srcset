# @renditions/get-srcset

[![npm version](https://img.shields.io/npm/v/@renditions/get-srcset.svg?style=flat-square)](https://www.npmjs.com/package/@renditions/get-srcset) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

Generate the srcset attribute for HTML [img](https://devdocs.io/html/element/img) and [picture](https://devdocs.io/html/element/source) tags.

## Install

```sh
npm install @renditions/get-srcset
```

## Usage

```js
import getSrcset from '@renditions/get-srcset'

const srcset = getSrcset([
  {
    src: '/images/320.jpg',
    width: '320'
  },
  {
    src: '/images/1024.jpg',
    width: '1024'
  }
])

console.log(srcset)
```

The above code logs the following string to the console:

```
/images/320.jpg 320w,/images/1024.jpg 1024w
```

The first function argument is expected to be an array **sorted by `src` in ascending order**.

### Using with React

```jsx
import React from 'react'
import getSrcset from '@renditions/get-srcset'

const renditionWidths = ['320', '1024']

const Image = ({ filename, ext, ...rest }) => {
  const renditions = renditionWidths
    .map(width => ({ width, src: `/images/${filename}_${width}.${ext}` }))

  const srcset = getSrcset(renditions)

  return <img srcSet={srcset} {...rest} />
}
```
