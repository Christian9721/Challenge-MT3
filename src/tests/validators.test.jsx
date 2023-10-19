/* eslint-disable no-unused-vars */
import '@testing-library/jest-dom';
import { isEmpty } from '../utils/validators';
import { describe, expect, test } from "@jest/globals";

describe('isEmpty Function', () => {
	test('is not valid', () => {
		const validString = isEmpty('1');
		const validObject = isEmpty({ name: '' });
		const validArray = isEmpty([1]);
		const validNumber = isEmpty(2);
		expect(validString).toBe(false);
		expect(validObject).toBe(false);
		expect(validArray).toBe(false);
		expect(validNumber).toBe(false);
	});
	test('is valid', () => {
		const validString = isEmpty(false);
		const validObject = isEmpty({});
		const validArray = isEmpty([]);
		const validNumber = isEmpty(null);
		expect(validString).toBe(true);
		expect(validObject).toBe(true);
		expect(validArray).toBe(true);
		expect(validNumber).toBe(true);
	});
});
