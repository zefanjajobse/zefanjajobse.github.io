let listItems = Array.from(document.querySelectorAll(".list_item"));
listItems.forEach(element => {
    let paragraphs = element.querySelectorAll("p");
    let result = paragraphs[1].textContent.substring(9,99);
    if (result == "nog te doen") {
        
    } else if (result == "gestart") {
        element.classList.add("started")
    } else if (parseFloat(result) >= 5.5) {
        element.classList.add("completed")
    } else {
        element.classList.add("redo")
    }
});