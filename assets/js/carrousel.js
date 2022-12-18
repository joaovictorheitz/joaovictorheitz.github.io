let right_arrow = document.getElementById("left-arrow")
let left_arrow = document.getElementById("right-arrow")
let img = document.getElementById("picture-projeto")
let title = document.getElementById("title-project")
let paragraph = document.getElementById("paragraph-project")
let projects = ["/assets/img/tcc/home.PNG","assets/img/tcc/tela-inicial.PNG","assets/img/tcc/estoque.PNG", "assets/img/cultour/home.PNG", "assets/img/cultour/explore.PNG", "assets/img/cultour/shop.PNG", "assets/img/cultour/avatar.PNG"]
let count_clicks = 0

function update() {
    img.src = projects[count_clicks]

    if (count_clicks <= 2) {
        title.textContent = "Projeto TCC MSN Management"
        paragraph.textContent = "Projeto de conclusão de curso da Etec Jd. Angela. Trabalho destinado a uma loja de alimentícios localizada na vila missionária, sendo sua função: registrar compras no caixa; mostrar financeiro do estabelecimento de acordo com compras e gastos; gerenciamento de estoque."
    } else {
        title.textContent = "Cultour Startup In School Google"
        paragraph.textContent = "O projeto Startup in School foi patrocinado pela Google com o objetivo de promover a implementação de ideias criativas de estudantes para solucionar problemas gerados pela pandemia. Nosso projeto foi baseado na questão do tempo prolongado em casa e foi solucionado através do desenvolvimento de um aplicativo chamado Cultour, que sugere lugares culturais para visitar com o objetivo de incentivar as pessoas a saírem de casa. Como recompensa, os usuários podem obter moedas virtuais e experiências que podem ser usadas para comprar cosméticos no próprio aplicativo, mantendo assim o interesse do usuário pelo aplicativo."
    }

}

right_arrow.addEventListener("click", function() {

    if (count_clicks == projects.length - 1) {
        count_clicks = 0
        update()
    } else {
        count_clicks += 1
        update()
    }
    
})

left_arrow.addEventListener("click", function() {
    if (count_clicks == 0) {
        count_clicks = projects.length - 1
        update()
    } else {
        count_clicks -= 1
        update()
    }

})