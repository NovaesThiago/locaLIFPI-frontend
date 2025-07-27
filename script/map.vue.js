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
              x: 330,
              y: 933,
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
          nome: "Bloco Entrada",
          salas: [
            {
              id: 2,
              nome: "Gabinete de Diretoria Geral",
              x: 180,
              y: 127,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 4,
              nome: "Coordenação - Almoxarifado - Pat",
              x: 97,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 5,
              nome: "Coordenação Compras/SCDP",
              x: 137,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 6,
              nome: "Depc. planejamento / Coordenação de Orçamento",
              x: 163,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 7,
              nome: "Controle Pedagógico",
              x: 242,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 8,
              nome: "Laboratório de Informática I",
              x: 262,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "laboratorio",
            },
            {
              id: 9,
              nome: "Laboratório de Informática II",
              x: 292,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "laboratorio",
            },
            {
              id: 10,
              nome: "Laboratório de Informática III",
              x: 307,
              y: 138,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "laboratorio",
            },
          ],
        },

        {
          nome: "Bloco B",
          salas: [
            {
              id: 11,
              nome: "Biblioteca",
              x: 130,
              y: 212,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "biblioteca",
            },
            {
              id: 12,
              nome: "Auditório",
              x: 170,
              y: 182,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "auditorio",
            },
            {
              id: 13,
              nome: "Auditório",
              x: 170,
              y: 217,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "auditorio",
            },
          ],
        },

        {
          nome: "Bloco D",
          salas: [
            {
              id: 14,
              nome: "Coordenação Ensino Médio",
              x: 254,
              y: 171.5,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 15,
              nome: "Banheiro",
              x: 254,
              y: 196,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "banheiro",
            },
            {
              id: 16,
              nome: "Sala de Professores / Reuniões",
              x: 254,
              y: 222,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 17,
              nome: "Laboratório de Eletrotécnica III",
              x: 293,
              y: 171.5,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "laboratorio",
            },
            {
              id: 18,
              nome: "Laboratório de Eletrotécnica II",
              x: 293,
              y: 196,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "laboratorio",
            },
            {
              id: 19,
              nome: "Laboratório de Eletrotécnica I",
              x: 293,
              y: 222,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "laboratorio",
            },
          ],
        },

        {
          nome: "Bloco E",
          salas: [
            {
              id: 20,
              nome: "Banheiro Servidores",
              x: 62,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "banheiro",
            },
            {
              id: 21,
              nome: "Banheiro Servidores",
              x: 76,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "banheiro",
            },
            {
              id: 23,
              nome: "CPD / CTI / Coord. - Cont. - Acad.",
              x: 117,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 24,
              nome: "Coordenação Estudantil",
              x: 142,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 25,
              nome: "Serviços",
              x: 157,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 26,
              nome: "Audiovisual",
              x: 182,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 27,
              nome: "Sala de Professores 02",
              x: 242,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 28,
              nome: "Sala C1",
              x: 262,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 29,
              nome: "Sala C2",
              x: 292,
              y: 263,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 30,
              nome: "Sala C3",
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
              nome: "Sala D5",
              x: 92,
              y: 313,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 32,
              nome: "Sala D4",
              x: 123,
              y: 313,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 33,
              nome: "Sala D3",
              x: 172,
              y: 313,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 34,
              nome: "Controle Acadêmico",
              x: 237,
              y: 313,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 35,
              nome: "Sala D2",
              x: 277,
              y: 313,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 36,
              nome: "Sala D1",
              x: 307,
              y: 313,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 37,
              nome: "Cantina",
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
              nome: "Banheiro",
              x: 225,
              y: 367,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "banheiro",
            },
            {
              id: 39,
              nome: "Sala E5",
              x: 92,
              y: 384,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 40,
              nome: "Sala E4",
              x: 123,
              y: 384,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 41,
              nome: "Sala E3",
              x: 171.5,
              y: 384,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 42,
              nome: "Sala E2",
              x: 277,
              y: 384,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 43,
              nome: "Sala E1",
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
              nome: "Sala F5",
              x: 82,
              y: 470,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 22,
              nome: "Sala F4",
              x: 112,
              y: 470,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 45,
              nome: "Sala F6",
              x: 50,
              y: 485,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção" },
              tipo: "sala",
            },
            {
              id: 3,
              nome: "Sala F3",
              x: 292,
              y: 470,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 46,
              nome: "Sala F2",
              x: 322,
              y: 470,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 47,
              nome: "Sala F1",
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
              nome: "Sala G6",
              x: 40,
              y: 605,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção" },
              tipo: "sala",
            },
            {
              id: 49,
              nome: "Sala G5",
              x: 112,
              y: 590,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção" },
              tipo: "sala",
            },
            {
              id: 50,
              nome: "Sala G4",
              x: 142,
              y: 590,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 51,
              nome: "Sala G3",
              x: 232,
              y: 590,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 52,
              nome: "Sala G2",
              x: 282,
              y: 590,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 53,
              nome: "Sala G1",
              x: 317,
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
              id: 54,
              nome: "Sala H6",
              x: 92,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 55,
              nome: "Sala H5",
              x: 123,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 56,
              nome: "Sala H4",
              x: 172,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 57,
              nome: "Sala H3",
              x: 243,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 58,
              nome: "Sala H2",
              x: 283,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Sala de Musica", tarde: "Sala de Musica", noite: "Sala de Musica" },
              tipo: "sala",
            },
            {
              id: 59,
              nome: "Sala H1",
              x: 312,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Ensino Médio Integrado", tarde: "#####", noite: "Licenciatura em Quimica" },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco K",
          salas: [
            {
              id: 60,
              nome: "Banheiro",
              x: 223,
              y: 737,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "banheiro",
            },
            {
              id: 48,
              nome: "Sala G6",
              x: 40,
              y: 605,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção" },
              tipo: "sala",
            },
            {
              id: 49,
              nome: "Sala G5",
              x: 112,
              y: 590,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção" },
              tipo: "sala",
            },
            {
              id: 50,
              nome: "Sala G4",
              x: 142,
              y: 590,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 51,
              nome: "Sala G3",
              x: 232,
              y: 590,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 52,
              nome: "Sala G2",
              x: 282,
              y: 590,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 53,
              nome: "Sala G1",
              x: 317,
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
              id: 54,
              nome: "Sala H6",
              x: 92,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 55,
              nome: "Sala H5",
              x: 123,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 56,
              nome: "Sala H4",
              x: 172,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 57,
              nome: "Sala H3",
              x: 243,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 58,
              nome: "Sala H2",
              x: 283,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Sala de Musica", tarde: "Sala de Musica", noite: "Sala de Musica" },
              tipo: "sala",
            },
            {
              id: 59,
              nome: "Sala H1",
              x: 312,
              y: 671,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Ensino Médio Integrado", tarde: "#####", noite: "Licenciatura em Quimica" },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco K",
          salas: [
            {
              id: 61,
              nome: "Sala xxx",
              x: 62,
              y: 750,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
            {
              id: 62, //auditorio
              nome: "Sala I6",
              x: 92,
              y: 750,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "auditorio",
            },
            {
              id: 63,
              nome: "Sala I5", //auditorio
              x: 132,
              y: 750,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção" },
              tipo: "auditorio",
            },
            {
              id: 64,
              nome: "Sala I4",  //biblioteca
              x: 182,
              y: 750,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção"  },
              tipo: "biblioteca",
            },
            {
              id: 65,
              nome: "Sala I3",
              x: 242,
              y: 750,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Em Manutenção", tarde: "Em Manutenção", noite: "Em Manutenção" },
              tipo: "sala",
            },
            {
              id: 66,
              nome: "Sala I2",
              x: 282,
              y: 750,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { manha: "Mnpef polo 65", tarde: "Mnpef polo 65", noite: "Licenciatura em Quimica" },
              tipo: "sala",
            },
            {
              id: 67,
              nome: "Sala I1",
              x: 327,
              y: 750,
              imagem: "../assets/images/saladeaula.jpg",
              horarios: { },
              tipo: "sala",
            },
          ],
        },

        // {
        //   nome: "Bloco S",
        //   salas: [
        //     //sala mambee extensao antiga
        //     {
        //       id: 68,
        //       nome: "Sala I3",
        //       x: 262,
        //       y: 839,
        //       imagem: "../assets/images/saladeaula.jpg",
        //       horarios: { manha: "#####", tarde: "#####", noite: "Licenciatura em Quimica" },
        //       tipo: "sala",
        //     },
        //     {
        //       id: 69,
        //       nome: "Sala I2",
        //       x: 298,
        //       y: 839,
        //       imagem: "../assets/images/saladeaula.jpg",
        //       horarios: { manha: "Mnpef polo 65", tarde: "Mnpef polo 65", noite: "Licenciatura em Quimica" },
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