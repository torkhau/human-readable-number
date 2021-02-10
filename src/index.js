const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const teens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
module.exports = function toReadable(number) {
    if (0 <= number && number <= 19) {
        return numbers[number];
    }
    const str = String(number);
    let res = '';
    if (str.length === 2) {
        res += teens[Number(str[0]) - 2];
        if (str[1] !== '0') {
            res += ' ' + numbers[Number(str[1])];
        }
    } else if (str.length === 3) {
        res += toReadable(Number(str[0])) + ' hundred';
        if (str.substring(1) !== '00') {
            res += ' ' + toReadable(Number(str.substring(1)))
        }
    }
    return res;
}
