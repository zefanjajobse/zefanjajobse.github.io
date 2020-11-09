const calculator = document.querySelector("#calculator");
const output = document.querySelector("#output")

calculator.addEventListener("click", function(event){
    if (event.target.className == "button") {
        if (event.target.textContent == "=") {
            output.textContent = eval(output.textContent)
        } else {
            output.textContent += event.target.textContent
        }
    } else if (event.target.id == "output") {
        output.textContent = ""
    }
})

