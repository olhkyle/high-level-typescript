// null과 undefined를 제외한 모든 타입이 들어올 수 있도록 함
// {} empty object를 활용하여 제한할 수 있다.

export type Maybe<T extends {}> = T;

type tests = [
    // @ts-expect-error
    Maybe<null>,
    // @ts-expect-error
    Maybe<undefined>,

    Maybe<string>,
    Maybe<false>,
    Maybe<0>,
    Maybe<"">,
];
