const API_URL = "https://controle-solicitacoes.onrender.com";

async function listarSolicitacoes() {

  const response = await fetch(API_URL);

  const solicitacoes = await response.json();

  const filtro = document.getElementById("filtroStatus").value;

  const tabela = document.getElementById("tabelaSolicitacoes");

  tabela.innerHTML = "";

  let pendentes = 0;
  let concluidas = 0;

  solicitacoes
    .filter(s =>
      filtro === "" || s.status === filtro
    )
    .forEach(solicitacao => {

      if (solicitacao.status === "Pendente") {
        pendentes++;
      }

      if (solicitacao.status === "Concluída") {
        concluidas++;
      }

      tabela.innerHTML += `
        <tr>
          <td>${solicitacao.id}</td>
          <td>${solicitacao.titulo}</td>
          <td>${solicitacao.solicitante}</td>
          <td>${solicitacao.status}</td>
          <td>
              ${solicitacao.status === "Pendente"
                ? `
                  <button onclick="alterarStatus(${solicitacao.id})">
                    Concluir
                  </button>
                `
                : ""
              }

              <button onclick="excluirSolicitacao(${solicitacao.id})">
                Excluir
              </button>

            </td>
        </tr>
      `;
    });

  document.getElementById("pendentes").innerText = pendentes;
  document.getElementById("concluidas").innerText = concluidas;
}

async function criarSolicitacao() {

  const titulo = document.getElementById("titulo").value;

  const solicitante =
    document.getElementById("solicitante").value;

  const status = document.getElementById("status").value;

  if (!titulo || !solicitante || !status) {

    alert("Não é permitido o cadastro de solicitações com campos vazios.");

    return;
  }

  await fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      titulo,
      solicitante,
      status
    })
  });

  listarSolicitacoes();

  document.getElementById("titulo").value = "";

  document.getElementById("solicitante").value = "";

  document.getElementById("status").value = "";
}

async function alterarStatus(id) {

  await fetch(`${API_URL}/${id}`, {

    method: "PUT",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      status: "Concluída"
    })
  });

  listarSolicitacoes();
}

async function excluirSolicitacao(id) {

  const confirmar = confirm(
    "Deseja realmente excluir esta solicitação?"
  );

  if (!confirmar) {
    return;
  }

  await fetch(`${API_URL}/${id}`, {

    method: "DELETE"

  });

  listarSolicitacoes();
}

listarSolicitacoes();