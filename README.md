# sass-list

[![Release Version](https://img.shields.io/npm/v/sass-list.svg)](https://www.npmjs.com/package/sass-list)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This Sass module is for advanced list functions.

## Install

### Requires

* Dart Sass: `>=1.33.0`

Install the package:

```bash
npm install sass-list
```

Use the package like any other Sass module:

```scss
@use 'sass-list';
```

Depending on your setup, you may need to use the module by its full path:

```scss
// This is only an example
@use '../node_modules/sass-list';
```

## Public API

<dl>
  <dt><code><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_concat.sass">concat ( $values... [, $separator] [, $bracketed] )</a></code></dt>
  <dd>Merges two or more lists into a new list.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_distinct.sass"><code>distinct ( $list [, $separator] )</code></a></dt>
  <dd>Creates a new list with all distinct items from a list.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_empty.sass"><code>empty ( [$separator] [, $bracketed] )</code></a></dt>
  <dd>Creates an empty list with the specified characteristics.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_every.sass"><code>every ( $list, $predicate [, $args...] )</code></a></dt>
  <dd>Tests whether all items in a list satisfy the test implemented by the specified function.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_filter.sass"><code>filter ( $list, $predicate [, $separator] [, $args...] )</code></a></dt>
  <dd>Creates a new list with all item from a list that satisfy the test implemented by the specified function.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_find.sass"><code>find ( $list, $predicate [, $args...] )</code></a></dt>
  <dd>Returns the value of the first element from a list that satisfies the test implemented by the specified function.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_find-nth.sass"><code>find-nth ( $list, $predicate [, $args...] )</code></a></dt>
  <dd>Returns the index of the first item from a list that satisfies the test implemented by the specified function; otherwise, 0 is returned, indicating that no item satisfies the test.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_flat.sass"><code>flat ( $list [, $depth] [, $separator] )</code></a></dt>
  <dd>Creates a new list with all sub-list items concatenated into it recursively up to a specified depth.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_includes.sass"><code>includes ( $list, $value [, $start-at] )</code></a></dt>
  <dd>Determines whether a list includes a certain value among its items, returning true or false as appropriate.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_index.sass"><code>index ( $list, $value [, $from-index] )</code></a></dt>
  <dd>Returns the first index at which a specified item can be found in a list; otherwise, 0 is returned, indicating that the item is not present.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_insert-nth.sass"><code>insert-nth ( $list, $index, $value )</code></a></dt>
  <dd>Returns a copy of a list with the specified value inserted into the list at a given index.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_join.sass"><code>join ( $list [, $glue] )</code></a></dt>
  <dd>Concatenates all of the items in an list to a string, separated by the list's separator or a specified glue string. If the list has only one item, then that item will be returned without using the glue.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_last-index.sass"><code>last-index ( $list [, $from-index] )</code></a></dt>
  <dd>Returns the last index at which a specified item can be found in a list; otherwise, 0 is returned, indicating that the item is not present. The list is searched backwards, starting at a given index when specified.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_map.sass"><code>map ( $list, $transformer [, $args...] )</code></a></dt>
  <dd>Creates a new list populated with the results of calling a specified function on every item in a list.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_prepend.sass"><code>prepend ( $list, $value [, $separator] )</code></a></dt>
  <dd>Returns a copy of a list with the specified value added to the beginning.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_reduce-right.sass"><code>reduce-right ( $list, $transformer [, $initial-value] [, $args...] )</code></a></dt>
  <dd>Reduces a list to a single value as the product of calling a specified function on every item in a list, starting with the last item to the first.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_reduce.sass"><code>reduce ( $list, $transformer [, $initial-value] [, $args...] )</code></a></dt>
  <dd>Reduces a list to a single value as the product of calling a specified function on every item in a list.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_remove.sass"><code>remove ( $list, $value )</code></a></dt>
  <dd>Returns a copy of a list without the specified value.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_remove-nth.sass"><code>remove-nth ( $list, $index )</code></a></dt>
  <dd>Returns a copy of a list without the value at a given index.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_replace.sass"><code>replace ( $list, $value )</code></a></dt>
  <dd>Reverses a list in place. The first item becomes the last, and the last item becomes the first.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_reverse.sass"><code>reverse ( $list )</code></a></dt>
  <dd>Reverses a list in place. The first item becomes the last, and the last item becomes the first.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_slice.sass"><code>slice ( $list, $start-at [, $end-at] [, $separator] )</code></a></dt>
  <dd>Extracts a portion of a list into a new list selected from a starting index through a ending index.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_some.sass"><code>some ( $list, $predicate [, $args...] )</code></a></dt>
  <dd>Tests whether at least one item in a list satisfies the test implemented by the specified function.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_sort.sass"><code>sort ( $list, $compare )</code></a></dt>
  <dd>Sorts the items of a list in place. The default sort order is ascending, built upon converting the items into strings, then comparing their sequences of UTF-16 code units values.</dd>

  <dt><a href="//github.com/roydukkey/sass-module-list/tree/master/src/list/_to-string.sass"><code>to-string ( $list )</code></a></dt>
  <dd>Returns a string representing the specified list and its items.</dd>

</dl>

## Combined API

In order to avoid constantly declaring both the native 'sass:list' module and this library, the combined API has been added which merges the two.

```scss
// Rather than using both modules separately...
@use 'sass-list';
@use 'sass:list';

// ...this statement will accomplish the same thing.
@use 'sass-list/list';
```

*Note:* Since their functionality is enhanced by this library, the combined API hides the native `join` and `index` functions.
