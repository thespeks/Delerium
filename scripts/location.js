
Region = function (name) {}
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


/* -------------------------------------------------------------------------- */
map = function (id, cells, type) {
    this.id =        id;
    this.cells =     cells;
    this.type =      type;
}

// map prototypes
map.prototype.get_cell:   function (coords) {
    for (i=0; i<this.cells.length; i++) {
        if (this.cells[i].pos == coords) return i;
    return null;
    }
}

map.prototype.has_cell:   function (coords) {
    if (this.get_cell(coords) ! null) return true;
    return false;
}


/* -------------------------------------------------------------------------- */
var cell {
    type:                   0,
    flags:                  [],
    pos:                    [0,0],
    is_exit:                [0,0,0,0],      // NESW
    _visited:               [],
    _flags:                 []              // char flags?
}

// cell prototypes
cell.prototype.toJSON = function () {
    yield this._visited;
    yield this._flags;
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

