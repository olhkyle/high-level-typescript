const func = () => {
  return "string";
};

const func2 = (foo: string, obj: { bar: number; bas: string }): void => {};

const getUser = () => {
  return Promise.resolve({ id: 1, name: "steve", age: 12 });
};

type MyFuncReturnType = ReturnType<typeof func>;
type MyFuncParameterType = Parameters<typeof func2>; // It will return Tuple type (Tuple has confirmed length )
type GetUserReturnType = Awaited<ReturnType<typeof getUser>>;
