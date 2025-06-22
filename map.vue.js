const { createApp } = Vue;

createApp({
  data() {
    return {
      salas: [
        {
          id: 1,
          nome: "Bloco A",
          x: 150,
          y: 200,
          horario: "Segunda: 08:00-12:00\nTerça: 14:00-18:00",
        },
        // Adicione mais salas conforme necessário
      ],
      salaSelecionada: null,
      termoBusca: "",
    };
  },
  computed: {
    salasFiltradas() {
      if (!this.termoBusca.trim()) return this.salas;
      return this.salas.filter((sala) =>
        sala.nome.toLowerCase().includes(this.termoBusca.toLowerCase())
      );
    },
  },
  methods: {
    mostrarSala(sala) {
      this.salaSelecionada = sala;
    },
    buscar(event) {
      this.termoBusca = event.target.value;
    },
  },
  mounted() {
    const input = document.querySelector(".search-container input");
    if (input) input.addEventListener("input", this.buscar);
  },
}).mount("#app");
