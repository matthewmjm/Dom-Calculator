console.log("is this on?")
// const $numbers = document.querySelectorAll('span:not(.operator)')
// const $operators = document.querySelectorAll('.operator:not(#clear):not(#equals)')
// const $equal = document.querySelector('#equals')
// const $clear = document.querySelector('#clears')
// const $screen = document.querySelector('#screen')
// const allowedCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '/', '+', '-']

const $ = {
    numbers: document.querySelectorAll('span:not(.operator)'),
    operators: document.querySelectorAll('.operator:not(#clear):not(#equals)'),
    equal: document.querySelector('#equals'),
    clear: document.querySelector('#clear'),
    screen: document.querySelector('#screen'),
}

// const allowedCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '/', '+', '-']

// IIFE (immediately invoked function expression)
!(function startCalculator() {
    [
        attachNumberListeners,
        attachOperatorListeners,
        attachEqualsListeners,
        attachClearListener
    ].forEach(fn => fn.call())
})()

// function startCalculator() {
//     attachNumberListeners()
//     attachOperatorListeners()
//     attachEqualsListeners()
//     attachClearListener()
// }
// startCalculator()


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

// function appendOperatorToScreen(operator) {
    // Conditional Logic
//     switch (operator) {
//         case '+':
//         case '-':
//             $.screen.value += operator 
//         break;
//         case 'x':
//             $.screen.value += '*'
//         break;
//         case '÷':
//             $.screen.value += '/'
//         break;
//     }  
// }

function appendOperatorToScreen(operator) {
    // switch (operator) {
    //     case '+':
    //     case '-':
    //         $.screen.value += operator
    //     break;
    //     case 'x':
    //         $.screen.value += '*'
    //     break;
    //     case '÷':
    //         $.screen.value += '/'
    //     break;
    // }  
// Dynamic Dispatch - looking up what the operator is and evoking it
    // const operations = {
        // "+": function() {
        //     $.screen.value += "+"
        // },               
        // "-": function() {
        //     $.screen.value += "-"
        // },        
        // "x": function() {
        //     $.screen.value += '*'
        // },        
        // "÷": function() {
        //     $.screen.value += '/'
        // }

        // const displayedOperator = {
        //     "+"() {$.screen.value += "+"},               
        //     "-"() {$.screen.value += "-"},         
        //     "x"() {$.screen.value += "*"},        
        //     "÷"() {$.screen.value += "/"}
        // }
        // operations[operator]()
    // }

        //Dictionary lookup
    const displayedOperators = {
        "+": "+",               
        "-": "-",        
        "x": "*",        
        "÷": "/"
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
    // eval is evil
    // return eval(calculation)
    return eval(calculation)
}
 
// function renderTotal() {
//     if (total === Infinity || total === NaN) {
//         $.screen.value = 'Error'
//     } else {
//         $.screen.value = result
//     }
// }

function renderTotal(total) {
    $.screen = total === Infinity || total === NaN ? 'Error' : total
}

function attachClearListener() {
    $.clear.addEventListener('click', clearScreen)
}

function clearScreen() {
    $.screen.value = ''
}

function clearScreen() {
    $.clear.addEventListener('click', () => $.screen.value = '')
}

// function allLegalCharacters(calculation) {
//     calculation.split('').forEach(character => {
//         if (allowedCharacters.find(character) != undefined) {
//             return false
//         }
//     })
//     return true
// }