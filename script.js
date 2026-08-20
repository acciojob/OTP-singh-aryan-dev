//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach(function (input, index) {

    // Typing
    input.addEventListener("input", function () {

        if (input.value !== "" && index < codes.length - 1) {
            codes[index + 1].focus();
        }

    });

    // Backspace
    input.addEventListener("keydown", function (event) {

        if (event.key === "Backspace") {

            if (index > 0) {
                codes[index - 1].focus();
            }

        }

    });

});