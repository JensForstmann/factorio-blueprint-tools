import { plan } from '../types/plan';
import * as zlib from 'zlib';

export default function (str: string): plan {
	if (str[0] !== '0') throw 'wrong blueprint string format (can only handle version 0';
	try {
		return JSON.parse(zlib.inflateSync(Buffer.from(str.slice(1), 'base64')).toString('utf8'));
	} catch (e) {
		throw e;
	}
}
