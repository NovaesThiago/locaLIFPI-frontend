function cadastrarAdmin(event) {
  event.preventDefault();

  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let matricula = document.getElementById("cpf").value;

  const dadosAdminObj = { nome: usuario, senha: senha, matricula: matricula };

  fetch("http://localhost:3000/admins", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dadosAdminObj)
  })
    .then(res => {
      if (!res.ok) throw new Error("Erro ao cadastrar");
      return res.json();
    })
    .then(data => {
      alert("Administrador cadastrado com sucesso!");
    })
    .catch(err => {
      alert("Erro: " + err.message);
    });
}