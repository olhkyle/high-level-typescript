import { Equal, Expect } from "../../helper";

export const Color = {
  Red: "red",
  Green: "green",
  Blue: "blue",
} as const;

type ColorType = typeof Color;

// type RedAndBlue = ColorType["Red"] | ColorType["Blue"];
type RedAndBlue = ColorType["Red" | "Blue"];

type tests = [Expect<Equal<RedAndBlue, "red" | "blue">>];
