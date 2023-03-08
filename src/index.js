import WishList from "./Wishlist";
import Car from "./Car";

//Select elements
let form = document.getElementById("submitForm");
let modelInput = document.getElementById("modelInput");
let makeInput = document.getElementById("makeInput");
let yearInput = document.getElementById("yearInput");
let pMake = document.getElementById("car-make");
let pModel = document.getElementById("car-model");
let pYear = document.getElementById("car-year");
let removeBtn = document.getElementById("remove-btn");
let list = document.getElementById("wishlist-list");

let wishList = new WishList();


//form submitted
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let make = makeInput.value
    let model = modelInput.value
    let year = yearInput.value

    let car = new Car(make, model, year)
    wishList.add(car)

    let li = document.createElement("li");
    li.classList.add("list-group-item")
    li.textContent = car.model;
    list.appendChild(li)

    li.addEventListener("click", (event) => {
        pMake.textContent = car.make
        pModel.textContent = car.model
        pYear.textContent = car.year

        removeBtn.disabled = false;
        removeBtn.onclick = (event) => {
            wishList.remove(car)

            pMake.textContent = ""
            pModel.textContent = ""
            pYear.textContent = ""

            removeBtn.disabled = true;

            list.removeChild(li)
        }
    })

    modelInput.value = ""
    makeInput.value = ""
    yearInput.value = ""
})