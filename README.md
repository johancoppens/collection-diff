# collection-diff
## Description
Finds differences in an array of objects (collections) by specifying a unique field
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
    'naam': 'one'
  },
  {
    'id': '2',
    'naam': 'two REMOVED'
  },
  {
    'id': '3',
    'naam': 'three'
  },
  {
    'id': '4',
    'naam': 'four'
  },
  {
    'id': '5',
    'naam': 'five'
  }
]
const newA = [
  {
    'id': '1',
    'naam': 'one CHANGED'
  },
  {
    'id': '3',
    'naam': 'three'
  },
  {
    'id': '4',
    'naam': 'four'
  },
  {
    'id': '5',
    'naam': 'five CHANGED'
  },
  {
    'id': '6',
    'naam': 'six ADDED'
  }
]

let changes = diff(oldA, newA, 'id')
console.log(util.inspect(changes, {depth: null}))
```

Should output to the console

```javascript
{
  added: [
    { id: '6', naam: 'six ADDED' }
  ],
  removed: [
    { id: '2', naam: 'two REMOVED' }
  ],
  changed: [
    {
      oldO: { id: '1', naam: 'one' },
      newO: { id: '1', naam: 'one CHANGED' }
    },
    {
      oldO: { id: '5', naam: 'five' },
      newO: { id: '5', naam: 'five CHANGED' }
    }
  ],
  common: [
    { id: '3', naam: 'three' },
    { id: '4', naam: 'four' }
  ]
}
```
