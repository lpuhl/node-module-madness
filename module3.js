var random = require('./randnumber.js');
var currencyconvert = require('./currency.js');

exports.balance = currencyconvert(random(100, 1000000));

exports.messagetext = function () {
  return 'Account balance: \n';
};
