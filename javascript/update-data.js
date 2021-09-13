const data = await fetch("./data.json").then(response => response.json())

export function updateData() {
    const planet = document.body.dataset.planet
    const tab = document.body.dataset.tab
    const planetData = data.find(e => e.name.toLowerCase() === planet)

    document.documentElement.style.setProperty("--color-primary", `var(--color-${planet})`)

    const imageType = tab === "structure" ? "internal" : "planet"
    document.getElementById("planet-image").setAttribute("src", planetData.images[imageType])

    document.getElementById("planet-name").textContent = planetData.name
    document.getElementById("planet-description").textContent = planetData[tab].content.replace(/-/g, "\u2011")
    document.getElementById("planet-link").setAttribute("href", planetData[tab].source)
    document.getElementById("planet-rotation").textContent = planetData.rotation
    document.getElementById("planet-revolution").textContent = planetData.revolution
    document.getElementById("planet-radius").textContent = planetData.radius
    document.getElementById("planet-temperature").textContent = planetData.temperature

    const figure = document.querySelector("main figure")

    if (tab === "geology") {
        figure.classList.add("geology")
        figure.style.setProperty("--geology-image", `url(".${planetData.images.geology}")`)
    } else {
        figure.classList.remove("geology")
    }
}
