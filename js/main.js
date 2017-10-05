(function () {
    $(document).ready(function() {

        assignTasks();

    });

    function scrambleGenerator() {
        let len = command.length;
        let bef = "", ret = "";

        for (let i = 0; i < 25; i++) {
            let c;
            do {
                c = command[randomInt(0, len)];
            } while (bef.length != 0 && bef == c);

            ret += c + " ";
            bef = c;
        }

        return ret;
    }

    function assignTasks() {
        $("#btn_scramble").on('click', function() {
            let str = scrambleGenerator();

            $("g-cube").gscramble(str);
            $("#lbl_scramble").text("scramble: " + str);
        });

        $("#btn_reset").on('click', function() {
            location.reload();
        });

        $(document).on("keydown", function (e) {
            let inv = 0;

            if (event.shiftKey) {
                inv = 6;
            }

            switch(e.keyCode) {
                //R
                case 82:
                    $("g-cube").gtwist(command[0 + inv]);
                    break;
                    
                //L
                case 76:
                    $("g-cube").gtwist(command[1 + inv]);
                    break;

                //U
                case 85:
                    $("g-cube").gtwist(command[2 + inv]);
                    break;

                //D
                case 68:
                    $("g-cube").gtwist(command[3 + inv]);
                    break;

                //F
                case 70:
                    $("g-cube").gtwist(command[4 + inv]);
                    break;

                //B
                case 66:
                    $("g-cube").gtwist(command[5 + inv]);
                    break;
            }

            return;
        });
    }
}());

