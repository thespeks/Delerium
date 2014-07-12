function combineArray(a) {
    // Combine 2 or more arrays into a single array
    var x = a[0].concat(a[1]);
    if (a.length > 2) {
        for (i=2; i<a.length; i++) x.concat(i);
    }
    return x;
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
