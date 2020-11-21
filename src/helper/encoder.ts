import { Plan } from '../types/plan';
import * as zlib from 'zlib';

export function encode(plan: Plan): string {
	return '0' + zlib.deflateSync(JSON.stringify(plan)).toString('base64');
}
