export const OPERATOR = {
	division: '/',
	multiplication: '*',
	subtraction: '-',
	addition: '+',
	exponentiation: '^',
	modulo: '%',
	shiftRight: '>>',
	shiftLeft: '<<',
	binaryOr: 'OR',
	binaryAnd: 'AND',
	binaryXor: 'XOR',
} as const;

export type Operator = (typeof OPERATOR)[keyof typeof OPERATOR];
