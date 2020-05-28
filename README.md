# biri
A unique client ID generator for browser applications

## Introduction
`biri` gives you a unique ID for a browser application. The ID is generated per computer, and doesn't change unless the MAC address of the computer changes. For the web applications that have to use client-side ID generation and that struggle with private browser windows and clearing application storage, `biri` offers a unique solution and gives you a static ID per computer.

The primary use of `biri` is applications built for anonymous users where one wants to ensure the uniqueness of a user. Traditionally, backends rely on IP addresses and similar techniques, however this proves challenging for users within the same network.

`biri` distinguishes anonymous users and returns a unique ID for each user.

## Browser support
## Installing
Using npm:

```
$ npm install biri
```

Using jsDelivr CDN:
```
<script src="https://cdn.jsdelivr.net/npm/biri/dist/biri.min.js"></script>
```

Using unpkg CDN:
```
<script src="https://unpkg.com/biri/dist/biri.min.js"></script>
```

## Usage
In systems that use webpack or a similar bundler:

```js
const biri = require('biri')

const uniqueId = await biri() // the returned ID will be unique per computer
```

In the browser:

```html
<script src="https://unpkg.com/biri/dist/biri.js"></script>

<script>
  const uniqueId = await biri() // the returned ID will be unique per computer
</script>
```

# License
```
MIT License

Copyright (c) 2020 Armagan Amcalar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
