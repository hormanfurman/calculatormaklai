const form = document.querySelector('form'),
      inputs = document.querySelectorAll('input'),
      select = document.querySelector('select'),
      result = document.querySelector('.result');

function calc(value1, value2) {
    switch (select.value) {
        case '+':
            result.innerHTML = Math.round(value1 + value2);
            break;
        case '-':
            result.innerHTML = Math.round(value1 - value2);
            break;
        case '/':
            result.innerHTML = Math.round(value1 / value2);
            break;
        case '*':
            result.innerHTML = Math.round(value1 * value2);
            break;
    }

    clear();
}

function clear() {
    inputs[0].value = '';
    inputs[1].value = '';
}

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        e.target.value = value.replace(/[^.\d]+/g,"").replace( /^([^\.]*\.)|\./g, '$1' );
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(inputs[0].value === '' || inputs[1].value === '') {
        clear();
        alert('PLEASE FILL IN BOTH INPUT FIELDS')
    } else {
        calc(+inputs[0].value, +inputs[1].value);
    }
    
})

