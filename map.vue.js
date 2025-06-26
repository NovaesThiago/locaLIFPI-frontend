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
              x: 30,
              y: 154,
              horario: "Segunda: 08:00-12:00\nTerça: 14:00-18:00",
            },
          ],
        },
        {
          nome: "Bloco B",
          salas: [
            { id: 2, nome: "Sala 102", x: 73, y: 235, horario: "Quarta: 08:00-10:00" },
            { id: 3, nome: "Sala 201", x: 113, y: 235, horario: "Quinta: 10:00-12:00" },
            { id: 4, nome: "Sala 202", x: 137, y: 235, horario: "Quinta: 10:00-12:00" },
            { id: 5, nome: "Sala 203", x: 173, y: 235, horario: "Quinta: 10:00-12:00" },
            { id: 6, nome: "Sala 204", x: 213, y: 235, horario: "Quinta: 10:00-12:00" },
            { id: 7, nome: "Sala 20",  x: 248, y: 235, horario: "Quinta: 10:00-12:00" },
          ],
        },
        {
          nome: "Bloco C",
          salas: [
            { id: 8, nome: "Sala 102", x: 63, y: 275, horario: "Quarta: 08:00-10:00" },
            { id: 9, nome: "Sala 201", x: 98, y: 275, horario: "Quinta: 10:00-12:00" },
            { id: 10, nome: "Sala 202", x: 137, y: 275, horario: "Quinta: 10:00-12:00" },
            { id: 11, nome: "Sala 203", x: 173, y: 275, horario: "Quinta: 10:00-12:00" },
            { id: 12, nome: "Sala 204", x: 213, y: 275, horario: "Quinta: 10:00-12:00" },
            { id: 13, nome: "Sala 20",  x: 248, y: 275, horario: "Quinta: 10:00-12:00" },
          ],
        },
        {
          nome: "Bloco D",
          salas: [
            { id: 14, nome: "Sala 102", x: 63, y: 305, horario: "Quarta: 08:00-10:00" },
            { id: 15, nome: "Sala 201", x: 98, y: 305, horario: "Quinta: 10:00-12:00" },
            { id: 16, nome: "Sala 202", x: 137, y: 305, horario: "Quinta: 10:00-12:00" },
            { id: 17, nome: "Sala 203", x: 203, y: 305, horario: "Quinta: 10:00-12:00" },
            { id: 18, nome: "Sala 204", x: 223, y: 305, horario: "Quinta: 10:00-12:00" },
          ],
        },
        {
          nome: "Bloco E",
          salas: [
            { id: 19, nome: "Sala 102", x: 73, y: 385, horario: "Quarta: 08:00-10:00" },
            { id: 20, nome: "Sala 201", x: 94, y: 385, horario: "Quinta: 10:00-12:00" },
            { id: 21, nome: "Sala 202", x: 203, y: 385, horario: "Quinta: 10:00-12:00" },
            { id: 22, nome: "Sala 203", x: 237, y: 385, horario: "Quinta: 10:00-12:00" },
            { id: 23, nome: "Sala 204", x: 263, y: 385, horario: "Quinta: 10:00-12:00" },
          ],
        },
        {
          nome: "Bloco F",
          salas: [
            { id: 24, nome: "Sala 102", x: 25, y: 445, horario: "Quarta: 08:00-10:00" },
            { id: 25, nome: "Sala 201", x: 53, y: 465, horario: "Quinta: 10:00-12:00" },
            { id: 26, nome: "Sala 202", x: 275, y: 445, horario: "Quinta: 10:00-12:00" },
            { id: 27, nome: "Sala 203", x: 248, y: 465, horario: "Quinta: 10:00-12:00" },
          ],
        },
        {
          nome: "Bloco G",
          salas: [
            { id: 28, nome: "Sala 102", x: 72, y: 545, horario: "Quarta: 08:00-10:00" },
            { id: 29, nome: "Sala 201", x: 93, y: 545, horario: "Quinta: 10:00-12:00" },
            { id: 30, nome: "Sala 202", x: 203, y: 545, horario: "Quinta: 10:00-12:00" },
            { id: 31, nome: "Sala 203", x: 238, y: 545, horario: "Quinta: 10:00-12:00" },
            { id: 32, nome: "Sala 203", x: 264, y: 545, horario: "Quinta: 10:00-12:00" },
            { id: 33, nome: "Sala 203", x: 133, y: 553, horario: "Quinta: 10:00-12:00" },
          ],
        },
        {
          nome: "Bloco H",
          salas: [
            { id: 34, nome: "Sala 102", x: 30, y: 573, horario: "Quarta: 08:00-10:00" },
            { id: 35, nome: "Sala 201", x: 72, y: 575, horario: "Quinta: 10:00-12:00" },
            { id: 36, nome: "Sala 202", x: 92, y: 575, horario: "Quinta: 10:00-12:00" },
            { id: 37, nome: "Sala 203", x: 132, y: 575, horario: "Quinta: 10:00-12:00" },
            { id: 38, nome: "Sala 203", x: 182, y: 575, horario: "Quinta: 10:00-12:00" },
            { id: 39, nome: "Sala 203", x: 242, y: 575, horario: "Quinta: 10:00-12:00" },
            { id: 40, nome: "Sala 203", x: 273, y: 575, horario: "Quinta: 10:00-12:00" },
            { id: 41, nome: "Sala 203", x: 362, y: 560, horario: "Quinta: 10:00-12:00" },
          ],
        },
        {
          nome: "Bloco I",
          salas: [
            { id: 42, nome: "Sala 102", x: 33, y: 615, horario: "Quarta: 08:00-10:00" },
            { id: 43, nome: "Sala 201", x: 53, y: 615, horario: "Quinta: 10:00-12:00" },
            { id: 44, nome: "Sala 202", x: 92, y: 615, horario: "Quinta: 10:00-12:00" },
            { id: 45, nome: "Sala 203", x: 113, y: 615, horario: "Quinta: 10:00-12:00" },
            { id: 46, nome: "Sala 203", x: 182, y: 615, horario: "Quinta: 10:00-12:00" },
            { id: 47, nome: "Sala 203", x: 208, y: 615, horario: "Quinta: 10:00-12:00" },
            { id: 48, nome: "Sala 203", x: 223, y: 615, horario: "Quinta: 10:00-12:00" },
            { id: 49, nome: "Sala 203", x: 237, y: 615, horario: "Quinta: 10:00-12:00" },
            { id: 50, nome: "Sala 203", x: 262, y: 615, horario: "Quinta: 10:00-12:00" },
            { id: 51, nome: "Sala 203", x: 277, y: 615, horario: "Quinta: 10:00-12:00" },
            { id: 52, nome: "Sala 203", x: 293, y: 615, horario: "Quinta: 10:00-12:00" },
          ],
        },
        {
          nome: "Bloco I",
          salas: [
            { id: 53, nome: "Sala 102", x: 65, y: 652, horario: "Quarta: 08:00-10:00" },
            { id: 54, nome: "Sala 201", x: 65, y: 668, horario: "Quinta: 10:00-12:00" },
            { id: 55, nome: "Sala 202", x: 65, y: 688, horario: "Quinta: 10:00-12:00" },
            { id: 56, nome: "Sala 203", x: 85, y: 652, horario: "Quinta: 10:00-12:00" },
            { id: 57, nome: "Sala 203", x: 85, y: 668, horario: "Quinta: 10:00-12:00" },
            { id: 58, nome: "Sala 203", x: 85, y: 688, horario: "Quinta: 10:00-12:00" },
            { id: 59, nome: "Sala 203", x: 225, y: 663, horario: "Quinta: 10:00-12:00" },
            { id: 60, nome: "Sala 203", x: 225, y: 682, horario: "Quinta: 10:00-12:00" },
            { id: 61, nome: "Sala 203", x: 246, y: 662, horario: "Quinta: 10:00-12:00" },
          ],
        },
        {
          nome: "Bloco J",
          salas: [
            { id: 62, nome: "Sala 102", x: 32, y: 725, horario: "Quarta: 08:00-10:00" },
            { id: 63, nome: "Sala 201", x: 53, y: 725, horario: "Quinta: 10:00-12:00" },
            { id: 64, nome: "Sala 202", x: 92, y: 725, horario: "Quinta: 10:00-12:00" },
            { id: 65, nome: "Sala 203", x: 113, y: 725, horario: "Quinta: 10:00-12:00" },
            { id: 66, nome: "Sala 203", x: 203, y: 725, horario: "Quinta: 10:00-12:00" },
            { id: 67, nome: "Sala 203", x: 223, y: 725, horario: "Quinta: 10:00-12:00" },
            { id: 68, nome: "Sala 203", x: 262, y: 725, horario: "Quinta: 10:00-12:00" },
            { id: 69, nome: "Sala 203", x: 282, y: 725, horario: "Quinta: 10:00-12:00" },
            { id: 70, nome: "Sala 203", x: 190, y: 742, horario: "Quinta: 10:00-12:00" },
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
    const input = document.querySelector(".search-container input");
    if (input) input.addEventListener("input", this.buscar);
  },
}).mount("#app");
