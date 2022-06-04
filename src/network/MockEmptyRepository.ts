import {Board} from "../dbModels/Board";
import Forum from "../dbModels/Forum";
import {Post} from "../dbModels/Post";
import {Thread} from "../dbModels/Thread";
import ForumRepository from "./ForumRepository";

export default class MockEmptyRepository implements ForumRepository {
    defaultDomains: string[] = [];
    engineName: string = "Empty Repository";

    async getBoards(forum: Forum): Promise<Board[]> {
        return [];
    }

    async getThreads(forum: Forum, board: Board): Promise<Thread[]> {
        return [];
    }

    async getPosts(forum: Forum, board: Board, thread: Thread): Promise<Post[]> {
        return [];
    }
}
