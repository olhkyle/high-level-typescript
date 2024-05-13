import {Equal, Expect } from "../../helper";

interface Attributes {
    firstName: string;
    lastName: string;
    age: number;
}



// type NewAttributesKeys = `get${Capitalize<keyof Attributes>}`;
//
// type NewAttributes = Record<NewAttributesKeys, string>;
//
// type NewAttributeGetters = {[K in keyof NewAttributes]: () => NewAttributes[K]}


type AttributeGetters = { [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K]}


type tests = [
    Expect<
        Equal<
            AttributeGetters,
            {
                getFirstName: () => string;
                getLastName: () => string;
                getAge: () => number;
            }
        >
    >
];
