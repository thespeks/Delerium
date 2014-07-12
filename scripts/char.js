// a value of 0 is default (where applicable)
var char {
    // Misc data
    name:               "",
    age:                18,
    personality:        "",
    var location: {
        pos:            [0,0],
        mapid:          0,
        mapid2:         0,
    },
    var stats {
        health:             100,
        energy:             100,
        strn:               20,             // strength
        luck:               20,
        will:               20,             // willpower
        rflx:               50,             // reflex
        agil:               30,             // agility
    },
    var status_effects: {
        drunk:              0,
        poison:             0,
    },
    var clothing {
            tops:           0,
            bottoms:        0,
            undies_top:     0,
            undies_bottom:  0,
            socks:          0,
            shoes:          0,
            glasses:        0,
    },
    var inventory: {
        slots:              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },

    // physical appearance
    var ears =
        type:           0,
        var left = {
            piercing:   0
        },
        var right = {
            piercing:   0
        }

    var eyes = {
        var left = {
            color:      "blue"
        },
        var right = {
            color:      "blue"
        }

    var hair = {
        length:         1,
        color:          "blond",
        style:          ""
    }

    var tongue = {
        piercing:       0,
        length:         1.5,
        color:          "Pink";
    }
    var belly = {
        piercing:       0,      //naval
        tone:           20,
    }




    height:             66,     // in inches
    tone:               20,     // muscle tone
    },

    var jobskills {
        cooking:        0,
        cleaning:       0,
        bartending:     0,
    }

    //toJSON:             function () {
    //}
}
