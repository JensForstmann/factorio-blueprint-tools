import { Plan } from '../types/plan';
import { deflate } from 'pako';
import { Buffer } from 'buffer';

export function encode(plan: Plan): string {
	return '0' + Buffer.from(deflate(JSON.stringify(plan), { level: 9 })).toString('base64');
}
