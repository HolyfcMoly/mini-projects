window.addEventListener("DOMContentLoaded", () => {
    function flipTo(digit, num) {
        const current = digit.getAttribute("data-num");
        digit.setAttribute("data-num", num);
        digit.querySelector(".front").setAttribute("data-content", current);
        digit.querySelectorAll(".back, .under").forEach((el) => {
            el.setAttribute("data-content", num);
        });
        digit.querySelectorAll(".flap").forEach((el) => {
            el.style.display = "block";
        });
        setTimeout(() => {
            digit.querySelectorAll(".base").forEach((el) => {
                el.textContent = num;
            });
            digit.querySelectorAll(".flap").forEach((el) => {
                el.style.display = "none";
            });
        }, 350);
    }

    function jumpTo(digit, num) {
        digit.setAttribute("data-num", num);
        digit.querySelectorAll(".base").forEach((el) => {
            el.textContent = num;
        });
    }

    function updateGroup(group, num, flip) {
        const digit1 = document.querySelector(".ten" + group);
        const digit2 = document.querySelector("." + group);
        num = String(num);
        if (num.length == 1) num = "0" + num;
        const num1 = num.substr(0, 1);
        const num2 = num.substr(1, 1);

        if (digit1.getAttribute("data-num") != num1) {
            if (flip) flipTo(digit1, num1);
            else jumpTo(digit1, num1);
        }
        if (digit2.getAttribute("data-num") != num2) {
            if (flip) flipTo(digit2, num2);
            else jumpTo(digit2, num2);
        }
    }

    function setTime(flip) {
        const time = new Date();
        updateGroup("hour", time.getHours(), flip);
        updateGroup("min", time.getMinutes(), flip);
        updateGroup("sec", time.getSeconds(), flip);
    }

    function start() {
        setTime(false);
        setInterval(() => {
            setTime(true);
        }, 1000);
    }

    start();
});
