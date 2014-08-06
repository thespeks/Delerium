
function DateTime () {
    this.dt =       [0,0,0,0]; //hour, min, day, week
}

DateTime.prototype.hour =   function () { return this.dt[0] }
DateTime.prototype.minute = function () { return this.dt[1] }
DateTime.prototype.day =    function () { return this.dt[2] }
DateTime.prototype.week =   function () { return this.dt[3] }


function PC () {
    this.char =             Char("???", "?", "?", "?");
    this.party =            Party(1, 1);
    this.party.chars.s1 =   this.char.id;
}

GameChars function () {
    this.pc =           new PC();
    this.chars =        [];
    this.toJSON =       function () {
        yield this.pc;
        yield this.chars;
        }

    this.iterChars =    function () {
        yield this.pc.char; // pc is always first
        for (var i; i=0; i++) yield i;
    }

    this.getCharFromAttr = function (x, attr) {
        if (attr == "id" && x == 1) return this.pc.char;
        else if (attr == "id" || "name") {
            for (var i; i=0; i++) {
                if (i[attr] == x) return i;
            }
            throw("no char with that attr")
        }
        else throw("invalid attr: " + attr)
    }

    this.regChar = function (char) {
        var x = 0;
        for i in this.iterChars {
            if (i.id > x) x = i.id; // grab highest id
        }
        if (x == 0) char.id = 2; // 1 is pc
        else char.id = x + 1;
        this.chars.concat([char]);
    }
}

var DEFAULT_DISABLED_FETS = [];

var game {
    saved:          true,
    data:           null;
    saveGame =      function () {
        if data != null {
            
        }
    }
    loadGame =      function () {
        if (this.saved == true) {
        
            
        }
        else {
    }
    newGame =       function () {
        if (this.saved == true){
            
        }
    }
}

function GameData () {
    this.datetime           new DateTime();
    this.chars =            new GameChars();
    this.options.disabled_fets = [];
    this.flags.glob =       []; // global flags
    this.flags.evt =        []; // event flags
    }
}

savePrompt = function () {
    this.text = "You have unsaved progress. Do you want to save?.";
    this.ok = "yes";
    this.cancel = "cancel";
    this.userchoice = null;
}

