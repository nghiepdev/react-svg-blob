# REACT-SVG-BLOB

React SVG Blob Generator. Inspired by [blob shapes app](https://github.com/lokesh-coder/blobs.app) original

[![NPM version](https://img.shields.io/npm/v/react-svg-blob.svg)](https://www.npmjs.com/package/react-svg-blob)
[![NPM monthly download](https://img.shields.io/npm/dm/react-svg-blob.svg)](https://www.npmjs.com/package/react-svg-blob)

[![react-svg-blob](screenshot.png)](https://codesandbox.io/s/react-svg-blob-kuzpc)

## Demo

https://codesandbox.io/s/react-svg-blob-kuzpc

## Installation

```sh
$ yarn add react-svg-blob
```

## Usage

```jsx
import {SvgBlob} from 'react-svg-blob';

<SvgBlob type='solid' color='#00cec9' />;

<SvgBlob type='gradient' colors={['#2980B9', '#6DD5FA']} />

<SvgBlob type='pattern' pattern='cross' color='#d1d8e0' isOutline />

<SvgBlob
  type='image'
  image='https://source.unsplash.com/random/600x600/?plants'
/>
```

### Options

|    parameter     |               type                |   default   | description                                                                           |
| :--------------: | :-------------------------------: | :---------: | :------------------------------------------------------------------------------------ |
|       type       | `solid\|gradient\|pattern\|image` | `undefined` | The type of shape. Required `true`                                                    |
|       size       |             `number`              |    `400`    | SVG blob path size. Should be equals to width of wrap element.                        |
|    isOutline     |             `boolean`             |   `false`   |                                                                                       |
| shapeProps.grow  |             `number`              |     `6`     | Minimum size of the blob in percentage. More the smaller more the randomness          |
| shapeProps.edges |             `number`              |     `6`     | Total nodes to create a shape. Increasing this value will add complexity to the shape |
| shapeProps.seed  |             `string`              |   `null`    | It can be used to get same shape                                                      |

## License

MIT
