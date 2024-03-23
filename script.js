let text = document.getElementById("text");

text.addEventListener("input", ()=>{
    localStorage.setItem("saveText", text.value);
   
})
text.value = localStorage.getItem("saveText");


//For Color
let colorBtn = document.getElementById("colorBtn");
let color = ["lightgreen","voilet","blue","yellow","lightgreen","lemon"];
var index = 0;

colorBtn.addEventListener("click", colorFunction);
  
function colorFunction(){
    if(index === color.length){
        index = 0;
    }
    text.style.backgroundColor = color[index];
    index++;
}
