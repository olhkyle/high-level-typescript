import {Equal, Expect} from "../../helper";

// discriminated union
type Fruit =
    | {
    name: "apple";
    color: "red";
}
    | {
    name: "banana";
    color: "yellow";
}
    | {
    name: "orange";
    color: "orange";
};



// union type을 object의 key에 넣을 수 없다. -> string/number/symbol만 가능
type Text = { [R in Fruit as Fruit['name']]: `${R['name']}:${R['color']}`}[Fruit['name']]

type TransformedFruit = keyof { [R in Fruit as `${R['name']}:${R['color']}`] : R }

type tests = [
    Expect<
        Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
    >,
];
