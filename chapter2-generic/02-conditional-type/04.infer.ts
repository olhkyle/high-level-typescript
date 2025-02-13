import { Equal, Expect } from '../../helper';

// 'infer' keywords should be utilized with 'extends'
// In typespace, 'extends' is used when we make conditional type
type GetDataValue<T> = T extends { data: infer T2 } ? T2 : never;

type tests = [
	Expect<Equal<GetDataValue<{ data: 'hello' }>, 'hello'>>,
	Expect<Equal<GetDataValue<{ data: { name: 'hello' } }>, { name: 'hello' }>>,
	Expect<Equal<GetDataValue<{ data: { name: 'hello'; age: 20 } }>, { name: 'hello'; age: 20 }>>,
	// Expect that if you pass in string, it
	// should return never
	Expect<Equal<GetDataValue<string>, never>>,
];
