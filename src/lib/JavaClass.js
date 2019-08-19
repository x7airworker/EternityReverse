import ByteUtil from "./ByteUtil";
import CpInfo from "./cpinfo/CpInfo";

const MAGIC_NUMBER = 0xCAFEBABE;

// const JAVA_VERSIONS = {
//     //ignore older versions, because they are unsupported
//     49: "Java SE 5.0",
//     50: "Java SE 6.0",
//     51: "Java SE 7",
//     52: "Java SE 8",
//     53: "Java SE 9",
//     54: "Java SE 10",
//     55: "Java SE 11",
//     56: "Java SE 12",
//     57: "Java SE 13",
// };

export default class JavaClass {
    constructor(name, bytes) {
        this.name = name;
        this.byteUtil = new ByteUtil(bytes);
    }

    decompile() {
        if (!this.decompiled) {
            //decompile logic
            if (this.hasMagicNumber()) {
                this.internals = {};
                this.internals.magic = this.readMagicNumber();
                this.internals.minor_version = this.byteUtil.readShort(4);
                this.internals.major_version = this.byteUtil.readShort(6);
                this.internals.constant_pool_count = this.byteUtil.readShort(8);
                this.internals.constant_pool = this.readConstantPool();
                let byteLength = 8;
                this.internals.constant_pool.forEach(cpInfo => byteLength += cpInfo.byteLength);
                this.internals.access_flags = this.byteUtil.readShort(byteLength);
                this.internals.this_flags = this.byteUtil.readShort(byteLength + 2);
                this.internals.super_class = this.byteUtil.readShort(byteLength + 4);
                this.internals.interfaces_count = this.byteUtil.readShort(byteLength + 6);

                this.decompiled = "Source Code!";
            } else {
                throw "Not a valid Java-Class file!";
            }
        }
    }

    hasMagicNumber() {
        return this.readMagicNumber() === MAGIC_NUMBER;
    }

    readMagicNumber() {
        return this.byteUtil.readInt32(0);
    }

    readConstantPool() {
        const poolCount = this.internals.constant_pool_count - 1;
        const cpInfos = [];
        let byte = 10;
        for (let i = 0; i < poolCount; i++) {
            let cpInfo = new CpInfo(byte, this.byteUtil);
            cpInfo = cpInfo.getCpInfoType();
            cpInfos.push(cpInfo);
            byte += cpInfo.byteLength;
        }

        return cpInfos;
    }

    isMajorVersionSupported() {
        // Java SDK 5.0
        return this.readMajorVersion() > 49;
    }
}