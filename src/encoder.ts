import type { Plan } from './plan';
import { deflate } from 'pako';

export const encodePlan = (plan: Plan): string => {
	const json = JSON.stringify(plan);
	const compressed = deflate(new TextEncoder().encode(json), { level: 9 });

	let binary = '';
	for (const byte of compressed) binary += String.fromCharCode(byte);

	return '0' + btoa(binary);
};
