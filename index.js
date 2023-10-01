const btn = document.getElementById('btn')

function calculateBMI({ weight, height }) {
    return (weight / ((height/100) ** 2)).toFixed(1)
}

function categorizeBMIValue(value) {
    const Category = {
        'obesity': 30,
        "overweight": 25,
        "Normal": 18.5,
    }
    if (value >= Category.obesity) return 'Obesity'
    if (value >= Category.overweight) return 'Overweight'
    if (value >= Category.Normal) return 'Normal'
    else return "Underweight"
}

function showResult({ BMIResult, BMIValue }) {
    const result = document.getElementById("result")
    const BMIValueStr = "<span class='bold'>" + BMIValue + "</span>"
    const BMIResultStr = "<span class='bold'>" + BMIResult + "</span>"

    result.innerHTML = "Your BMI is " + BMIValueStr + " which means You are " + BMIResultStr

}

function validateInput({weight,height}){
    if((!isNaN(weight+height)) && weight > 0 && height > 0) return true
    return false
}

btn.addEventListener('click', () => {
    const weight = parseInt(document.getElementById("weight").value)
    const height = parseInt(document.getElementById("height").value)

    if(!validateInput({weight,height})){
        const warning = document.getElementById("result")
        warning.innerHTML = "Input must be positive and a number!"
        return
    }
    
    const BMIValue = calculateBMI({ height, weight })
    const BMIResult = categorizeBMIValue(BMIValue)
    showResult({ BMIResult, BMIValue })

})