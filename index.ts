import fs from "fs"

let Font = require("fonteditor-core").Font
var buffer = fs.readFileSync('3f219bb4.woff');

let inflate_daddy = require("./pako_inflate.min")


var font = Font.create(buffer, {
    type: 'woff', // support ttf,woff,eot,otf,svg
    inflate: inflate_daddy.inflate
});

console.log(font.data.cmap);
