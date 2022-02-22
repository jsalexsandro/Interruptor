const sio = io(document.URl)

const btn_1 = document.getElementById("btn1")
const btn_2 = document.getElementById("btn2")

btn_1.addEventListener("click",() => { // on
    sio.emit("to_on",(document.getElementById("value").value))
})

btn_2.addEventListener("click",() => {  // off
    sio.emit("to_off",(document.getElementById("value").value))
})

sio.on("on",(port) => {
    if (port == document.getElementById("label").innerText){
        document.getElementById("text").innerText = "Ligado!!"
        document.getElementById("text").style.color = "#000"
        document.getElementById("app").style.backgroundColor = "#fff"
    }   
})

sio.on("off",(port) => {
    if (port == document.getElementById("label").innerText){
        document.getElementById("text").innerText = "Desligado!!"
        document.getElementById("text").style.color = "#fff"
        document.getElementById("app").style.backgroundColor = "#000"
    }   
})