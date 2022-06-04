import {InstalledEngines} from "../network/InstalledEngines";
import HasId from "./utils/HasId";

export default interface Forum extends HasId<number> {
    readonly engine: keyof InstalledEngines,
    readonly domain: string,
    readonly name: string,
}
