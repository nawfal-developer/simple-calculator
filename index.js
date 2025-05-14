
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "Ac") {
            currentInput = "";
        } else if (value === "⌫") {
            currentInput = currentInput.slice(0, -1);
        } else if (value === "=") {
            try {
                const expression = currentInput
                    .replace(/÷/g, "/")
                    .replace(/x/g, "*");
                currentInput = eval(expression).toString();
            } catch {
                currentInput = "Error";
            }
        } else {
            currentInput += value;
        }

        display.textContent = currentInput || "0";
    });
});
