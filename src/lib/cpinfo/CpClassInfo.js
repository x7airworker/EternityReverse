// CONSTANT_Class_info {
//     u1 tag;
//     u2 name_index;
// }
export default class CpClassInfo {
    constructor(tag, name_index) {
        this.tag = tag;
        this.name_index = name_index;

        this.byteLength = 3;
    }
}