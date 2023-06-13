const nome = localStorage.getItem('nome');
const posicao = localStorage.getItem('posicao');
const imagem = localStorage.getItem('imagem');
const descricao = localStorage.getItem('descricao');
const nome_completo = localStorage.getItem('nome_completo');
const nascimento = localStorage.getItem('nascimento');
const altura = localStorage.getItem('altura');

document.addEventListener('DOMContentLoaded', function() {
    // img = imagem
    //p = parágrafo
    //nomeados assim para melhor entendimento além de adicionar elementos 

    const nome_p = document.createElement('p');
    nome_p.textContent = nome;
    const posicao_p = document.createElement('p');
    posicao_p.textContent = posicao;
    const imagem_p = document.createElement('img');
    imagem_p.src = imagem;
    const descricao_p = document.createElement('p');
    descricao_p.textContent = descricao;
    const nome_completo_p = document.createElement('p');
    nome_completo_p.textContent = "Nome completo: " + nome_completo;
    const nascimento_p = document.createElement('p');
    nascimento_p.textContent = "Nascimento: " + nascimento;
    const altura_p = document.createElement('p');
    altura_p.textContent = "Altura: " + altura;

    const descricao_jogador = document.getElementById('foto_descrição');
    descricao_jogador.style.textAlign = "center"; 
    descricao_jogador.style.textTransform = "uppercase"; 
    descricao_jogador.style.fontWeight = "bolder"; 

    descricao_jogador.appendChild(imagem_p);
    descricao_jogador.appendChild(nome_p);
    descricao_jogador.appendChild(posicao_p);

    // usei a palavra descrição e descricao algumas vezes mas consegui me organziar e não confundir!
    const detalhes_descricao = document.getElementById('detalhes_descrição');
    detalhes_descricao.appendChild(descricao_p);
    detalhes_descricao.appendChild(nome_completo_p);
    detalhes_descricao.appendChild(nascimento_p);
    detalhes_descricao.appendChild(altura_p);

    const tudo = document.getElementById('descrição_jogador');
    tudo.appendChild(descricao_jogador);
    tudo.appendChild(detalhes_descricao);

    const voltar = document.createElement('a');
    voltar.className = "div_voltar";
    voltar.innerHTML = "Voltar";
    voltar.href = "./index.html";
    voltar.style.color = "#ffffff";
    voltar.style.fontSize = "23pt";
    voltar.style.textDecoration = "none";
    
    document.body.appendChild(tudo);
    document.body.appendChild(voltar);
});