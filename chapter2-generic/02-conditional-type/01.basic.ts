// In typespace, 'extends' keyword is a key role of conditional type definition

import { Equal, Expect } from '../../helper.ts';

type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello';

type tests = [
	Expect<Equal<YouSayGoodbyeAndISayHello<'hello'>, 'goodbye'>>,
	Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>,
];
