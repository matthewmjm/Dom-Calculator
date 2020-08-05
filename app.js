document.addEventListener("DOMContentLoaded", () => {
    const screen = document.querySelector('#screen-container')
    const numbers = document.querySelectorAll("span:not(.operator)")
    const operators = document.querySelectorAll(".operator")

    numbers.forEach(number => {
        number.addEventListener("click", event => {
            screen.textContent += event.target.textContent
        })
    })

    operators.forEach(operator => {
        operator.addEventListener("click", event => {
            const screenCharacters = screen.textContent.split("")
            const lastCharacter = screenCharacters[screenCharacters.length - 1]
            if (event.target.textContent === "C"){
                screen.textContent = ""
                return true
            }
            if (event.target.textContent === "=") {
                screen.textContent = eval(screen.textContent)
                return true
            }
            if (event.target.textContent === "x") {
                screen.textContent += "*"
                return true
            }
            if (event.target.textContent === "÷") {
                screen.textContent += "/"
                return true
            }
            if (/[0-9]/.test(lastCharacter)) {
                screen.textContent += event.target.textContent
            }
        })
    })

})





