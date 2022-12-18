let right_arrow = document.getElementById("left-arrow")
let left_arrow = document.getElementById("right-arrow")
let img = document.getElementById("picture-projeto")
let projects = ["/assets/img/tcc/home.PNG","assets/img/tcc/tela-inicial.PNG","assets/img/tcc/estoque.PNG"]
let count_clicks = 1

function update() {
    img.src = projects[count_clicks]
}

right_arrow.addEventListener("click", function() {
    if(count_clicks > projects.length - 1 || count_clicks < 0) {
        count_clicks = 0
        update()
    } else {
        update()
        count_clicks += 1
    }
    
})

left_arrow.addEventListener("click", function() {
    if(count_clicks < 0 || count_clicks > projects.length) {
        count_clicks = projects.length - 1
        update()
    } else {
        update()
        count_clicks -= 1
    }
})

