import { plan } from '../types/plan';
import * as zlib from 'zlib';

export default function (plan: plan): string {
	return '0' + zlib.deflateSync(JSON.stringify(plan)).toString('base64');
}
