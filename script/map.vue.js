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
              x: 328,
              y: 1012,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: {
                manha: "Almoço",
                tarde: "Lanche",
                noite: "Janta",
              },
            },
          ],
        },

        {
          nome: "Bloco A",
          salas: [
            {
              id: 2,
              nome: "Sala 02",
              x: 180,
              y: 127,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 3,
              nome: "Sala 03",
              x: 72,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 4,
              nome: "Sala 04",
              x: 97,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 5,
              nome: "Sala 05",
              x: 137,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 6,
              nome: "Sala 06",
              x: 163,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 7,
              nome: "Sala 07",
              x: 242,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 8,
              nome: "Sala 08",
              x: 262,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "",
            },
            {
              id: 9,
              nome: "Sala 09",
              x: 292,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "laboratorio",
            },
            {
              id: 10,
              nome: "Sala 10",
              x: 307,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco B",
          salas: [
            {
              id: 11,
              nome: "Sala 11",
              x: 130,
              y: 212,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 12,
              nome: "Sala 12",
              x: 170,
              y: 182,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 13,
              nome: "Sala 13",
              x: 170,
              y: 217,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco D",
          salas: [
            {
              id: 14,
              nome: "Sala 14",
              x: 254,
              y: 171.5,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 15,
              nome: "Sala 15",
              x: 254,
              y: 196,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 16,
              nome: "Sala 16",
              x: 254,
              y: 222,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 17,
              nome: "Sala 17",
              x: 293,
              y: 171.5,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 18,
              nome: "Sala 18",
              x: 293,
              y: 196,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 19,
              nome: "Sala 19",
              x: 293,
              y: 222,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco E",
          salas: [
            {
              id: 20,
              nome: "Sala 20",
              x: 62,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 21,
              nome: "Sala 21",
              x: 76,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 22,
              nome: "Sala 22",
              x: 92,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 23,
              nome: "Sala 23",
              x: 117,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 24,
              nome: "Sala 24",
              x: 142,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 25,
              nome: "Sala 25",
              x: 156,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 26,
              nome: "Sala 26",
              x: 182,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 27,
              nome: "Sala 27",
              x: 237,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 28,
              nome: "Sala 28",
              x: 262,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 29,
              nome: "Sala 29",
              x: 292,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 30,
              nome: "Sala 30",
              x: 312,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco F",
          salas: [
            {
              id: 31,
              nome: "Sala 31",
              x: 92,
              y: 313,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 32,
              nome: "Sala 32",
              x: 123,
              y: 313,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 33,
              nome: "Sala 33",
              x: 172,
              y: 313,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 34,
              nome: "Sala 34",
              x: 233,
              y: 313,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 35,
              nome: "Sala 35",
              x: 278,
              y: 313,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 36,
              nome: "Sala 36",
              x: 302,
              y: 313,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 37,
              nome: "Sala 37",
              x: 335,
              y: 322,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "cantina",
            },
          ],
        },

        {
          nome: "Bloco G",
          salas: [
            {
              id: 38,
              nome: "Sala 38",
              x: 225,
              y: 367,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 39,
              nome: "Sala 39",
              x: 92,
              y: 384,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 40,
              nome: "Sala 40",
              x: 123,
              y: 384,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 41,
              nome: "Sala 41",
              x: 171.5,
              y: 384,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 42,
              nome: "Sala 42",
              x: 277,
              y: 384,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 43,
              nome: "Sala 43",
              x: 303,
              y: 384,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco H",
          salas: [
            {
              id: 44,
              nome: "Sala E2 Laboratório de Linguágens",
              x: 82,
              y: 470,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 45,
              nome: "Sala E1",
              x: 50,
              y: 485,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção" },
              tipo: "sala",
            },
            {
              id: 46,
              nome: "Sala 46",
              x: 322,
              y: 470,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 47,
              nome: "Sala 47",
              x: 350,
              y: 485,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco I",
          salas: [
            {
              id: 48,
              nome: "Sala Antigo Refeitorio",
              x: 82,
              y: 590,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção" },
              tipo: "sala",
            },
            {
              id: 49,
              nome: "Sala Antigo Refeitorio",
              x: 107,
              y: 590,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção" },
              tipo: "sala",
            },
            {
              id: 50,
              nome: "Sala 50",
              x: 163,
              y: 590,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 51,
              nome: "Sala Setor Saúde",
              x: 262,
              y: 590,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 52,
              nome: "Sala 52",
              x: 297,
              y: 590,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco J",
          salas: [
            {
              id: 53,
              nome: "Sala 53",
              x: 142.5,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 54,
              nome: "Sala MAMBEE",
              x: 172,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 55,
              nome: "Sala LaBioMat",
              x: 243,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 56,
              nome: "Sala 56",
              x: 283,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 57,
              nome: "Sala 57",
              x: 312,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco K",
          salas: [
            {
              id: 58,
              nome: "Sala H6",
              x: 102,
              y: 770,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Sala de Musica", tarde: "Sala de Musica", noite: "Sala de Musica" },
              tipo: "sala",
            },
            {
              id: 59,
              nome: "Sala H5",
              x: 132,
              y: 770,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Ensino Médio Integrado", tarde: "#####", noite: "Licenciatura em Quimica" },
              tipo: "sala",
            },
            {
              id: 60,
              nome: "Sala H4 L.I.A.R.A.",
              x: 182,
              y: 770,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 61,
              nome: "Sala H3 Coordenação do Ensino Superior",
              x: 242,
              y: 770,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 62, //auditorio
              nome: "Sala H2 Laboratório de Física",
              x: 292,
              y: 770,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "auditorio",
            },
            {
              id: 63,
              nome: "Sala H1", //auditorio
              x: 322,
              y: 770,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção" },
              tipo: "auditorio",
            },
          ],
        },

        {
          nome: "Bloco S",
          salas: [
            //sala mambee extensao antiga
            {
              id: 64,
              nome: "Sala I6",  //biblioteca
              x: 102,
              y: 839,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção"  },
              tipo: "biblioteca",
            },
            {
              id: 65,
              nome: "Sala I5",
              x: 132,
              y: 839,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção" },
              tipo: "sala",
            },
            {
              id: 66,
              nome: "Sala I4",
              x: 182,
              y: 839,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Mnpef polo 65", tarde: "Mnpef polo 65", noite: "Licenciatura em Quimica" },
              tipo: "sala",
            },
            {
              id: 67,
              nome: "Banheiro",
              x: 226,
              y: 837,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 68,
              nome: "Sala I3",
              x: 262,
              y: 839,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "Licenciatura em Quimica" },
              tipo: "sala",
            },
            {
              id: 69,
              nome: "Sala I2",
              x: 292,
              y: 839,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Mnpef polo 65", tarde: "Mnpef polo 65", noite: "Licenciatura em Quimica" },
              tipo: "sala",
            },
          ],
        },
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