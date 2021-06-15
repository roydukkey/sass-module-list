// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

const fs = require('fs-extra');
const replace = require('replace-in-file');
const sass = require('sass');
const sassTrue = require('sass-true');


// Configuration
const source = './src';
const sassConfig = {
	file: './test/index.sass',
	includePaths: ['node_modules']
};
const backupSlug = '.testing-backup';


// Back up source and transform `@error`s to `true` error handling
fs.copySync(source, `${source}${backupSlug}`);
replace.sync({
	files: `${source}/**/*.sass`,
	from: [/(.)/, /^(?<!^\s*\/\/\s*true:cannot-test\s*$\n)(\s*)@error\s(.*)$/gm],
	to: ["@use 'throw'\n$1", '$1@return throw.error($2)']
});


// Run tests
try {
	sassTrue.runSass(sassConfig, { sass, describe, it });
}


// Restore source
finally {
	fs.moveSync(`${source}${backupSlug}`, source, { overwrite: true })
}
