const listItems = Array.from(document.querySelectorAll(".list_item"));
listItems.forEach(element => {
    let paragraphs = element.querySelectorAll("p");
    let result = paragraphs[1].textContent.substring(9,99).split(/,/);
    result.forEach(e => {
        if (e == "nog te doen") {
        
        } else if (e == "-") {
            element.classList.add("started_important")
        } else if (e == "gestart") {
            element.classList.add("started")
        } else if (parseFloat(e) < 5.5) {
            element.classList.add("redo")
        } else {
            element.classList.add("completed")
        }
    });

});