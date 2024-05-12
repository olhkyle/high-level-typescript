import {Equal, Expect} from "../../helper";

const rgb = ["red", "green", "blue"] as const;

// type RedAndGreen = typeof rgb[0] | typeof rgb[1];
type RedAndGreen = typeof rgb[0 | 1];
type RGB = typeof rbg[number];

type tests = [
    Expect<Equal<RedAndGreen, "red" | "green">>,
    Expect<Equal<RGB, "red" | "green" | "blue">>,
];
