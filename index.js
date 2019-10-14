
const eq = require('deep-equal')

const diff = module.exports = (old, new, uniqueProp) => {
  // merge old and new on uniqueProp
  let union = {}
  // variable to store results
  let diffs = {
    added: [],
    removed: [],
    changed: [],
    equal: []
  }
  old.forEach(el => {
    union[el[uniqueProp]] = {}
    union[el[uniqueProp]].oldEl = el
  })
  new.forEach(el => {
    if (!union[el[uniqueProp]]) { // unique prop already in union as key
      union[el[uniqueProp]] = {}
    }
    union[el[uniqueProp]].newEl = el
  })
  for (let key in union) {
    let el = union[key]
    if (Object.keys(el).length === 1) { // added or removed
      if (el.newEl) { // added
        diffs.added.push(el.newEl)
      } else { // removed
        diffs.removed.push(el.oldEl)
      }
    } else { // compare old and new
      if (eq(el.newEl, el.oldEl, true)) { // not changed
        diffs.equal.push(el.oldEl)
      } else { // changed
        let change = {}
        change.oldO = el.oldEl
        change.newO = el.newEl
        diffs.changed.push(change)
      }
    }
  }
  return diffs
}
