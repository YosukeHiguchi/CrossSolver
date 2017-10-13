
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

const SCRAMBLE = [
    "R", "L", "U", "D", "F", "B",
    "R'", "L'", "U'", "D'", "F'", "B'",
    "R2", "L2", "U2", "D2", "F2", "B2"
];

const COMMAND = [
    "R", "L", "U", "D", "F", "B", "M", "X", "Y",
    "R'", "L'", "U'", "D'", "F'", "B'", "M'", "x", "y",
    "R2", "L2", "U2", "D2", "F2", "B2", "M2", "X2", "Y2"
];



function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}