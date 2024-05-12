import {Equal, Expect } from "../../helper";

type Event = `log_in` | "log_out" | "sign_up";

type Upper= Uppercase<Event>;
// Uppercase -> LOG_IN
// Lowercase -> log_in
// Capitalize : log_in -> Log_in
// Uncapitalize : LOG_in -> lOG_IN



type ObjectOfKeys = Record<Upper, string>;

type tests = [
    Expect<
        Equal<
            ObjectOfKeys,
            {
                LOG_IN: string;
                LOG_OUT: string;
                SIGN_UP: string;
            }
        >
    >,
];
