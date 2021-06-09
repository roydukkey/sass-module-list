// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

const path = require('path');
const sass = require('sass');
const sassTrue = require('sass-true');

const sassConfig = {
	file: path.join(__dirname, 'index.sass'),
	includePaths: ['node_modules']
};

sassTrue.runSass(sassConfig, { sass, describe, it });
