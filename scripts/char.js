
var stat_proto {
    name:                   null,
    current:                0,
    base:                   0,
    _sv:               function (val , targ, clamp) {
        if (!clamp) this.target = val;
        else this.target = clamp(val, 0, 100);
    }
}
// a value of 0 is default (where applicable)
function char (name, age, personality) {
    // Misc data
    this.name =             name;
    this.age =              age;
    this.personality =      personality;
    this.location = {
        region:             0,
        pos:                [0,0],
        mapid:              0,
        mapid2:             0
    }
    this.stats = {
        health:             100,
        energy:             100,
        strn:               20,             // strength
        luck:               20,
        will:               20,             // willpower
        rflx:               50,             // reflex
        agil:               30              // agility
    }
    this.statuses = {
        drunk:              0,
        poison:             0,
    }
    this.clothing = {
            tops:           0,
            bottoms:        0,
            undies_top:     0,
            undies_bottom:  0,
            socks:          0,
            shoes:          0,
            glasses:        0
    }
    this.inventory = {
        slots:              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }

    // physical appearance
    this.ears =
        type:           0,
        left = {
            piercing:   0
        },
        right = {
            piercing:   0
        }

    this.eyes = {
        left = {
            color:      "blue"
        },
        right = {
            color:      "blue"
        }

    this.hair = {
        length:         1,
        color:          "blond",
        style:          ""
    }

    this.tongue = {
        piercing:       0,
        length:         1.5,
        color:          "Pink";
    }
    this.belly = {
        piercing:       0,      //naval
        tone:           20
    }




    this.height =       66;     // in inches
    this.tone =         20;     // muscle tone
    }

    this.jobskills {
        cooking:        0,
        cleaning:       0,
        bartending:     0
    }

    //toJSON:             function () {
    //}
}



// location prototypes
char.location.prototype.getmap = function() {
    if (this.mapid2 > 0) return this.region.mapid.mapid2;
    return this.region.mapid.mapid2;
}


// inventory prototypes
char.inventory.prototype.is_valid = function(i) {
    if (0 <= slot_index <= 9) return true;
    return false;
}

char.inventory.prototype.set_slot = function (slot_index, value) {
    if (this.is_valid(slot_index)) slots[slot_index] = value;
}

char.inventory.prototype.get_free_slot = function () {
    for (var slot in this.slots) {
        if this.slots[slot] == 0: return slot;
    return null;
}

char.inventory.prototype.swap_slot = function (a, b) {
    if (this.is_valid(a) && this.is_valid(b)) {
        var temp = this.slots[b];
        this.slots[b] = this.slots[a];
        this.slots[a] = temp;
}
