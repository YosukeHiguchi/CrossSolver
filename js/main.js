(function () {
    $(document).ready(function() {
        //$('g-cube').gcube();
        //$('g-cube').gspeed(10);

        $("#btn_scramble").on('click', function() {
            let str = scrambleGenerator();

            $("g-cube").gscramble(str);
            $("#lbl_scramble").text("scramble: " + str);
        });

        $("#btn_reset").on('click', function() {
            location.reload();
        });
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
}());

