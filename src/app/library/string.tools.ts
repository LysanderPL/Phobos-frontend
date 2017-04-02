/**
 * Created by maciej on 02.04.17.
 */
export class StringTools {
    public static addslashes(str) {
        return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0')
    }
}