const test = require('ava');
const { helloWorld } = require('./main');

test('should return hello world', t => t.is(helloWorld(), 'Hello world'));
