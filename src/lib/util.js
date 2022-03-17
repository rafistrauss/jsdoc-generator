import json5 from 'json5';
const rootSymbol = Symbol('root');

/**
 * Recursively generate an object describing the shape of the input json
 *
 * @param  {object} obj
 * @param  {string} objectName='obj'
 * @param  {ShapeObject} [shapeObject]
 * @param  {boolean} [isRoot=true]
 * @returns {ShapeObject}
 */
function recursivelyGenerate(
	obj,
	objectName = 'obj',
	shapeObject = { [rootSymbol]: {} },
	isRoot = true
) {
	if (obj === null) {
		return null;
	}
	const arr = Object.entries(obj);

	for (const [key, value] of arr) {
		const rootKey = isRoot ? rootSymbol : objectName;
		if (value === null) {
			shapeObject[rootKey][key] = '?';
		} else if (Array.isArray(value)) {
			const uniqueTypes = value.reduce((/** @type {Set} */ acc, curr) => {
				let type = typeof curr;
				if (Array.isArray(curr)) {
					recursivelyGenerate(curr, key, shapeObject, false);
				} else if (typeof curr === 'object') {
					shapeObject[key] = {};
					recursivelyGenerate(curr, key, shapeObject, false);
					type = key;
				}
				return acc.add(type);
			}, new Set());
			const types = Array.from(uniqueTypes);
			const shape = (types.length > 1 ? `(${types.join('|')})` : types) + '[]';
			shapeObject[rootKey][key] = shape;
		} else if (typeof value === 'object') {
			shapeObject[key] = {};
			recursivelyGenerate(value, key, shapeObject, false);
			shapeObject[rootKey][key] = key;
		} else {
			shapeObject[rootKey][key] = typeof value;
		}
	}
	return shapeObject;
}

/**
 * @param  {*} obj
 * @param  {string} objName=null
 */
export function generateJSDocForObject(obj, objName = null) {
	const shapeTree = recursivelyGenerate(obj);
	const jsdocStatements = [];
	const typeName = objName || 'root';
	jsdocStatements.push(`/**\n* @typedef {object} ${typeName}`);
	jsdocStatements.push(
		Object.entries(shapeTree[rootSymbol])
			.map(([property, propertyType]) => `* @property {${propertyType}} ${property}`)
			.join('\n')
	);
	jsdocStatements.push('*/\n');
	for (const [typeName, value] of Object.entries(shapeTree)) {
		jsdocStatements.push(`/**\n* @typedef {object} ${typeName}`);
		jsdocStatements.push(
			Object.entries(value)
				.map(([property, propertyType]) => `* @property {${propertyType}} ${property}`)
				.join('\n')
		);
		jsdocStatements.push('*/\n');
	}

	return jsdocStatements.join('\n');
}

/**
 *
 * @param {string} obj
 * @returns {string | null | number}
 */
export function generateJSDocOrError(obj) {
	if (obj.length < 1) {
		return null;
	}
	try {
		const object = json5.parse(obj);
		return generateJSDocForObject(object);
	} catch (error) {
		console.error(error);
		return -1;
	}
}
