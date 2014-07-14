
function lengthInRange(x, min, max) {
    // return true if x is between min and max length
    if (min <= x.length <= max) return true;
    return false;
}

function swapIndex(a, b, array) {
    // swap the positions of two items a, b in given array
    var x = array[a];
    array[a] = array[b];
    array[b] = x;
}

function clamp(x, min, max) {
    if (x < min) return min;
    else if (x > max) return max;
    else return x;
}


/* ---- Random -------------------------------------------------------------- */
function randFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randChoice(choices) {
    return array_of_choices[randInt(0, array_of_choices.length)];
}


/* ---- String -------------------------------------------------------------- */
function joinString(array_of_strs, sep) {
    /* (like string.join in python)
    * joins each item with given separator in between.
    * equavelent to "item1" + sep " "item2" + sep + "item2" ...
    */
    var x = ""
    if (sep == "" || null) {
        for (i=0; i<array_of_strs.length; i++) x += array_of_strs[i];
    }
    else {
        var len = array_of_strs.length
        for (i=0; i<len; i++) {
            if (i == len) x += array_of_strs[i]
            else x += array_of_strs[i] + sep;
        }
    }
    return x;
}
