
function Party (id, ispc) {
    this.ispc =         ispc;
    this.id =           id;
    this.chars = {
        s1:             0,
        s2:             0,
        s3:             0,
        s4:             0,
        s5:             0
    }
}

Party.prototype.iterSlots = function () {
    yield this.chars.s1;
    yield this.chars.s2;
    yield this.chars.s3;
    yield this.chars.s4;
    yield this.chars.s5;
}

Party.prototype.getSlot = function (idx) {
    switch (idx) {
        case 1: return this.chars.s1; break;
        case 2: return this.chars.s2; break;
        case 3: return this.chars.s3; break;
        case 4: return this.chars.s4; break;
        case 5: return this.chars.s5; break;
    }
}

Party.prototype.freeSlot = function (char) {
    for i in this.iterSlots() {
        if (i == char.id) i = 0;
    }
}

Party.prototype.setSlot = function (idx, char) {
    var tmp = null;
    // check if char already exists in other slot if so swap slots
    for i in this.iterSlots() {
        if (i == char.id) {
            i = 0;
            tmp = i;
        }
    }
    if (tmp != null) tmp = this.getSlot(idx);
    this.getSlot(idx) = char;
}
