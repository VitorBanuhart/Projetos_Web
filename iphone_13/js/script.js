const buttons = document.querySelectorAll("#img-picker li")

const image = document.querySelector("#product-img")

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e)

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("select")
        })

        const button = e.target

        const id = button.getAttribute("id")

        button.querySelector(".color").classList.add("select")

        image.classList.add("changing")
        image.setAttribute("src", `img/iphone_${id}.jpg`)

        setTimeout(() => {
            image.classList.toggle("changing")
        })
    })
})