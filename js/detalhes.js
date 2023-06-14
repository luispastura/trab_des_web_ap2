const nome = localStorage.getItem('nome');
const posicao = localStorage.getItem('posicao');
const imagem = localStorage.getItem('imagem');
const descricao = localStorage.getItem('descricao');
const nome_completo = localStorage.getItem('nome_completo');
const nascimento = localStorage.getItem('nascimento');
const altura = localStorage.getItem('altura');

document.addEventListener('DOMContentLoaded', function() {
  const nomeElement = document.createElement('p');
  nomeElement.textContent = nome;

  const posicaoElement = document.createElement('p');
  posicaoElement.textContent = posicao;

  const imagemElement = document.createElement('img');
  imagemElement.src = imagem;

  const descricaoElement = document.createElement('p');
  descricaoElement.textContent = descricao;

  const nomeCompletoElement = document.createElement('p');
  nomeCompletoElement.textContent = "Nome completo: " + nome_completo;

  const nascimentoElement = document.createElement('p');
  nascimentoElement.textContent = "Nascimento: " + nascimento;
  
  const alturaElement = document.createElement('p');
  alturaElement.textContent = "Altura: " + altura;

  const descricaoJogadorElement = document.getElementById('foto_descrição');
  descricaoJogadorElement.style.textAlign = "center"; 
  descricaoJogadorElement.style.textTransform = "uppercase"; 
  descricaoJogadorElement.style.fontWeight = "bolder";
  descricaoJogadorElement.style.fontFamily ="Arial, Helvetica, sans-serif";

  descricaoJogadorElement.appendChild(imagemElement);
  descricaoJogadorElement.appendChild(nomeElement);
  descricaoJogadorElement.appendChild(posicaoElement);

  const detalhesDescricaoElement = document.getElementById('detalhes_descrição');
  detalhesDescricaoElement.appendChild(descricaoElement);
  detalhesDescricaoElement.appendChild(nomeCompletoElement);
  detalhesDescricaoElement.appendChild(nascimentoElement);
  detalhesDescricaoElement.appendChild(alturaElement);

  const tudoElement = document.getElementById('descrição_jogador');
  tudoElement.appendChild(descricaoJogadorElement);
  tudoElement.appendChild(detalhesDescricaoElement);

  const voltarElement = document.createElement('a');
  voltarElement.className = "div_voltar";
  voltarElement.innerHTML = "Voltar";
  voltarElement.href = "./index.html";
  voltarElement.style.color = "#ffffff";
  voltarElement.style.fontSize = "23pt";
  voltarElement.style.textDecoration = "none";
  
  document.body.appendChild(tudoElement);
  document.body.appendChild(voltarElement);
});