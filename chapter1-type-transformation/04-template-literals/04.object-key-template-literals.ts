import {Equal, Expect} from "../../helper";

type Key = 'userId' | 'userName' | 'postId' | 'postName' | 'commentId' | 'commentName';
// type ObjectOfKeys = Record<Key, string>

type First = 'user' | 'post' | 'comment';
type Second = 'Id' | 'Name'

type ObjectOfKeys= Record<`${First}${Second}`, string>


type tests = [
    Expect<
        Equal<
            ObjectOfKeys,
            {
                userId: string;
                userName: string;
                postId: string;
                postName: string;
                commentId: string;
                commentName: string;
            }
        >
    >,
];


const delay = (value: unknown) => {
    return new Promise((resolve, reject) => setTimeout(() => resolve(value)), 1000)
}


