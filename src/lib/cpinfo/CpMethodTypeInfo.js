// CONSTANT_MethodType_info {
//     u1 tag;
//     u2 descriptor_index;
// }
export default class CpMethodTypeInfo {
    constructor(tag, descriptor_index) {
        this.tag = tag;
        this.descriptor_index = descriptor_index;

        this.byteLength = 3;
    }
}