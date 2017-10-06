(function () {
    $(document).ready(function() {

        assignTasks();

    });

    function assignTasks() {
        $("#btn_scramble").on('click', scramble);

        $("#btn_solve").on('click', solve);

        $("#btn_reset").on('click', reset);



        $(document).on("keydown", function (e) {
            let inv = 0;

            if (event.shiftKey) {
                inv = 7;
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

                //M
                case 77:
                    $("g-cube").gtwist(command[6 + inv]);
                    break;
            }

            return;
        });
    }
}());

