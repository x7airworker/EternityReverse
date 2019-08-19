// CONSTANT_Long_info {
//     u1 tag;
//     u4 high_bytes;
//     u4 low_bytes;
// }
//
// CONSTANT_Double_info {
//     u1 tag;
//     u4 high_bytes;
//     u4 low_bytes;
// }
export default class CpQwordInfo {
    constructor(tag, high_bytes, low_bytes) {
        this.tag = tag;
        this.high_bytes = high_bytes;
        this.low_bytes = low_bytes;

        this.byteLength = 9;
    }
}