
Region = function (name) {
    this.name = name;
    this.maps = [];
}

Region.prototype.get_map_from_id = function (mapid) {
    for (i=0; i<this.maps.length; i++) {
        if (this.maps[i].id == mapid) return i}
    throw("mapid not found in region (" + this.name + ")");
}

var ra = new Region ("");
var rb = new Region ("");
var rc = new Region ("");
var rd = new Region ("");
var re = new Region ("");

var regions = [ra,rb,rc,rd,re];


/* -- Map ------------------------------------------------------------------- */
mapType = function (name) {
    this.name = name;
}

maptypes.TOWN =         mapType("town");
maptypes.FOREST =       mapType("forest");
maptypes.PLAINS =       mapType("plains");
maptypes.MOUNTAIN =     mapType("mountain");
maptypes.PERMAFROST =   mapType("permafrost");
maptypes.CAVE =         mapType("cave");


Map = function (region, name, id, types) {
    this.region =       region;
    this.name =         name;
    this.id =           id;
    this.cells =        [];
    this.types =        types;
    this.submaps =      [];
}

Map.prototype.get_cell:   function (coords) {
    for (i=0; i<this.cells.length; i++) {
        if (this.cells[i].pos == coords) return i;
    return null;
    }
}

Map.prototype.has_cell:   function (coords) {
    if (this.get_cell(coords) ! null) return true;
    return false;
}


/* -- Cell ------------------------------------------------------------------ */
cellType = function (num, name, tagids) {
    this.num =      num;
    this.name =     name;
    this.tagids =   tagids;
}

var HISTORY =       1;
var NATURE =        2;
var WALK =          3;
var DANCING =       4;
var XXX =           5;
var RELAX =         6;
var WORKOUT =       7;
var DINING =        8;
var DRINK =         9;
var ENTERTAINMENT = 10;
var SHOP =          11;
var POTIONS =       12;
var SUNDRIES =      13;
var CLOTHING =      14;
var LINGERIE =      15;
var JEWELRY =       16;

var HOTEL =         30;
var REST =          31;
var LEARNING =      32;
var TRAVEL =        33;

cell = function (pos, type, is_exit) {
    this.type =         type;
    this.flags =        [];
    this.pos =          pos;
    this.is_exit =      [0,0,0,0];      // NESW
}

cell.prototype.get_adjacent_coords = function (x, y) {
        return this.pos[0] + x, this.pos[1]+y
}

cell.prototype.get_move_directions = function (map) {
    return [this._canmove(map, 0, 1, 0, "north"),
            this._canmove(map, 1, 0, 1, "east"),
            this._canmove(map, 0, -1, 2, "south"),
            this._canmove(map, -1, 0, 3, "west")]
}

cell.prototype._canmove = function (map, x, y, num, s) {
        // return s, "exit + s (the direction) -- or 0 (false)
        if (map.has_cell(this.get_adjacent_coords(x, y)) return s;
        else if (this.is_exit[num] ! 0) return "exit " + s;
        else return 0;
}

