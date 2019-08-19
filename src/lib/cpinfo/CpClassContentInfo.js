// CONSTANT_Fieldref_info {
//     u1 tag;
//     u2 class_index;
//     u2 name_and_type_index;
// }
//
// CONSTANT_Methodref_info {
//     u1 tag;
//     u2 class_index;
//     u2 name_and_type_index;
// }
//
// CONSTANT_InterfaceMethodref_info {
//     u1 tag;
//     u2 class_index;
//     u2 name_and_type_index;
// }
export default class CpClassContentInfo {
    constructor(tag, class_index, name_and_type_index) {
        this.tag = tag;
        this.class_index = class_index;
        this.name_and_type_index = name_and_type_index;

        this.byteLength = 5;
    }
}