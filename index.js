const name = document.getElementById("greet")
const color = document.getElementById("red")
const color1 = document.getElementById("blue")
const color2 = document.getElementById("green")
const color3 = document.getElementById("yellow")
let txt = document.getElementById("txt")

function red(){
color.style.backgroundColor = "red"
}
function blue(){
color1.style.backgroundColor = "blue"
txt.style.color= 'blue'

  
}

function green(){
color2.style.backgroundColor = "green"
txt.style.color= 'green'
}
function yellow(){
color3.style.backgroundColor = "yellow"

}

let txt1;

function btn(){
txt1 = txt.value;   
  greet.innerText = "Hello , " + txt1;
}

function handleDoubleClick() {
    txt.style.color = 'black'
}
color1.addEventListener("dblclick", handleDoubleClick);
console.log(handleDoubleClick)

