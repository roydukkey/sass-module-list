# List Configuration Modifiers

The follow designates when functions are to accepts parameters that modify list configuration.

## Delimiting Punctuation

The `$separator` parameter should be accepted when returning an list.

## Enclosing Punctuation

The `$bracketed` parameter should be accepted when returning a list...

  * and bracket style cannot be singularly determined from the input, or...

    1. `.concat()`
    2. `.empty()`
    3. etc.

  * that is not a subset of an source list and a potential input value.

    1. `.map()`
    2. etc.
