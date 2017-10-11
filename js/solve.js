/*
       [4]
    [1][0][3][5]
       [2]

      /0＼
     |＼/|
     |1|2|
      \|/

    [0][1][2]
    [3][4][5]
    [6][7][8]

color: yellow = 0
       blue = 1
       red = 2
       green = 3
       orange = 4
       white = 5
*/

var cube = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
];
var copy = [];

function solve() {
    $("g-cube").gtwist("y");
//    $("g-cube").gtwist("L U L' U L U U L' U");
}

function R() {
    dumpCube();
    copyArray();

    swap(0, 6, 1, 6); swap(0, 7, 1, 7); swap(0, 8, 1, 8);
    swap(3, 6, 0, 6); swap(3, 7, 0, 7); swap(3, 8, 0, 8);
    swap(5, 6, 3, 6); swap(5, 7, 3, 7); swap(5, 8, 3, 8);
    swap(1, 6, 5, 8); swap(1, 7, 5, 7); swap(1, 8, 5, 6);

    dumpCube();
}

function swap(i, j, u, v) {
    cube[i][j] = copy[u][v];
};

function copyArray() {
    copy = [];
    for (var i = 0; i < 6; i++) {
        var ary = [];
        for (var j = 0; j < 9; j++) {
            ary.push(cube[i][j]);
        }
        copy.push(ary);
    }
}

function dumpCube() {
    var str = "                           ";
    for (var i = 0; i < 9; i++) {
        str += cube[4][i] + "  ";
        if (i % 3 == 2) {
            console.log(str);
            str = i + "                          ";
        }
    }

    for (var u = 0; u < 3; u++) {
        str = "      ";
        for (var i = 0 + u * 3; i < 3 + u * 3; i++) {
            str += cube[1][i] + "  ";
        }
        str += " ";
        for (var i = 0 + u * 3; i < 3 + u * 3; i++) {
            str += cube[0][i] + "  ";
        }
        str += " ";
        for (var i = 0 + u * 3; i < 3 + u * 3; i++) {
            str += cube[3][i] + "  ";
        }
        str += " ";
        for (var i = 0 + u * 3; i < 3 + u * 3; i++) {
            str += cube[5][i] + "  ";
        }
        console.log(u + str);
    }

    var str = "                           ";
    for (var i = 0; i < 9; i++) {
        str += cube[2][i] + "  ";
        if (i % 3 == 2) {
            console.log(str);
            str = i + "                          ";
        }
    }
    console.log("");
}
