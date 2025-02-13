import { expect, it } from "vitest";
import {Equal, Expect} from "../../helper";

const array = [
    {
        name: "Park",
    },
    {
        name: "Kim",
    },
];

// Usage of Generic
const obj = array.reduce<Record<string, {name: string}>>((accum, item) => {
    accum[item.name] = item;
    return accum;
}, {});


// type assertion
const obj2 = array.reduce((acc, item) => {
    acc[item.name] = item;
    return acc;
}, {} as Record<string, {name: string}>)

it("Should resolve to an object where name is the key", () => {
    expect(obj).toEqual({
        Park: {
            name: "Park",
        },
        Kim: {
            name: "Kim",
        },
    });

    type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});
