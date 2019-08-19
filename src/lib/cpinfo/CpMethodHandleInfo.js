// CONSTANT_MethodHandle_info {
//     u1 tag;
//     u1 reference_kind;
//     u2 reference_index;
// }
export default class CpMethodHandleInfo {
    constructor(tag, reference_kind, reference_index) {
        this.tag = tag;
        this.reference_kind = reference_kind;
        this.reference_index = reference_index;

        this.byteLength = 4;
    }
}