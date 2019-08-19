// CONSTANT_String_info {
//     u1 tag;
//     u2 string_index;
// }
export default class CpStringInfo {
    constructor(tag, string_index) {
        this.tag = tag;
        this.string_index = string_index;

        this.byteLength = 3;
    }
}