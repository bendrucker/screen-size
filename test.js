'use strict'

var test = require('tape')
var size = require('./')

test(function (t) {
  t.doesNotThrow(size)
  t.end()
})
