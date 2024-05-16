import {Equal, Expect} from "../../helper";

// 타입 인자 선언 위치
// arrow function : const func = <T1, T2> (params: { a: T1, b: T2 }) => {}
// type alias : type TypeEx<T1,T2> = { data: T1, error: T2 }

type CreateDataShape<T1, T2> = {
    data: T1;
    error: T2;
};

type tests = [
    Expect<
        Equal<
            CreateDataShape<string, TypeError>,
            {
                data: string;
                error: TypeError;
            }
        >
    >,
    Expect<
        Equal<
            CreateDataShape<number, Error>,
            {
                data: number;
                error: Error;
            }
        >
    >,
    Expect<
        Equal<
            CreateDataShape<boolean, SyntaxError>,
            {
                data: boolean;
                error: SyntaxError;
            }
        >
    >,
];
