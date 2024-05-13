import {Equal, Expect} from "../../helper";

type Route =
    | {
    route: "/";
    search: {
        page: string;
        perPage: string;
    };
}
    | { route: "/about"; search: {} }
    | { route: "/admin"; search: {} }
    | { route: "/admin/users"; search: {} };

type Ro = Route['route'];
type Search = Route['search']

type RoutesObject1 = { [R in Route['route']]: Search }
// {page: string; perPage: string} 그리고 {}라는 개별의 명시적인 타입으로 지정되는 것이 아니라,
// union 타입으로 지정되어 문제가 발생

type RoutesObject = { [R in Route as R['route']]: R['search'] }

type tests = [
    Expect<
        Equal<
            RoutesObject,
            {
                "/": {
                    page: string;
                    perPage: string;
                };
                "/about": {};
                "/admin": {};
                "/admin/users": {};
            }
        >
    >,
];
