document.addEventListener("DOMContentLoaded", function () {
    const resultButton = document.querySelector("#resultButton");
    const resetButton = document.querySelector("#resetButton");

    resultButton.addEventListener("click", function () {
        const num1 = parseFloat(document.querySelector("#firstNum").value);
        const num2 = parseFloat(document.querySelector("#secondNum").value);
        const operation = document.querySelector("#operation").value;

        let result;
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if(num2 == 0){
                result = "Error"
                }else{
                    result = num1 / num2;
                }
                break;
            default:
                result = "Invalid operation";
        }

        document.querySelector("#result").textContent = result;
    });

    resetButton.addEventListener("click", function () {
        location.reload();
    });
});
