const div_time_feminino = document.getElementById("feminino");
const div_time_masculino = document.getElementById("masculino");

jogadores.forEach((jogador) => {
  const div_jogador = document.createElement("div");
  div_jogador.className = "jogador";
  div_jogador.innerHTML = `
    <img src="${jogador.imagem}" style="width: 90%;">
    <p style="font-weight: bolder;">${jogador.nome}</p>
  `;

  Object.keys(jogador).forEach((key) => {
    div_jogador.dataset[key] = jogador[key];
  });

  div_jogador.addEventListener("click", manipula_evento);
  
  if (jogador.elenco === "feminino") {
    div_time_feminino.appendChild(div_jogador);
  } else {
    div_time_masculino.appendChild(div_jogador);
  }
});

function manipula_evento(evento) {
  const div_jogador = evento.currentTarget;

  Object.keys(div_jogador.dataset).forEach((key) => {
    localStorage.setItem(key, div_jogador.dataset[key]);
  });

  window.location.href = "./detalhes.html";
}
