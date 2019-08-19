// CONSTANT_Integer_info {
//     u1 tag;
//     u4 bytes;
// }
//
// CONSTANT_Float_info {
//     u1 tag;
//     u4 bytes;
// }
export default class CpDwordInfo {
    constructor(tag, bytes) {
        this.tag = tag;
        this.bytes = bytes;

        this.byteLength = 5;
    }
}