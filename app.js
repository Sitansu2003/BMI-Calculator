const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML(`Please Enter a valid Height ${height}`)
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML(`Please Enter a valid Weight ${weight}`)
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        let category = ''
        
        if(bmi < 18.6){
            category = 'Under Weight (Less than 18.6)'
        } else if(bmi >= 18.6 && bmi <= 24.9){
            category = 'Normal Range (18.6 - 24.9)'
        }else{
            category = 'Overweight (Greater than 24.9)'
        }
        
        // Show the result 
        result.innerHTML = `<span>Your BMI is: <strong>${bmi}</strong></span><br>
        <span>Category: <strong>${category}</strong></span>`
        
    }
})
