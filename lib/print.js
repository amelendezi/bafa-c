define(['jquery'],function ($) {
    return function print(msg) {                
        $('#main').innerHtml('<h3>Message</h3><p>' + msg + '</p>');
    };
});