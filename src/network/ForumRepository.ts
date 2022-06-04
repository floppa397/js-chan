import {Board} from "../dbModels/Board";
import Forum from "../dbModels/Forum";
import {Post} from "../dbModels/Post";
import {Thread} from "../dbModels/Thread";

export default interface ForumRepository {
    engineName: string,
    defaultDomains: string[],

    getBoards: (forum: Forum) => Promise<Board[]>
    getThreads: (forum: Forum, board: Board) => Promise<Thread[]>
    getPosts: (forum: Forum, board: Board, thread: Thread) => Promise<Post[]>
}
