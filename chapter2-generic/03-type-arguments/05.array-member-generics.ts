import { Equal, Expect } from '../../helper';

// 4개 상태로 길이 제한과 동시에 내부의 타입을 좁힐 수 있는 장점
const makeStatus = <TStatuses extends string>(statuses: TStatuses[]) => {
	return statuses;
};

const statuses = makeStatus(['INFO', 'DEBUG', 'ERROR', 'WARNING']);

type tests = [Expect<Equal<typeof statuses, Array<'INFO' | 'DEBUG' | 'ERROR' | 'WARNING'>>>];
