// CONSTANT_NameAndType_info {
//     u1 tag;
//     u2 name_index;
//     u2 descriptor_index;
// }
export default class CpNameAndTypeInfo {
    constructor(tag, name_index, descriptor_index) {
        this.tag = tag;
        this.name_index = name_index;
        this.descriptor_index = descriptor_index;

        this.byteLength = 5;
    }
}