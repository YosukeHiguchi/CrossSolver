function scramble() {
    let str = scrambleGenerator();

    $("g-cube").gscramble(str);
    $("#lbl_scramble").text("scramble: " + str);
}

function scrambleGenerator() {
    let len = SCRAMBLE.length;
    let bef = "", ret = "";

    for (let i = 0; i < 25; i++) {
        let c;
        do {
            c = SCRAMBLE[randomInt(0, len)];
        } while (bef.length != 0 && bef == c);

        ret += c + " ";
        bef = c;
    }

    return ret;
}