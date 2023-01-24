import { Plan } from './plan';
import { deflate } from 'pako';
import { Buffer } from 'buffer';

export const encodePlan = (plan: Plan): string => {
	return '0' + Buffer.from(deflate(JSON.stringify(plan), { level: 9 })).toString('base64');
};
