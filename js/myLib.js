const command = [
    "R", "L", "U", "D", "F", "B", "M",
    "R'", "L'", "U'", "D'", "F'", "B'", "M'",
    "R2", "L2", "U2", "D2", "F2", "B2", "M2"
];

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}