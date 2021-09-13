import { updateData } from "./update-data.js";

const nav = document.querySelector("header nav");
nav.addEventListener("click", _ => nav.classList.toggle("open"))

nav.querySelectorAll("a").forEach(planetLink => {
    const planet = planetLink.parentElement.id

    planetLink.addEventListener("click", e => {
        e.preventDefault()

        nav.querySelector(".selected").classList.remove("selected")
        planetLink.parentElement.classList.add("selected")

        document.body.dataset.planet = planet
        updateData()
    })
})

const tabLinks = document.querySelectorAll(".tabs a");

tabLinks.forEach(tabLink => {
    const tab = tabLink.parentElement.id

    tabLink.addEventListener("click", e => {
        e.preventDefault()

        document.querySelector(".tabs .selected").classList.remove("selected")
        tabLink.parentElement.classList.add("selected")

        document.body.dataset.tab = tab
        updateData()
    })
})
