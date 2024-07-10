// generating a random number
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0 ; i < 6 ; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalID;
const startChangingColor = function(){
 
  intervalID =   setInterval(chnageBgColor,1000)
   function chnageBgColor(){
    document.body.style.backgroundColor = randomColor()
   }

}



const stopChangingColor = function(){
    clearInterval(intervalID)
    intervalID = null;
}


document.querySelector("#start").addEventListener
('click',startChangingColor)

document.querySelector("#stop").addEventListener
('click',stopChangingColor)