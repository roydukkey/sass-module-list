# Reference Functions

Some of the functions provided by `sass-list` return a reference to a function so they maybe used as parameters in other function calls. Examples of this are the compare methods.

```sass
$sorted: sass-list.sort($unsorted, sass-list.compare-numeric())
```

However, these methods will function normally when provided with parameters. This allows other libraries to use these functions directly.

```sass
$first-item: 5
$second-item: 3
$result: sass-list.compare-numeric($first-item, $second-item)
```
