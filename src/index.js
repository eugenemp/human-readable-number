module.exports = function toReadable (number) {

    const strOne = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine'
    ];

    const strTwo = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    const strThree = [
        'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if(number.toString().length === 1) {
        return strOne[number];

    } else if(number.toString().length === 2) {
        if(number < 20) return strTwo[number - 10];

        if(number > 19 && number % 10 === 0) return strThree[number / 10 - 2];

        if(number > 19) {
            return strThree[Math.floor(number / 10) -2] + ' ' + strOne[number % 10];
        };

    } else if(number.toString().length === 3 && number % 100 === 0) {
        return strOne[Math.floor(number / 100)] + ' hundred';

    } else if(number.toString().length === 3) {
        return strOne[Math.floor(number / 100)] + ' hundred ' + toReadable(number % 100);

    };
}
