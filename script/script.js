const array_num = Array.from(Array(10).keys());
const array_uppr = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
);
const array_low = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("a".charCodeAt(0) + i)
);
let num1 = 0;

$(document).ready(function () {
    // get input value - string length
    $("#number").change(function () {
        num1 = Number($("#number").val());
    });

    // start the function by pressing the button
    $("button").click(function () {
        let result = "";
        let main_array = [];

        //check 1
        if (num1 == 0) {
            alert("Enter string length!");
        } else {
            // get checkbox value
            if ($("#check1").is(":checked")) {
                main_array = main_array.concat(array_num);
            }
            if ($("#check2").is(":checked")) {
                main_array = main_array.concat(array_uppr);
            }
            if ($("#check3").is(":checked")) {
                main_array = main_array.concat(array_low);
            }

            // check 2
            if (main_array.length == 0) {
                alert(
                    "Choose which characters are allowed to occur in the strings"
                );
            }

            // iterate over the resulting array and get the result
            for (let i = 0; i < num1; i++) {
                result +=
                    main_array[Math.floor(Math.random() * main_array.length)];
            }

            // render result
            $("#result").val(result);
        }
    });
});
