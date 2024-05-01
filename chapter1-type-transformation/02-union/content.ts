// Discriminated Union
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
      d: string;
    };

type B = "A" | "B" | "C";

enum C {
  a = 0,
  b = 1,
  c = 2,
}

interface Square {
  type: "square";
  size: number;
}

interface Rectangle {
  type: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

const getArea = (shape: Shape) => {
  if (shape.type === "square") {
    return shape.size * shape.size;
  } else {
    return shape.width * shape.height;
  }
};
