const diff = require('../')
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
  }
]
const newA = [
  {
    'id': '1',
    'naam': 'one changed'
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
    'naam': 'five ADDED'
  }
]

let changes = diff(oldA, newA, 'id')
console.log(util.inspect(changes, {colors: true, depth: null}))
