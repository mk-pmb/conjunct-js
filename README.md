
<!--#echo json="package.json" key="name" underline="=" -->
conjunct
========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Glue array items together, with a different glue for the last pair.
<!--/#echo -->


API
---

This module exports one function:

### conj(list[, fin=' and/or '[, glue=', '[, serial='']]])

The `list` must support `Array`-like `.slice()` and `.join()`.

* For a single item list, returns the first item verbatim.
* For an empty list, returns the empty string.
* For a list with two items, returns them joined by `fin`.
* For a list with three or more items, returns them concatenated
  by `serial + fin` for the last pair, and `glue` for all other gaps.
  * Set `serial` to `,` to achieve a _serial comma_
    (also _Oxford comma_ or _Harvard comma_).

No spaces are added except those contained in `fin`/`glue`/`serial`.



Usage
-----

see [test.usage.js](test.usage.js).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
