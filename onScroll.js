var $ = require('unopinionate').selector;

var bodyScrollers = [];

$(window, document, 'body').bind('scroll touchmove', function() {
    var top = $html[0].scrollTop || $body[0].scrollTop;

    for(var i=0; i<bodyScrollers.length; i++) {
        bodyScrollers[i](top);
    }
});

var onScroll = function() {
    if($.isFunction(arguments[0])) {
        bodyScrollers.push(arguments[0]);
    }
    else {
        $(arguments[0]).bind('scroll touchmove', callback);
    }
};

module.exports = onScroll;