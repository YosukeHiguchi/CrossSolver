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