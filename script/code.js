// Things you will need (weight and height) 
// Formula is weight / height x height = weight / height = BMI results

let btn = document.getElementById('btn')
let resetBtn = document.getElementById('btnReset')

function getResult(){
    let weightInputValue = document.getElementById('weight').value

    let heightInputValue = document.querySelector('#height').value

    let bmiSum = (weightInputValue / ((heightInputValue * heightInputValue) / 10000)).toFixed(2)

    document.getElementById('cal').textContent = bmiSum

    let results = document.getElementById('output')

    if(bmiSum < 18.5){
        results.textContent = 'You are underweight 😶‍🌫️'
        output.style.color = 'red'
    } else if(bmiSum < 24.9){
        output.textContent = 'You are in the healthy range 💪'
        output.style.color = 'green'
    } else if(bmiSum < 29.9){
        output.textContent = 'You are overweight 😔'
        output.style.color = 'orange'
    } else if(bmiSum > 30.0){
        output.textContent = 'You are in the obese range 🫣'
        output.style.color = 'red'
    }
}

function resetInput(){
    let clearOutput = document.getElementById('output')
    let clearNum = document.getElementById('cal')
    let weightInput = document.getElementById('weight')
    let heightInput = document.getElementById('height')
    clearOutput.textContent = ''
    clearNum.textContent = ''
    weightInput.value = ''
    heightInput.value = ''
}



