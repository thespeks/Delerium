
// a value of 0 is default (where applicable)

/* ---- Location ------------------------------------------------------------ */
CharLoc = function () {
    this.region =       0;
    this.pos =          [0,0];
    this.mapid:         0;
    this.mapid2:        0;
}

// location prototypes
CharLoc.prototype.getMap = function () {
    if (this.mapid2 > 0) return this.getRegion().maps[mapid]
    return this.getRegion().maps[mapid]
}

CharLoc.prototype.getRegion = function () {
    return regions[this.region]
}


/* ---- Inventory ----------------------------------------------------------- */
CharInv = function () {
    this.slots =              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

// inventory prototypes
CharInv.prototype.is_valid = function(i) {
    if (0 <= slot_index <= 9) return true;
    return false;
}

CharInv.prototype.set_slot = function (slot_index, value) {
    if (this.is_valid(slot_index)) slots[slot_index] = value;
}

CharInv.prototype.get_free_slot = function () {
    for (var slot in this.slots) {
        if this.slots[slot] == 0: return slot;
    return null;
}

CharInv.prototype.swap_slot = function (a, b) {
    if (this.is_valid(a) && this.is_valid(b)) {
        var temp = this.slots[b];
        this.slots[b] = this.slots[a];
        this.slots[a] = temp;
}

/* ---- Equip --------------------------------------------------------------- */
CharEquip = function () {
    this.tops =             0;
    this.bottoms =          0;
    this.undies_top =       0;
    this.undies_bottoms =   0;
    this.socks =            0;
    this.gloves =           0;
    this.shoes =            0;
    this.glasses =          0;
    this.collar =           0;
    this.necklace =         0;

    this.left_hand =        0;
    this.right_hand =       0;
}

CharEquip.prototype.iterClothing = function () {
    yield this.tops;
    yield this.bottoms;
    yield this.undies_top;
    yield this.undies_bottoms;
}


/* ---- Char ---------------------------------------------------------------- */
Char = function (name, age, personality, species, types, handedness) {
    // Misc data
    this.name =             name;
    this.age =              age;
    this.personality =      personality;
    this.race =             race;
    this.types =            types;
    this.handedness =       handedness; // left or right

    this.loc =              CharLoc();
    this.inventory =        CharInv();
    this.equip =            CharEquip();

    this.stats =            race.stats;     // 
    this.stats.health =     100;            // 
    this.stats.energy =     100;            // 
    this.statusres =        race.statres;   // status resistance
    this.statuses = {
        cursed:             0,
        drunk:              0,
        poison:             0,
        paralyze:           0,
        preg:               0,
        season:             0
    }
    this.skills =           new Skills();

    // physical appearance
    this.height =       66;     // in inches
    this.tone =         20;     // muscle tone
    this.skin.color =   "light";
    
    this.ears.left.piercing = 0;
    this.ears.right.piercing = 0;

    this.eyes.left.color = "blue"
    this.eyes.right.color = "blue"


    this.hair = {
        length:         1,
        color:          "blond",
        style:          ""
    }

    this.tongue = {
        piercing:       0,
        length:         1.5,
        color:          "Pink"
    }
    
    this.belly = {
        piercing:       0,      //naval
        tone:           20
    }

    this.jobskills {
        cooking:        0,
        cleaning:       0,
        bartending:     0
    }

}


var stat_proto {
    name:                   null,
    current:                0,
    base:                   0,
    _sv:               function (val , targ, clamp) {
        if (!clamp) this.target = val;
        else this.target = clamp(val, 0, 100);
    }
}

