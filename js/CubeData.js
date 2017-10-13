var CubeData = (function() {
    var CubeData = function() {
        var _cube = [
            //[0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 2, 3, 4, 5, 6, 7, 8],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [2, 2, 2, 2, 2, 2, 2, 2, 2],
            [3, 3, 3, 3, 3, 3, 3, 3, 3],
            [4, 4, 4, 4, 4, 4, 4, 4, 4],
            //[0, 1, 2, 3, 4, 5, 6, 7, 8],
            [5, 5, 5, 5, 5, 5, 5, 5, 5]
        ];
        var _copy = [];

        Object.defineProperties(this, {
            cube: {
                get: function () {
                    return _cube;
                },
                set: function (x) {
                    _cube = x;
                }
            },
            copy: {
                get: function () {
                    return _copy;
                },
                set: function (x) {
                    _copy = x;
                }
            }
        });
    }

    var p = CubeData.prototype;
    p.twist = function (cmd) {
        switch(cmd) {
            case "R":
                this.R();
                break;
            case "L":
                this.L();
                break;
            case "U":
                this.U();
                break;
            case "R'":
                for (var i = 0; i < 3; i++) this.R();
                break;
            case "L'":
                for (var i = 0; i < 3; i++) this.L();
                break;
            case "U'":
                for (var i = 0; i < 3; i++) this.U();
                break;
        }
    }


    p.R = function () {
        console.log("before");
        this.dumpCube();

        this.copyArray();

        this.swap(0, 6, 1, 6); this.swap(0, 7, 1, 7); this.swap(0, 8, 1, 8);
        this.swap(3, 6, 0, 6); this.swap(3, 7, 0, 7); this.swap(3, 8, 0, 8);
        this.swap(5, 6, 3, 6); this.swap(5, 7, 3, 7); this.swap(5, 8, 3, 8);
        this.swap(1, 6, 5, 6); this.swap(1, 7, 5, 7); this.swap(1, 8, 5, 8);

        this.swap(2, 0, 2, 6); this.swap(2, 1, 2, 3);
        this.swap(2, 2, 2, 0); this.swap(2, 5, 2, 1);
        this.swap(2, 8, 2, 2); this.swap(2, 7, 2, 5);
        this.swap(2, 6, 2, 8); this.swap(2, 3, 2, 7);

        console.log("after");
        this.dumpCube();
    }

    p.L = function () {
        console.log("before");
        this.dumpCube();

        this.copyArray();

        this.swap(0, 0, 3, 0); this.swap(0, 1, 3, 1); this.swap(0, 2, 3, 2);
        this.swap(1, 0, 0, 0); this.swap(1, 1, 0, 1); this.swap(1, 2, 0, 2);
        this.swap(5, 0, 1, 0); this.swap(5, 1, 1, 1); this.swap(5, 2, 1, 2);
        this.swap(3, 0, 5, 0); this.swap(3, 1, 5, 1); this.swap(3, 2, 5, 2);

        this.swap(4, 0, 4, 6); this.swap(4, 1, 4, 3);
        this.swap(4, 2, 4, 0); this.swap(4, 5, 4, 1);
        this.swap(4, 8, 4, 2); this.swap(4, 7, 4, 5);
        this.swap(4, 6, 4, 8); this.swap(4, 3, 4, 7);

        console.log("after");
        this.dumpCube();
    }

    p.U = function () {
        console.log("before");
        this.dumpCube();

        this.copyArray();

        this.swap(1, 2, 2, 0); this.swap(1, 5, 2, 1); this.swap(1, 8, 2, 2);
        this.swap(4, 8, 1, 2); this.swap(4, 7, 1, 5); this.swap(4, 6, 1, 8);
        this.swap(3, 0, 4, 6); this.swap(3, 3, 4, 7); this.swap(3, 6, 4, 8);
        this.swap(2, 0, 3, 6); this.swap(2, 1, 3, 3); this.swap(2, 2, 3, 0);

        this.swap(0, 0, 0, 6); this.swap(0, 1, 0, 3);
        this.swap(0, 2, 0, 0); this.swap(0, 5, 0, 1);
        this.swap(0, 8, 0, 2); this.swap(0, 7, 0, 5);
        this.swap(0, 6, 0, 8); this.swap(0, 3, 0, 7);

        console.log("after");
        this.dumpCube();
    }

    p.copyArray = function () {
        this.copy = [];
        for (var i = 0; i < 6; i++) {
            var ary = [];
            for (var j = 0; j < 9; j++) {
                ary.push(this.cube[i][j]);
            }
            this.copy.push(ary);
        }
    }

    p.swap = function (i, j, u, v) {
        this.cube[i][j] = this.copy[u][v];
    };

    p.dumpCube = function () {
        var str = "                 ";
        for (var i = 0; i < 9; i++) {
            str += this.cube[4][i] + "  ";
            if (i % 3 == 2) {
                console.log(str);
                str = i + "                ";
            }
        }

        for (var u = 0; u < 3; u++) {
            str = "      ";
            for (var i = 0 + u * 3; i < 3 + u * 3; i++) {
                str += this.cube[1][i] + "  ";
            }
            str += " ";
            for (var i = 0 + u * 3; i < 3 + u * 3; i++) {
                str += this.cube[0][i] + "  ";
            }
            str += " ";
            for (var i = 0 + u * 3; i < 3 + u * 3; i++) {
                str += this.cube[3][i] + "  ";
            }
            str += " ";
            for (var i = 0 + u * 3; i < 3 + u * 3; i++) {
                str += this.cube[5][i] + "  ";
            }
            console.log(u + str);
        }

        str = "                 ";
        for (var i = 0; i < 9; i++) {
            str += this.cube[2][i] + "  ";
            if (i % 3 == 2) {
                console.log(str);
                str = i + "                ";
            }
        }
    }

    return CubeData;
})();
