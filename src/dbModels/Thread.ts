import {Board} from "./Board";
import Forum from "./Forum";
import HasId from "./utils/HasId";
import {PropName} from "./utils/PropName";

export type ThreadKeyDefinition = [PropName<Thread, "forumId">, PropName<Thread, "boardId">, PropName<Thread, "id">];
export type ThreadKeyValue = [Thread["forumId"], Thread["boardId"], Thread["id"]];

export interface Thread extends HasId<number> {
    readonly forumId: Forum["id"],
    readonly boardId: Board["id"],
}
