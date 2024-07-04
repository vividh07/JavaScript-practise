const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    
    if(height === '' || height < 0 || isNaN(height)){
       result.innerHTML = "please give a valid Height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "please give a valid Weight"
     }
     else{
     const bmi = (weight/((height*height)/10000)).toFixed(2)
      result.innerHTML = `<span>${bmi}</span>`
     }

     if(bmi > 24.9){
        msg.innerHTML = "You are OverWeight"
     }
     else if(bmi <18.6){
        msg.innerHTML = "You are Under Weight"
     }
     else{
        msg.innerHTML = "You are Perfect"
     }
})