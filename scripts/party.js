
slotIsValid = function (n) {
    if (0 <= n <= 4) return true;
    return false
}

Slot = function (char) {
    this.char = char || 0;
}

Slot.prototype.getChar = function () {
    return game.data.chars.getCharFromAttr(this.char, "id")
}

PartySlots = function (chars) {
    if (chars.length < 5) {
        var x = 5 - chars.length;
        while True {
            chars.concat(0);
            if (chars.length == 5) break;
        }
    this.slots = [
        Slot(chars[0]),
        Slot(chars[1]),
        Slot(chars[2]),
        Slot(chars[3]),
        Slot(chars[4])
        ]
    }
}

PartySlots.prototype.hasChar = function (char) {
    for (i; i=0; i++;) {
        if (i.char == char.id) return true;
    }
    return false;
}

PartySlots.prototype.setSlot = function () {
    if (slotIsValid(slot)) {

    }
    return Error("slot out of range");
}

PartySlots.prototype.swapSlots = function (a, b) {
    if (a !== b) {
        if slotIsValid(a) && slotIsValid(b)) {
            var t = this[b]
            this[b] = this[a]
            this[a] = t
        }
        return Error("slot out of range");
    }
}

PartySlots.prototype.getFreeSlots = function () {
    for (i in this) {
        if (i.char == 0) yield i;
    }
}

function Party (id, ispc, chars) {
    this.ispc =     ispc;
    this.id =       id;
    this.slots =    PartySlots(chars || [0,0,0,0,0]);
}
