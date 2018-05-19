export class Cartao {
    /**
     * 
     * @param {Number} number 
     * @param {Number} verification_value 
     * @param {String} first_name 
     * @param {String} last_name 
     * @param {Number} month 
     * @param {Number} year 
     */
    constructor(number, verification_value, first_name, last_name, month, year) {
        this.number = number;
        this.verification_value = verification_value;
        this.first_name = first_name;
        this.last_name = last_name;
        this.month = month;
        this.year = year;
    }
    toString() {
        return 'Cartao (' +
            'number: ' + this.number + ', ' +
            'verification_value: ' + this.verification_value + ', ' +
            'first_name: ' + this.first_name + ', ' +
            'last_name: ' + this.last_name + ', ' +
            'month: ' + this.month + ', ' +
            'year: ' + this.year + ')';
    }
}