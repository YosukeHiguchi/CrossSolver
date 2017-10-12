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
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    //[4, 4, 4, 4, 4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
];
var copy = [];

function solve() {
    $("g-cube").gtwist("y");
//    $("g-cube").gtwist("L U L' U L U U L' U");
}

function R() {
    console.log("before");
    dumpCube();

    copyArray();

    swap(0, 6, 1, 6); swap(0, 7, 1, 7); swap(0, 8, 1, 8);
    swap(3, 6, 0, 6); swap(3, 7, 0, 7); swap(3, 8, 0, 8);
    swap(5, 6, 3, 6); swap(5, 7, 3, 7); swap(5, 8, 3, 8);
    swap(1, 6, 5, 8); swap(1, 7, 5, 7); swap(1, 8, 5, 6);

    swap(2, 0, 2, 6); swap(2, 1, 2, 3);
    swap(2, 2, 2, 0); swap(2, 5, 2, 1);
    swap(2, 8, 2, 2); swap(2, 7, 2, 5);
    swap(2, 6, 2, 8); swap(2, 3, 2, 7);

    console.log("after");
    dumpCube();
}

function L() {
    console.log("before");
    dumpCube();

    copyArray();

    swap(0, 0, 3, 0); swap(0, 1, 3, 1); swap(0, 2, 3, 2);
    swap(1, 0, 0, 0); swap(1, 1, 0, 1); swap(1, 2, 0, 2);
    swap(5, 0, 1, 0); swap(5, 1, 1, 1); swap(5, 2, 1, 2);
    swap(3, 0, 5, 0); swap(3, 1, 5, 1); swap(3, 2, 5, 2);

    swap(4, 0, 4, 6); swap(4, 1, 4, 3);
    swap(4, 2, 4, 0); swap(4, 5, 4, 1);
    swap(4, 8, 4, 2); swap(4, 7, 4, 5);
    swap(4, 6, 4, 8); swap(4, 3, 4, 7);

    console.log("after");
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
    var str = "                 ";
    for (var i = 0; i < 9; i++) {
        str += cube[4][i] + "  ";
        if (i % 3 == 2) {
            console.log(str);
            str = i + "                ";
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

    str = "                 ";
    for (var i = 0; i < 9; i++) {
        str += cube[2][i] + "  ";
        if (i % 3 == 2) {
            console.log(str);
            str = i + "                ";
        }
    }
}
