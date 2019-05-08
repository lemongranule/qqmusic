
const APIKit = global.APIKit || {};

APIKit.init = function() {

};

require('./album')(APIKit);

module.exports = APIKit;