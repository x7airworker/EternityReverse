import CpClassInfo from './CpClassInfo';
import CpClassContentInfo from "./CpClassContentInfo";
import CpStringInfo from "./CpStringInfo";
import CpDwordInfo from "./CpDwordInfo";
import CpQwordInfo from "./CpQwordInfo";
import CpNameAndTypeInfo from "./CpNameAndTypeInfo";
import CpUtf8Info from "./CpUtf8Info";
import CpMethodHandleInfo from "./CpMethodHandleInfo";
import CpMethodTypeInfo from "./CpMethodTypeInfo";
import CpInvokeDynamicInfo from "./CpInvokeDynamicInfo";

const CONSTANT_Class = 7;
const CONSTANT_Fieldref = 9;
const CONSTANT_Methodref = 10;
const CONSTANT_InterfaceMethodref = 11;
const CONSTANT_String = 8;
const CONSTANT_Integer = 3;
const CONSTANT_Float = 4;
const CONSTANT_Long = 5;
const CONSTANT_Double = 6;
const CONSTANT_NameAndType = 12;
const CONSTANT_Utf8 = 1;
const CONSTANT_MethodHandle = 15;
const CONSTANT_MethodType = 16;
const CONSTANT_InvokeDynamic = 18;

export default class CpInfo {
    constructor(startByte, byteUtil) {
        this.startByte = startByte;
        this.byteUtil = byteUtil;
    }

    /* eslint-disable */
    getCpInfoType() {
        const tag = this.byteUtil.get(this.startByte);

        let name_index;
        let bytes;
        let descriptor_index;
        switch (tag) {
            case CONSTANT_Class:
                name_index = this.byteUtil.readShort(this.startByte + 1);
                return new CpClassInfo(tag, name_index);
            case CONSTANT_Fieldref:
            case CONSTANT_Methodref:
            case CONSTANT_InterfaceMethodref:
                const class_index = this.byteUtil.readShort(this.startByte + 1);
                const name_and_tpe_index = this.byteUtil.readShort(this.startByte + 3);
                return new CpClassContentInfo(tag, class_index, name_and_tpe_index);
            case CONSTANT_String:
                const string_index = this.byteUtil.readShort(this.startByte + 1);
                return new CpStringInfo(tag, string_index);
            case CONSTANT_Integer:
            case CONSTANT_Float:
                bytes = this.byteUtil.readInt32(this.startByte + 1);
                return new CpDwordInfo(tag, bytes);
            case CONSTANT_Long:
            case CONSTANT_Double:
                const high_bytes = this.byteUtil.readInt32(this.startByte + 1);
                const low_byts = this.byteUtil.readInt32(this.startByte + 5);
                return new CpQwordInfo(tag, high_bytes, low_byts);
            case CONSTANT_NameAndType:
                name_index = this.byteUtil.readShort(this.startByte + 1);
                descriptor_index = this.byteUtil.readShort(this.startByte + 3);
                return new CpNameAndTypeInfo(tag, name_index, descriptor_index);
            case CONSTANT_Utf8:
                const length = this.byteUtil.readShort(this.startByte + 1);
                bytes = [];
                for (let i = 0; i < length; i++) {
                    bytes.push(this.byteUtil.readShort(this.startByte + 3 + i));
                }
                return new CpUtf8Info(tag, length, bytes);
            case CONSTANT_MethodHandle:
                const reference_kind = this.byteUtil.get(this.startByte + 1);
                const reference_index = this.byteUtil.readShort(this.startByte + 2);
                return new CpMethodHandleInfo(tag, reference_kind, reference_index);
            case CONSTANT_MethodType:
                descriptor_index = this.byteUtil.readShort(this.startByte + 1);
                return new CpMethodTypeInfo(tag, descriptor_index);
            case CONSTANT_InvokeDynamic:
                const boostrap_method_attr_index = this.byteUtil.readShort(this.startByte + 1);
                const name_and_type_index = this.byteUtil.readShort(this.startByte + 3);
                return new CpInvokeDynamicInfo(tag, boostrap_method_attr_index, name_and_type_index);
        }
    }
}