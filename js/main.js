(function () {
    var cd;

    $(document).ready(function() {

        cd = new CubeData();

        init();

    });

    function init() {
        $("#btn_scramble").on('click', scramble);

//        $("#btn_solve").on('click', solve);

        $("#btn_reset").on('click', reset);



        $(document).on("keydown", function (e) {
            var inv = 0;
            var cmdlen = COMMAND.length / 3;

            if (event.shiftKey) {
                inv = cmdlen;
            }

            switch(e.keyCode) {
                //R
                case 82:
                    cd.twist(COMMAND[0 + inv]);
                    $("g-cube").gtwist(COMMAND[0 + inv]);
                    break;

                //L
                case 76:
                    cd.twist(COMMAND[1 + inv]);
                    $("g-cube").gtwist(COMMAND[1 + inv]);
                    break;

                //U
                case 85:
                    cd.twist(COMMAND[2 + inv]);
                    $("g-cube").gtwist(COMMAND[2 + inv]);
                    break;

                //D
                case 68:
                    $("g-cube").gtwist(COMMAND[3 + inv]);
                    break;

                //F
                case 70:
                    $("g-cube").gtwist(COMMAND[4 + inv]);
                    break;

                //B
                case 66:
                    $("g-cube").gtwist(COMMAND[5 + inv]);
                    break;

                //M
                case 77:
                    $("g-cube").gtwist(COMMAND[6 + inv]);
                    break;

                //up
                case 38:
                    e.preventDefault();
                    $("g-cube").gtwist(COMMAND[7]);
                    break;
                //down
                case 40:
                    e.preventDefault();
                    $("g-cube").gtwist(COMMAND[7 + cmdlen]);
                    break;

                //left
                case 37:
                    e.preventDefault();
                    $("g-cube").gtwist(COMMAND[8]);
                    break;
                //right
                case 39:
                    e.preventDefault();
                    $("g-cube").gtwist(COMMAND[8 + cmdlen]);
                    break;

            }

            return;
        });
    }
}());

