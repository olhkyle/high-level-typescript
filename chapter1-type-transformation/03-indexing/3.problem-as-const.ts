import { Equal, Expect } from "../../helper";

export const Color = {
  Red: "Red",
  Green: "Green",
  Blue: "Blue",
} as const;

enum ColorEnum {
  Red,
  Green,
  Blue,
}

type Red = (typeof Color)["Red"];
type Green = (typeof Color)["Green"];
type Blue = (typeof Color)["Blue"];

type tests = [
  Expect<Equal<Red, "Red">>,
  Expect<Equal<Green, "Green">>,
  Expect<Equal<Blue, "Blue">>
];

type ColorType = keyof typeof Color;
function color(c: ColorType) {}

color(Color.Red);
