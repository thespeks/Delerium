// add Array.isArray if not available
if(!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}


function TextLines (scrollback) = {
    this.lines =        [];
    this.scrollback =   scrollback;
}

TextLines.prototype.addlines = function (lines) {
    if (Array.isArray(lines)) this.lines.concat(lines);
    else this.lines.concat([lines]);
    this.trim(this.get_sbdiff)
}

TextLines.prototype.get_sbdiff = function () {
    return this.lines.length - this.scrollback;
}

TextLines.prototype.trim = function (n) {
    // trim lines from beginning of array
    if (n > 0) this.lines.splice(0, n); 
}

TextLines.prototype.clear = function () {
    this.lines = []
}

