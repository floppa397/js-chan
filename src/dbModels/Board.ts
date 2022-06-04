import Forum from "./Forum";
import HasId from "./utils/HasId";
import {PropName} from "./utils/PropName";

export type BoardKeyDefinition = [PropName<Board, "forumId">, PropName<Board, "id">];
export type BoardKeyValue = [Board["forumId"], Board["id"]];

export interface Board extends HasId<string> {
    readonly forumId: Forum["id"],
    readonly name: string,
    readonly speed?: number,
    readonly bump_limit?: number,
}
