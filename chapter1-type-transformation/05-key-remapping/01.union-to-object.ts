import { Equal, Expect } from "../../helper";

type Route = "/" | "/about" | "/admin" | "/admin/users";


// in 이라는 키워드를 활용해 마치 JS의 for...in 문과 같이 union 타입을 순회하는 방법을 활용
type RoutesObject = { [K in Route] : K };

type tests = [
    Expect<
        Equal<
            RoutesObject,
            {
                "/": "/";
                "/about": "/about";
                "/admin": "/admin";
                "/admin/users": "/admin/users";
            }
        >
    >,
];
