import { Equal, Expect } from '../../helper';

/**
 * Function Overloading
 * - The function allows multiple parameter and return type combinations to be handled using a single function name
 *
 * 1. write several overload signatures (function declarations)
 * 2. write the implementing function signature (actual implementation)
 */

function returnWhatIPassIn(t: 1): 1;
function returnWhatIPassIn(t: 'jun'): 'jun';
function returnWhatIPassIn(t: unknown) {
	return t;
}

const one = returnWhatIPassIn(1);
const jun = returnWhatIPassIn('jun');

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof jun, 'jun'>>];
