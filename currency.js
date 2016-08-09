var currencyconvert = function toUSD(number) {
    var number = number.toString(),
    dollars = number.split('.')[0],
    dollars = dollars.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    return '$' + dollars;
};

module.exports = currencyconvert;
