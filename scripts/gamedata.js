
function PC () {
    this.char =             Char("???", "?", "?", "?");
    this.party =            Party(1, 1);
    this.party.chars.s1 =   this.char.id;
}

function DateTime () {
    this.dt =       [0,0,0,0]; //hour, min, day, week
}

DateTime.prototype.hour =   function () { return this.dt[0] }
DateTime.prototype.minute = function () { return this.dt[1] }
DateTime.prototype.day =    function () { return this.dt[2] }
DateTime.prototype.week =   function () { return this.dt[3] }


function GameData () {
    //this.options = {  // this game local options (reset on new game)
    //    }
    this.datetime       DateTime()
    this.pc =           PC();  // player char
    this.chars =        [];    // all chars met
}

GameData.prototype.iterChars = function () {
    yield this.pc.char;
    for (var i; i=0; i++) yeld i;
}

GameData.prototype.getCharFromAttr = function (x, attr) {
    if (attr == "id" && x == 1) return this.pc.char;
    else if (attr == "id" || "name") {
        for (var i; i=0; i++) {
            if (i[attr] == x) return i;
        }
        throw("no char with that attr")
    }
    else throw("invalid attr: " + attr)
}

GameData.prototype.regChar = function (char) {
    var x = 0;
    if (char.id == 0) { // new char
        for i in gamedata.iterChars {
            if (i.id > x) x = i.id;
        }
    }
    if (x == 0) char.id = 2; // 1 is pc
    else char.id = x + 1;
    gamedata.chars.concat([char])
}



var saved =     true;
var gamedata =  null;

function isSaved () {
    if (gamedata != null) return saved; // whatever state saved is in
    else return true; // nothing to save
}
