async function enviaBlocoA(){
  try {
    const resposta = await fetch("https://suaapi.com/blocos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blocoK)
    });

    const resultado = await resposta.json();
    console.log("Resposta do servidor:", resultado);
  } catch (erro) {
    console.error("Erro ao enviar:", erro);
  }
};