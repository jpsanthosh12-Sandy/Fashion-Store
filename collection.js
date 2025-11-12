var products_collection = document.getElementById("product")

var product_search = document.getElementById("search")

var product_list = products_collection.querySelectorAll("div")

product_search.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toUpperCase()

    for (let count = 0; count < product_list.length; count = count + 1) {
        var product_name = product_list[count].querySelector("h4").textContent

        if (product_name.toUpperCase().indexOf(enteredvalue) < 0) {

            product_list[count].style.display = "none"
        }
        else {
            product_list[count].style.display = "block"
        }
    }
})