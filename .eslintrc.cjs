// Wrapper so ESLint CLI can load the TypeScript ESLint config (.eslintrc.ts)
// This requires `ts-node` to be available (it's in devDependencies).
require('ts-node/register');
module.exports = require('./.eslintrc.ts');
