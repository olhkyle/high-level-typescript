import {Equal, Expect} from "../../helper";

export const Color = {
    Red: "red",
    Green: "green",
    Blue: "blue",
} as const;

type ColorType = typeof Color;

type RedGreenBlueValue = ColorType[keyof ColorType]

type tests = [
    Expect<Equal<RedGreenBlueValue, "red" | "blue" | "green">>
];


