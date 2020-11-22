import { Plan } from '../types/plan';
import { inflate } from 'pako';

export function decode(str: string): Plan {
	if (str[0] !== '0') throw 'wrong blueprint string format (can only handle version 0)';
	try {
		return JSON.parse(inflate(Buffer.from(str.slice(1), 'base64'), { to: 'string' }));
	} catch (e) {
		throw e;
	}
}
