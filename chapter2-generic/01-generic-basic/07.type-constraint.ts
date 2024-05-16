import {Equal, Expect} from "../../helper";

// extends 키워드로 type 제한
// rest parameters를 활용하여 인자를 전달 받을 수 있고, 안받을 수도 있도록 함

type GetParametersAndReturnType<T extends (...args: any) => any> = {
    params: Parameters<T>;
    returnValue: ReturnType<T>;
};

type tests = [
    Expect<
        Equal<
            GetParametersAndReturnType<() => string>,
            { params: []; returnValue: string }
        >
    >,
    Expect<
        Equal<
            GetParametersAndReturnType<(s: string) => void>,
            { params: [string]; returnValue: void }
        >
    >,
    Expect<
        Equal<
            GetParametersAndReturnType<(n: number, b: boolean) => number>,
            { params: [number, boolean]; returnValue: number }
        >
    >,
];
