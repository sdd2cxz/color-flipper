const btn = document.getElementById("btn");
const inputfield = document.getElementById('input')
const showColors = document.getElementById('show-colors')
let textColor = document.getElementById("text")

let colorArray = ["black","red", "blue", "yellow"]

colorArray = JSON.parse(localStorage.getItem('color'))

function changeColor(){
    document.body.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)]
    if(document.body.style.backgroundColor == "black"){
        
        text.style.color = "white"
        
    }
    else{
        text.style.color = "black"
    }
    console.log(document.body.style.backgroundColor)
    //console.log(text.style.color)
}
const color = document.getElementById('btn')
const input = document.getElementById('disable')
color.addEventListener('click', function(e) {
    if(input.style.display === "none"){
        input.style.display = "block"
    }else{
        
        input.style.display = "none"
    }
    
    console.log(input.style.display)
    //e.target.style.visibility = "hidden"
})
function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor.toLowerCase();
  }

function addColor(){
 if(!isColor(inputfield.value)){
    console.log('e')
 }
 else{
     colorArray.push(inputfield.value)
     localStorage.setItem('color', JSON.stringify(colorArray))
     location.reload()
     console.log(colorArray)
    }
    
        
    
}


function removeColors(){
    colorArray = []
    localStorage.setItem('color', JSON.stringify(colorArray))
    location.reload()
}
showColors.innerText = colorArray
