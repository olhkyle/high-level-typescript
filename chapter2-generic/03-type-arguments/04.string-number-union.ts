import { Equal, Expect } from '../../helper';

// T Generic을 number | string 타입으로 좁힐 경우, T는 일반 string 타입 혹은 number 타입의 결과를 반환하는 것이 아닌, 전달한 인자의 literal type 그대로 반환하므로, 이와 같은 타입 좁히기를 통해 반환 값을 제한할 수 있음
export const inferItemLiteral = <T extends number | string>(t: T) => {
	return {
		output: t,
	};
};

const result1 = inferItemLiteral('a');
const result2 = inferItemLiteral(123);

type tests = [Expect<Equal<typeof result1, { output: 'a' }>>, Expect<Equal<typeof result2, { output: 123 }>>];

// @ts-expect-error
const error1 = inferItemLiteral({
	a: 1,
});

// @ts-expect-error
const error2 = inferItemLiteral([1, 2]);
