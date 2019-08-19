// CONSTANT_InvokeDynamic_info {
//     u1 tag;
//     u2 bootstrap_method_attr_index;
//     u2 name_and_type_index;
// }
export default class CpInvokeDynamicInfo {
    constructor(tag, bootstrap_method_attr_index, name_and_type_index) {
        this.tag = tag;
        this.bootstrap_method_attr_index = bootstrap_method_attr_index;
        this.name_and_type_index = name_and_type_index;

        this.byteLength = 5;
    }
}