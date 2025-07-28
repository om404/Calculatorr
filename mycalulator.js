const display = document.querySelector("#hh > h1");
let expression = "";
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            try {
                expression = eval(expression);
                display.textContent = expression;
            } catch {
                display.textContent = "Error";
                expression = "";
            }
        } else if (value === "C") {
            expression = "";
            display.textContent = "";
        } else {
            expression += value;
            display.textContent = expression;
        }
    });
});
