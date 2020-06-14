/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var conj = require('conjunct'),
  pair = ['gold', 'silver'],
  list = ['red', 'green', 'blue', 'white'],
  eq = require('assert').strictEqual;

// Arg 1: list: The items.
eq(conj(pair),  'gold and/or silver');
eq(conj(list),  'red, green, blue and/or white');

// Arg 2: fin: The last glue.
eq(conj(pair, 'or'),    'goldorsilver');
eq(conj(pair, ' or '),  'gold or silver');
eq(conj(list, ' or '),  'red, green, blue or white');

// Arg 3: glue: The non-last glue.
eq(conj(pair, ' or ', '/'),  'gold or silver');
eq(conj(list, ' or ', '/'),  'red/green/blue or white');

// Arg 4: serial: Prefix for the last glue in case of 3+ items.
//        (serial comma, Oxford comma, Harvard comma)
eq(conj(pair, ' or ', ', '),      'gold or silver');
eq(conj(pair, ' or ', ', ', ','), 'gold or silver');
eq(conj(list, ' or ', ', '),      'red, green, blue or white');
eq(conj(list, ' or ', ', ', ','), 'red, green, blue, or white');








console.info('+OK usage test passed.');
