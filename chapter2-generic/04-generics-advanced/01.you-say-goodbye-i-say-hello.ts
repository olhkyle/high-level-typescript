import { expect, it } from 'vitest';
import { Equal, Expect } from '../../helper';

// 단순 union 타입으로 추론되는 것이 아닌, 특정 값에 따라 특정 결과 타입이 추론되도록 결과의 type을 더 좁혀주어 유도
type GreetingResult<TArg> = TArg extends 'hello' ? 'goodbye' : 'hello';

function youSayGoodbyeISayHello<TArg extends 'hello' | 'goodbye'>(greeting: TArg) {
	return (greeting === 'goodbye' ? 'hello' : 'goodbye') as GreetingResult<TArg>;
}

it('Should return goodbye when hello is passed in', () => {
	const result = youSayGoodbyeISayHello('hello');

	type test = [Expect<Equal<typeof result, 'goodbye'>>];

	expect(result).toEqual('goodbye');
});

it('Should return hello when goodbye is passed in', () => {
	const result = youSayGoodbyeISayHello('goodbye');

	type test = [Expect<Equal<typeof result, 'hello'>>];

	expect(result).toEqual('hello');
});
