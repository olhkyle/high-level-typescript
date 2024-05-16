const intFunction = (int: number) => int;

const strFunction = (str: string) => str;

const objFunction = (obj: Record<any, unknown>) => obj;

const boolFunction = (bool: boolean) => bool;

const genericFunction = <T>(arg: T) => arg;

genericFunction<string>('1');