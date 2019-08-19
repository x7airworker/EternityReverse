// CONSTANT_Utf8_info {
//     u1 tag;
//     u2 length;
//     u1 bytes[length];
// }
export default class CpUtf8Info {
    constructor(tag, length, bytes) {
        this.tag = tag;
        this.length = length;
        this.bytes = bytes;

        this.byteLength = 3 + bytes.length;
    }
}