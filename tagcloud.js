/*
 * A JavaScript implementation to create a tag cloud from a text.
 * Version 1.0 Copyright (C) Johann Vivot 2012
 */

// Class TagCloud
var TagCloud = function (text) {
    this.text = text;
}

TagCloud.prototype.clean_text = function () {
    var s = this.text.replace(/[\.,-\/#!\?$%\^&\*;:{}=\-_`~()]/g,'');
    var cleaned_text = s.replace(/\s{2,}/g,' ');

    return cleaned_text;
}

TagCloud.prototype.split_text = function () {
    var cleaned_text = this.clean_text();

    return cleaned_text.split(' ');
}

TagCloud.prototype.generate_cloud = function () {
    var splited_text = this.split_text();
    var dict = {};

    for (var i = 0; i < splited_text.length; i++){
        if (dict[splited_text[i]] == undefined) {
            dict[splited_text[i]] = 1;
        } else {
            dict[splited_text[i]]++;
        }
    }

    return dict;
}