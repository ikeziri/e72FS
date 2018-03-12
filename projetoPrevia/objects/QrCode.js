export class QrCode {
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
    setType(type) {
        this.type = type;
    }
    setData(data) {
        this.data = data;
    }
    toString() {
        return 'QrCode (' +
            'type: ' + this.type + ', ' +
            'data: ' + this.data +')';

    }
}