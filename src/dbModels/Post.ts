import {Board} from "./Board";
import Forum from "./Forum";
import {Thread} from "./Thread";
import HasId from "./utils/HasId";
import {PropName} from "./utils/PropName";

export type PostKeyDefinition = [
    PropName<Post, "forumId">,
    PropName<Post, "boardId">,
    PropName<Post, "threadId">,
    PropName<Post, "id">,
];
export type PostKeyValue = [Post["forumId"], Post["boardId"], Post["threadId"], Post["id"]];

export interface Post extends HasId<number> {
    readonly forumId: Forum["id"],
    readonly boardId: Board["id"],
    readonly threadId: Thread["id"],
    readonly text: string,
}
