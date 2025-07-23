const { createApp } = Vue;

createApp({
  data() {
    return {
      blocos: [
        {
          nome: "Refeitório",
          salas: [
            {
              id: 1,
              nome: "Refeitório",
              tipo: "refeitorio",  //refeitorio
              x: 170,
              y: 1010,
              imagem: "saladeaula.jpg",
              horarios: {
                manha: "Café da Manhã",
                tarde: "Almoço",
                noite: "Janta",
              },
            },
          ],
        },

        // {
        //   nome: "Bloco B",
        //   salas: [
        //     {
        //       id: 2,
        //       nome: "Sala 02",
        //       x: 73,
        //       y: 235,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "",
        //     },
        //     {
        //       id: 3,
        //       nome: "Sala 03",
        //       x: 113,
        //       y: 235,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "laboratorio",
        //     },
        //     {
        //       id: 4,
        //       nome: "Sala 04",
        //       x: 137,
        //       y: 235,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 5,
        //       nome: "Sala 05",
        //       x: 173,
        //       y: 235,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 6,
        //       nome: "Sala 06",
        //       x: 213,
        //       y: 235,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 7,
        //       nome: "Sala 07",
        //       x: 248,
        //       y: 235,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //   ],
        // },

        // {
        //   nome: "Bloco C",
        //   salas: [
        //     {
        //       id: 8,
        //       nome: "Sala 08",
        //       x: 63,
        //       y: 275,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 9,
        //       nome: "Sala 09",
        //       x: 98,
        //       y: 275,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 10,
        //       nome: "Sala 10",
        //       x: 137,
        //       y: 275,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 11,
        //       nome: "Sala 11",
        //       x: 173,
        //       y: 275,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 12,
        //       nome: "Sala 12",
        //       x: 213,
        //       y: 275,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 13,
        //       nome: "Sala 13",
        //       x: 248,
        //       y: 275,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //   ],
        // },

        // {
        //   nome: "Bloco D",
        //   salas: [
        //     {
        //       id: 14,
        //       nome: "Sala 14",
        //       x: 63,
        //       y: 305,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 15,
        //       nome: "Sala 15",
        //       x: 98,
        //       y: 305,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 16,
        //       nome: "Sala 16",
        //       x: 137,
        //       y: 305,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 17,
        //       nome: "Sala 17",
        //       x: 203,
        //       y: 305,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 18,
        //       nome: "Sala 18",
        //       x: 223,
        //       y: 305,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //   ],
        // },

        // {
        //   nome: "Bloco E",
        //   salas: [
        //     {
        //       id: 19,
        //       nome: "Sala 19",
        //       x: 73,
        //       y: 385,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 20,
        //       nome: "Sala 20",
        //       x: 94,
        //       y: 385,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 21,
        //       nome: "Sala 21",
        //       x: 203,
        //       y: 385,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 22,
        //       nome: "Sala 22",
        //       x: 237,
        //       y: 385,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 23,
        //       nome: "Sala 23",
        //       x: 263,
        //       y: 385,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //   ],
        // },

        // {
        //   nome: "Bloco F",
        //   salas: [
        //     {
        //       id: 24,
        //       nome: "Sala 24",
        //       x: 25,
        //       y: 445,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 25,
        //       nome: "Sala 25",
        //       x: 53,
        //       y: 465,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 26,
        //       nome: "Sala 26",
        //       x: 275,
        //       y: 445,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 27,
        //       nome: "Sala 27",
        //       x: 248,
        //       y: 465,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //   ],
        // },

        // {
        //   nome: "Bloco G",
        //   salas: [
        //     {
        //       id: 28,
        //       nome: "Sala 28",
        //       x: 72,
        //       y: 545,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 29,
        //       nome: "Sala 29",
        //       x: 93,
        //       y: 545,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 30,
        //       nome: "Sala 30",
        //       x: 203,
        //       y: 545,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 31,
        //       nome: "Sala 31",
        //       x: 238,
        //       y: 545,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 32,
        //       nome: "Sala 32",
        //       x: 264,
        //       y: 545,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 33,
        //       nome: "Sala 33",
        //       x: 133,
        //       y: 553,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //   ],
        // },

        // {
        //   nome: "Bloco H",
        //   salas: [
        //     {
        //       id: 34,
        //       nome: "Sala 34",
        //       x: 25,
        //       y: 573,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 35,
        //       nome: "Sala 35",
        //       x: 72,
        //       y: 575,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 36,
        //       nome: "Sala 36",
        //       x: 92,
        //       y: 575,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 37,
        //       nome: "Sala 37",
        //       x: 132,
        //       y: 575,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 38,
        //       nome: "Sala 38",
        //       x: 182,
        //       y: 575,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 39,
        //       nome: "Sala 39",
        //       x: 242,
        //       y: 575,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 40,
        //       nome: "Sala 40",
        //       x: 273,
        //       y: 575,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 41, //quadra
        //       nome: "Sala 41",
        //       x: 362,
        //       y: 560,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "quadra",
        //     },
        //   ],
        // },

        // {
        //   nome: "Bloco I",
        //   salas: [
        //     {
        //       id: 42,
        //       nome: "Sala 42",
        //       x: 33,
        //       y: 615,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 43,
        //       nome: "Sala 43",
        //       x: 53,
        //       y: 615,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 44,
        //       nome: "Sala 44",
        //       x: 92,
        //       y: 615,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 45,
        //       nome: "Sala 45",
        //       x: 113,
        //       y: 615,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 46,
        //       nome: "Sala 46",
        //       x: 182,
        //       y: 615,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 47,
        //       nome: "Sala 47",
        //       x: 208,
        //       y: 615,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 48,
        //       nome: "Sala 48",
        //       x: 223,
        //       y: 615,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 49,
        //       nome: "Sala 49",
        //       x: 237,
        //       y: 615,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 50,
        //       nome: "Sala 50",
        //       x: 262,
        //       y: 615,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 51,
        //       nome: "Sala 51",
        //       x: 277,
        //       y: 615,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 52,
        //       nome: "Sala 52",
        //       x: 293,
        //       y: 615,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //   ],
        // },

        // {
        //   nome: "Bloco J",
        //   salas: [
        //     {
        //       id: 53,
        //       nome: "Sala 53",
        //       x: 65,
        //       y: 652,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 54,
        //       nome: "Sala 54",
        //       x: 65,
        //       y: 668,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 55,
        //       nome: "Sala 55",
        //       x: 65,
        //       y: 688,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 56,
        //       nome: "Sala 56",
        //       x: 85,
        //       y: 652,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 57,
        //       nome: "Sala 57",
        //       x: 85,
        //       y: 668,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 58,
        //       nome: "Sala 58",
        //       x: 85,
        //       y: 688,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 59, //auditorio
        //       nome: "Sala 59",
        //       x: 225,
        //       y: 663,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "auditorio",
        //     },
        //     {
        //       id: 60,
        //       nome: "Sala 60", //auditorio
        //       x: 225,
        //       y: 682,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "auditorio",
        //     },
        //     {
        //       id: 61,
        //       nome: "Sala 61",  //biblioteca
        //       x: 246,
        //       y: 662,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "biblioteca",
        //     },
        //   ],
        // },

        // {
        //   nome: "Bloco K",
        //   salas: [
        //     {
        //       id: 62,
        //       nome: "Sala 62",
        //       x: 32,
        //       y: 725,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 63,
        //       nome: "Sala 63",
        //       x: 53,
        //       y: 725,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 64,
        //       nome: "Sala 64",
        //       x: 92,
        //       y: 725,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 65,
        //       nome: "Sala 65",
        //       x: 113,
        //       y: 725,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 66,
        //       nome: "Sala 66",
        //       x: 203,
        //       y: 725,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 67,
        //       nome: "Sala 67",
        //       x: 223,
        //       y: 725,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 68,
        //       nome: "Sala 68",
        //       x: 262,
        //       y: 725,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 69,
        //       nome: "Sala 69",
        //       x: 282,
        //       y: 725,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 70,
        //       nome: "Sala 70",
        //       x: 185,
        //       y: 742,
        //       imagem: "saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "#####" },
        //       tipo: "sala",
        //     },
        //   ],
        // },
      ],
      salaSelecionada: null,
      termoBusca: "",
      showEditPopup: false,
      salaToEdit: null,
    };
  },
  computed: {
    blocosFiltrados() {
      if (!this.termoBusca.trim()) return this.blocos;
      const busca = this.termoBusca.toLowerCase();
      return this.blocos
        .map((bloco) => {
          const salasFiltradas = bloco.salas.filter(
            (sala) =>
              sala.nome.toLowerCase().includes(busca) ||
              Object.values(sala.horarios).some((horario) =>
                horario.toLowerCase().includes(busca)
              )
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
    abrirEditarSala(sala) {
      this.salaToEdit = JSON.parse(JSON.stringify(sala));
      this.showEditPopup = true;
    },
    fecharEditarSala() {
      this.showEditPopup = false;
      this.salaToEdit = null;
    },
    salvarEdicao() {
      console.log("Salvando:", this.salaToEdit);

      const blocoIndex = this.blocos.findIndex((b) =>
        b.salas.some((s) => s.id === this.salaToEdit.id)
      );
      if (blocoIndex !== -1) {
        const salaIndex = this.blocos[blocoIndex].salas.findIndex(
          (s) => s.id === this.salaToEdit.id
        );
        if (salaIndex !== -1) {
          this.blocos[blocoIndex].salas[salaIndex] = { ...this.salaToEdit };
          this.salaSelecionada = this.blocos[blocoIndex].salas[salaIndex];
        }
      }

      this.fecharEditarSala();
    },
  },
  mounted() {
    const input = document.querySelector(".search-container input");
    if (input) input.addEventListener("input", this.buscar);
  },
}).mount("#app");