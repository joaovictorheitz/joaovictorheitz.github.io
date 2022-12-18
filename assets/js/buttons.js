let about_button = document.getElementById("about-button")
let contact_button = document.getElementById("contact-button")
let about_h1 = document.getElementById("about-me-info")
let contact_h1 = document.getElementById("contact-h1")

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

about_button.addEventListener("click", async function() {
    about_h1.style.color = "blue"
    about_h1.style.transition = "color 800ms"
    await delay(800)
    about_h1.style.color = "black"
})

contact_button.addEventListener("click", async function() {
    contact_h1.style.color = "blue"
    contact_h1.style.transition = "color 800ms"
    await delay(800)
    contact_h1.style.color = "black"
})