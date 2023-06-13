const div_time_feminino = document.getElementById("feminino");
const div_time_masculino = document.getElementById("masculino");
const div_imagem = document.getElementById("imagem");

// o "img" seria para imagem  
//"p" para paragrafo onde fica o conteudo 

jogadores.forEach(
    (ele) => {
        const img_jogador = document.createElement('img');
        img_jogador.src = ele.imagem;
        img_jogador.style.width = "90%";

        const nome_jogador = document.createElement('p');
        nome_jogador.innerHTML = ele.nome;
        nome_jogador.style.fontWeight = "bolder";

        const div_jogador = document.createElement('div');
        div_jogador.className = "jogador";
        div_jogador.appendChild(img_jogador);
        div_jogador.appendChild(nome_jogador);

        div_jogador.setAttribute("data-nome", ele.nome);
        div_jogador.setAttribute("data-posicao", ele.posicao);  
        div_jogador.setAttribute("data-imagem", ele.imagem);  
        div_jogador.setAttribute("data-descricao", ele.descricao);              
        div_jogador.setAttribute("data-nome_completo", ele.nome_completo);
        div_jogador.setAttribute("data-nascimento", ele.nascimento);        
        div_jogador.setAttribute("data-altura", ele.altura);

        if (ele.elenco == "feminino"){
            div_time_feminino.appendChild(div_jogador); 
        } else {
            div_time_masculino.appendChild(div_jogador);
        }
    }
)

//Nesta parte será realizada a manipulação de eventos!
const manipula_evento = (evento) => {

    const div_jogador = evento.currentTarget;

    localStorage.setItem('imagem', div_jogador.dataset.imagem);
    localStorage.setItem('nome', div_jogador.dataset.nome);
    localStorage.setItem('posicao', div_jogador.dataset.posicao);
    localStorage.setItem('nascimento', div_jogador.dataset.nascimento);
    localStorage.setItem('descricao', div_jogador.dataset.descricao);
    localStorage.setItem('nome_completo', div_jogador.dataset.nome_completo);
    localStorage.setItem('altura', div_jogador.dataset.altura);

    window.location.href = "./detalhes.html";

}
// divs esta sendo usado para eu me guiar
const divs_jogador = document.querySelectorAll(".jogador");

divs_jogador.forEach((div_jogador) => {
  div_jogador.addEventListener("click", manipula_evento);
});