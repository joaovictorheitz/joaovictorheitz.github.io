const x = document.getElementsByTagName("header")
x[0].style.opacity = 0

document.addEventListener("scroll", function() {
    x[0].style.opacity += 1
    console.log("teste")
})