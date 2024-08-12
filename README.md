# @dancastillo/json

A simple, lightweight JavaScript library for deep comparison of objects. Perfect for ensuring two objects have identical values, no matter how nested they are.

## Features

- **Deep Equality Check**: Compares objects deeply, ensuring that every nested property is equal.
- **Lightweight & Fast**: Optimized for performance, adding minimal overhead to your projects.
- **Easy to Use**: Simple and straightforward API.

## Installation

To install the package, run the following command in your project directory:

```bash
npm install @dancastillo/json
```

## API Reference

#### deepEqual(obj1, obj2)

Compares two objects for deep equality.

Example Usage
```typsescripe
const { deepEqual } = require('@dancastillo/json')

const a = {
  a: 1,
  b: {
    d: 4,
    e: { f: 6 }
  },
  c: 3
}
const b = {
  a: 1,
  b: {
    d: 4,
    e: { f: 6 }
  },
  c: 3
}

console.log(deepEqual(a, b)) // true
```

