# Changelog

[//]: # (>>   The order of list items should be: Critical/Fixes, New, Update, Remove, Underpinnings   <<)
[//]: # (>>   ## [UNRELEASED]https://github.com/roydukkey/sass-module-list/compare/v2.0.1...master   <<)

## [UNRELEASED](https://github.com/roydukkey/sass-module-list/compare/v2.0.1...master)

* Replace internals with `.is-separator-invalid()`, `.separator()`, and `.validate-index()` abstractions to `sass-exception` [#11](https://github.com/roydukkey/sass-module-list/issues/11)

## [2.0.1](https://github.com/roydukkey/sass-module-list/compare/v2.0.0...v2.0.1)

* Fix `.reverse()` and `.sort()` to always return a list when given a map [#9](https://github.com/roydukkey/sass-module-list/issues/9)
* Remove the `.github`, `.vscode`, and `spec` folders from release package

## [2.0.0](https://github.com/roydukkey/sass-module-list/compare/v1.3.0...v2.0.0)

* Require configuring Sass compilation to include `'node_modules'`
* Abstract [`sass-exception`](https://www.npmjs.com/package/sass-exception) and [`sass-meta`](https://www.npmjs.com/package/sass-meta) packages
* Fix numeric sort behavior [#7](https://github.com/roydukkey/sass-module-list/issues/7)
* Add spec for when functions should accept `$separator` and `$bracketed` parameters
* Add spec for comparison logic
* Add spec for reference functions
* Add tests for error messages
* Extend `.set-nth()` to accept `$separator` parameter
* Update comparison function reference variable to readonly invocable functions that self-reference when they receive no parameter.
* Update `.empty()` to infer characteristics from an existing list [#6](https://github.com/roydukkey/sass-module-list/issues/6)
* Update the behavior of `.to-string()`
* Improves efficiency of `.replace()`
* Fix several docs

## [1.3.0](https://github.com/roydukkey/sass-module-list/compare/v1.2.0...v1.3.0)

* Requires as least Dart Sass v1.33.0
* Fix deep list evaluation for `.join()` [#5](https://github.com/roydukkey/sass-module-list/issues/5)
* Refactor code away from deprecated [Slash as Division](https://sass-lang.com/documentation/breaking-changes/slash-div) [#3](https://github.com/roydukkey/sass-module-list/issues/3)
* Update several docs [#4](https://github.com/roydukkey/sass-module-list/issues/4)

## [1.2.0](https://github.com/roydukkey/sass-module-list/compare/v1.1.0...v1.2.0)

* New combined API has been added [#2](https://github.com/roydukkey/sass-module-list/issues/2)
* New `empty()` to create empty lists as un/bracketed and a specific separator [#1](https://github.com/roydukkey/sass-module-list/issues/1)
* Update several docs
* Replace pre-build script with clean-package

## [1.1.0](https://github.com/roydukkey/sass-module-list/compare/v1.0.0...v1.1.0)

* Move `sass` to a dev dependency
* Fix `index()` signature in README
* Fix and add SassDoc annotations
* Remove unnecessary content from NPM package

## 1.0.0

* Initial release!
