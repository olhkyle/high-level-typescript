import {Equal, Expect} from "../../helper";


// optional generics
// default parameter처럼 default type을 지정

type CreateDataShape<TData, TError = undefined> = {
    data: TData;
    error: TError;
};

type tests = [
    Expect<
        Equal<
            CreateDataShape<string>,
            {
                data: string;
                error: undefined;
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
