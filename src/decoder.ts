import type { Plan } from './plan';
import { inflate } from 'pako';

export const decodePlan = (str: string): Plan => {
	if (str[0] !== '0') throw 'wrong blueprint string format (can only handle version 0)';
	const bytes = Uint8Array.from(atob(str.slice(1)), (c) => c.charCodeAt(0));
	return JSON.parse(new TextDecoder().decode(inflate(bytes)));
};
