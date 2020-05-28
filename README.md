# biri

A unique client ID generator for browser applications

## Introduction

`biri` gives you a unique ID for a browser application. The ID is generated per computer, and doesn't change unless the MAC address of the computer changes. For the web applications that have to use client-side ID generation and that struggle with private browser windows and clearing application storage, `biri` offers a unique solution and gives you a static ID per computer.

The primary use of `biri` is applications built for anonymous users where one wants to ensure the uniqueness of a user. Traditionally, backends rely on IP addresses and similar techniques, however this proves challenging for users within the same network.

`biri` distinguishes anonymous users and returns a unique ID for each user.

## Licensing

`biri` is dual licensed. The default license is GPL and the usage details are outlined in [LICENSE](LICENSE).

If you are a commercial entity, you can purchase a non-GPL license which will give you rights to use it commercially without sharing source code. Please contact the authors for licensing details.

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
GNU GENERAL PUBLIC LICENSE Version 3
```

See [LICENSE](LICENSE) for details.
