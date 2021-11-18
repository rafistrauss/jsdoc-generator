import { generateJSDocForObject } from '../src/lib/util.js';
import { suite } from 'uvu';
import * as assert from 'uvu/assert';

const baseSuite = suite('generateJSDocForObject function');

baseSuite('single string property', () => {
	const expectedResult = `/**
* @typedef {object} root
* @property {string} a
*/
`;
	const actual = generateJSDocForObject({ a: 'a' });
	assert.fixture(actual, expectedResult);
});

baseSuite('single number property', () => {
	const expectedResult = `/**
* @typedef {object} root
* @property {number} a
*/
`;
	const actual = generateJSDocForObject({ a: 1 });
	assert.fixture(actual, expectedResult);
});

baseSuite('single boolean property', () => {
	const expectedResult = `/**
* @typedef {object} root
* @property {boolean} a
*/
`;
	const actual = generateJSDocForObject({ a: true });
	assert.fixture(actual, expectedResult);
});

baseSuite('single null property', () => {
	const expectedResult = `/**
* @typedef {object} root
* @property {?} a
*/
`;
	const actual = generateJSDocForObject({ a: null });
	assert.fixture(actual, expectedResult);
});

baseSuite('single array property', () => {
	const expectedResult = `/**
* @typedef {object} root
* @property {[]} a
*/
`;
	const actual = generateJSDocForObject({ a: [] });
	assert.fixture(actual, expectedResult);
});

baseSuite('single object property', () => {
	const expectedResult = `/**
* @typedef {object} root
* @property {a} a
*/

/**
* @typedef {object} a

*/
`;
	const actual = generateJSDocForObject({ a: {} });
	assert.fixture(actual, expectedResult);
});

baseSuite('double object property', () => {
	const expectedResult = `/**
* @typedef {object} root
* @property {obj[]} obj
*/

/**
* @typedef {object} obj
* @property {number} a
* @property {number} b
*/
`;
	const actual = generateJSDocForObject({
		"obj": [
			{
				"a": 1,
				"b": 1
			}
		]
	});
	assert.fixture(actual, expectedResult);
});

baseSuite.skip('double object property, optional property', () => {
	const expectedResult = `/**
* @typedef {object} root
* @property {obj[]} obj
*/

/**
* @typedef {object} obj
* @property {number} a
* @property {number} [b]
*/
`;
	const actual = generateJSDocForObject({
		"obj": [
			{
				"a": 1,
				"b": 1
			},
			{
				"a": 1
			}
		]
	});
	assert.fixture(actual, expectedResult);
});



baseSuite.run();
