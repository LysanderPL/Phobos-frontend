/**
 * Created by maciej on 02.04.17.
 */
export abstract class AbstractEntity {
    public fromJSON(json:Object): this {
        for (let propName in json) {
            //noinspection JSUnfilteredForInLoop
            this[propName] = json[propName]
        }
        return this;
    }
}