console.log("is this on?")

const $ = {
    numbers: document.querySelectorAll('span:not(.operator)'),
    operators: document.querySelectorAll('.operator:not(#clear):not(#equals)'),
    equal: document.querySelector('#equals'),
    clear: document.querySelector('#clear'),
    screen: document.querySelector('#screen'),
}

!(function startCalculator() {
    [
        attachNumberListeners,
        attachOperatorListeners,
        attachEqualsListeners,
        attachClearListener,
    ].forEach(fn => fn.call())
})()

function attachNumberListeners() {
    $.numbers.forEach($number => {
        $number.addEventListener('click', event => { 
            appendNumberToScreen(event.target.textContent)
        })
    })
}

function appendNumberToScreen(number) {
    $.screen.value += number
}

function attachOperatorListeners() {
    $.operators.forEach($operator => {
        $operator.addEventListener('click', event => {
            appendOperatorToScreen(event.target.textContent)
        })
    })
}

function appendOperatorToScreen(operator) {
    const displayedOperators = {
        "+": "+",               
        "-": "-",        
        "x": "*",        
        "÷": "/",
    }
    $.screen.value += displayedOperators[operator]
}

function attachEqualsListeners() {
    $.equal.addEventListener('click', () => renderTotal(calculateTotal()));
    document.addEventListener('keyup', event => {
        if (event.key === 'Enter') {
            renderTotal(calculateTotal())
        }
    })
}

function calculateTotal() {
    const calculation = $.screen.value
    return eval(calculation)
}
 
function renderTotal(total) {
    $.screen.value = (total === Infinity || total === NaN) ? 'Error' : total
}

function attachClearListener() {
    $.clear.addEventListener('click', clearScreen)
}

function clearScreen() {
    $.screen.value = ''
}


