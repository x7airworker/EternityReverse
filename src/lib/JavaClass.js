import ByteUtil from "./ByteUtil";

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

    readMinorVersion() {
        return this.byteUtil.readShort(4);
    }

    readMajorVersion() {
        return this.byteUtil.readShort(6);
    }

    readConstantPoolCount() {
        return this.byteUtil.readShort(8);
    }

    readConstantPool() {
        const poolCount = this.readConstantPoolCount() - 1;
        for (let i = 0; i < poolCount; i++) {
            const byte = this.byteUtil.get(8 + i);
            console.log(byte);
        }
    }

    isMajorVersionSupported() {
        // Java SDK 5.0
        return this.readMajorVersion() > 49;
    }
}