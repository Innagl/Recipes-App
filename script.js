const inputField = document.querySelector("#input");

const meal = document.querySelectorAll(".item");



inputField.addEventListener("keyup", function(event) {
    const name = event.target.value.toLowerCase();

    meal.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(name) ? (item.style.display = "block") : (item.style.display = "none");
    })
})