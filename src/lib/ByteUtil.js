export default class ByteUtil {
    constructor(bytes) {
        this.bytes = bytes;
    }

    get(pos) {
        return this.bytes[pos];
    }

    readInt32(from) {
        return ByteUtil.toInt32(this.bytes.slice(from, from + 4));
    }

    readShort(from) {
        return ByteUtil.toShort(this.bytes.slice(from, from + 2));
    }

    readLong(from) {
        return ByteUtil.toLong(this.bytes.slice(from, from + 8));
    }

    static toLong(byteArray) {
        return byteArray[0] * (1 << 24) + byteArray[1] * (1 << 16) + byteArray[2] * (1 << 8) + byteArray[3] * (1 << 0) + byteArray[4] * (1 << 24) + byteArray[5] * (1 << 16) + byteArray[6] * (1 << 8) + byteArray[7];
    }

    static toInt32(byteArray) {
        return byteArray[0] * (1 << 24) + byteArray[1] * (1 << 16) + byteArray[2] * (1 << 8) + byteArray[3];
    }

    static toShort(byteArray) {
        return byteArray[0] * (1 << 8) + byteArray[1];
    }
}