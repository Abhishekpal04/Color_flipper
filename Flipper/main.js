const body = document.getElementsByTagName("body")[0]

function setColor(name){
    body.style.backgroundColor = name;
}
function randomColor(){
    const red = Math.round(Math.random()*255+1)
    const yellow = Math.round(Math.random()*255+1)
    const blue = Math.round(Math.random()*255+1)

    const color = `rgb(${red},${yellow},${blue})`
    body.style.backgroundColor = color;
}