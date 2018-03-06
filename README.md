# collection-diff
## Description
Finds differences in two arrays of objects (collections) by specifying a unique property
## Installation
From Github
```
$ npm install --save johancoppens/collection-diff
```
## Use it
``` javascript
const diff = require('collection-diff')
const util = require('util')

const oldA = [
  {
    'id': '1',
    'name': 'one'
  },
  {
    'id': '2',
    'name': 'two REMOVED'
  },
  {
    'id': '3',
    'name': 'three'
  },
  {
    'id': '4',
    'name': 'four'
  },
  {
    'id': '5',
    'name': 'five'
  }
]
const newA = [
  {
    'id': '1',
    'name': 'one CHANGED'
  },
  {
    'id': '3',
    'name': 'three'
  },
  {
    'id': '4',
    'name': 'four'
  },
  {
    'id': '5',
    'name': 'five CHANGED'
  },
  {
    'id': '6',
    'name': 'six ADDED'
  }
]

let changes = diff(oldA, newA, 'id')
console.log(util.inspect(changes, {depth: null}))
```

Should output to the console

```javascript
{
  added: [
    { id: '6', name: 'six ADDED' }
  ],
  removed: [
    { id: '2', name: 'two REMOVED' }
  ],
  changed: [
    {
      oldO: { id: '1', name: 'one' },
      newO: { id: '1', name: 'one CHANGED' }
    },
    {
      oldO: { id: '5', name: 'five' },
      newO: { id: '5', name: 'five CHANGED' }
    }
  ],
  common: [
    { id: '3', name: 'three' },
    { id: '4', name: 'four' }
  ]
}
```
