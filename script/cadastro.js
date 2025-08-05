document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const matricula = document.getElementById("matricula").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!matricula || !email || !senha) {
    alert("Todos os campos devem ser preenchidos.");
    return;
  }

  loginUsuario(matricula, email, senha);
});

function loginUsuario(matricula, email, senha) {
  fetch("https://seuservidor.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ matricula, email, senha })
  })
  .then(response => response.json())
  .then(data => {
    if (data.sucesso) {
      window.location.href = "./main.html";
    } else {
      alert("Credenciais inválidas.");
    }
  })
  .catch(error => {
    console.error("Erro ao tentar login:", error);
    alert("Erro de conexão com o servidor.");
  });
}