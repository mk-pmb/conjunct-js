﻿/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function conj(list, fin, glue, serial) {
  if (!list) { return ''; }
  var n = (+list.length || 0);
  if (n < 1) { return ''; }
  if (n === 1) { return list[0]; }
  if (fin === undefined) { fin = ' and/or '; }
  if (n === 2) { return list.join(fin); }
  if (glue === undefined) { glue = ', '; }
  if (serial === undefined) { serial = ''; }
  return (list.slice(0, -1).join(glue) + serial + fin + list.slice(-1)[0]);
}

conj.a = function (l) { return conj(l, ' and '); };
conj.o = function (l) { return conj(l, ' or '); };
conj.s = function (f, l) { return conj(l, ' ' + f + ' ', ', ', ','); };
conj.sa = function (l) { return conj(l, ' and ', ', ', ','); };
conj.so = function (l) { return conj(l, ' or ', ', ', ','); };

module.exports = conj;
