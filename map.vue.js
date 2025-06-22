const { createApp } = Vue;

createApp({
  data() {
    return {
      blocos: [
        {
          nome: "Bloco A",
          salas: [
            {
              id: 1,
              nome: "Sala 101",
              x: 150,
              y: 200,
              horario: "Segunda: 08:00-12:00\nTerça: 14:00-18:00",
            },
            {
              id: 2,
              nome: "Sala 102",
              x: 180,
              y: 210,
              horario: "Quarta: 08:00-10:00",
            },
          ],
        },
        {
          nome: "Bloco B",
          salas: [
            {
              id: 3,
              nome: "Sala 201",
              x: 300,
              y: 250,
              horario: "Quinta: 10:00-12:00",
            },
          ],
        },
      ],
      salaSelecionada: null,
      termoBusca: "",
    };
  },
  computed: {
    blocosFiltrados() {
      if (!this.termoBusca.trim()) return this.blocos;
      const busca = this.termoBusca.toLowerCase();
      return this.blocos
        .map((bloco) => {
          const salasFiltradas = bloco.salas.filter((sala) =>
            sala.nome.toLowerCase().includes(busca)
          );
          return salasFiltradas.length
            ? { ...bloco, salas: salasFiltradas }
            : null;
        })
        .filter(Boolean);
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
    // Adiciona listener para o input de busca
    const input = document.querySelector(".search-container input");
    if (input) input.addEventListener("input", this.buscar);
  },
}).mount("#app");
