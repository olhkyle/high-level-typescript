import { expect, it } from 'vitest';
import { Equal, Expect } from '../../helper';

// Object의 key에는 string, number, symbol 타입만 들어갈 수 있으며, TKey는 현재 string 타입만 받고 있는 상황이므로, extends를 활용하여 타입을 좁혀준다.
const typedObjectKeys = <TKey extends string>(obj: Record<TKey, any>) => {
	return Object.keys(obj) as Array<TKey>;
};

it('Should return the keys of the object', () => {
	const result1 = typedObjectKeys({
		a: 1,
		b: 2,
	});

	expect(result1).toEqual(['a', 'b']);

	type test = Expect<Equal<typeof result1, Array<'a' | 'b'>>>;
});
