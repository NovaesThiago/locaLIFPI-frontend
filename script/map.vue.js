const { createApp } = Vue;

createApp({
  data() {
    return {
      blocos: [
        // {
        //   nome: "Refeitório",
        //   salas: [
        //     {
        //       id: 1,
        //       nome: "Refeitório",
        //       tipo: "refeitorio",
        //       capacidade: 100,
        //       x: 330,
        //       y: 933,
        //       capacidade: 40,
        //       disponibilidade: "disponível",
        //       horarios: {
        //         manha: "Almoço",
        //         tarde: "Lanche",
        //         noite: "Janta",
        //       },
        //     },
        //   ],
        // },

        {
          nome: "Bloco Entrada",
          salas: [
            {
              id: 2,
              nome: "Gabinete de Diretoria Geral",
              x: 208,
              y: 72,
              capacidade: 40,
              disponibilidade: "indisponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 4,
              nome: "Coordenação - Almoxarifado - Pat",
              x: 129,
              y: 73,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 5,
              nome: "Coordenação Compras/SCDP",
              x: 139,
              y: 73,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 6,
              nome: "Depc. planejamento / Coordenação de Orçamento",
              x: 171,
              y: 73,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 7,
              nome: "Controle Pedagógico",
              x: 180,
              y: 73,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },

            {
              id: 8,
              nome: "Laboratório de Informática I",
              x: 261,
              y: 73,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "administracao",
            },
            {
              id: 9,
              nome: "Laboratório de Informática II",
              x: 271,
              y: 73,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "laboratorio",
            },
            {
              id: 10,
              nome: "Laboratório de Informática III",
              x: 311,
              y: 73,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "laboratorio",
            },
            {
              id: 11,
              nome: "Biblioteca",
              x: 321,
              y: 73,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "laboratorio",
            },
          ],
        },

        {
          nome: "Bloco B1",
          salas: [
            {
              id: 12,
              nome: "Auditório",
              x: 194,
              y: 96,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "auditorio",
            },
            {
              id: 13,
              nome: "Auditório",
              x: 194,
              y: 136,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "auditorio",
            },
            {
              id: 14,
              nome: "Coordenação Ensino Médio",
              x: 150,
              y: 136,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "biblioteca",
            },
          ],
        },

        {
          nome: "Bloco B2",
          salas: [
            {
              id: 15,
              nome: "Banheiro",
              x: 270,
              y: 96,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "administracao",
            },
            {
              id: 16,
              nome: "Sala de Professores / Reuniões",
              x: 270,
              y: 112,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "banheiro",
            },
            {
              id: 17,
              nome: "Laboratório de Eletrotécnica III",
              x: 270,
              y: 126,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "administracao",
            },
            {
              id: 17,
              nome: "Laboratório de Eletrotécnica III",
              x: 313,
              y: 96,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "laboratorio",
            },
            {
              id: 18,
              nome: "Laboratório de Eletrotécnica II",
              x: 313,
              y: 112,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "laboratorio",
            },
            {
              id: 19,
              nome: "Laboratório de Eletrotécnica I",
              x: 313,
              y: 126,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "laboratorio",
            },
          ],
        },

        {
          nome: "Bloco B3",
          salas: [
            {
              id: 20,
              nome: "Banheiro Servidores",
              x: 136,
              y: 161,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "banheiro",
            },
            {
              id: 21,
              nome: "CPD / CTI / Coord. - Cont. - Acad.",
              x: 146,
              y: 161,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 23,
              nome: "Coordenação Estudantil",
              x: 166,
              y: 161,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 24,
              nome: "Serviços",
              x: 183,
              y: 161,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 25,
              nome: "Audiovisual",
              x: 202,
              y: 161,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
          ],
        },

        {
          nome: "Bloco B4",
          salas: [
            {
              id: 26,
              nome: "Sala de Professores 02",
              x: 262,
              y: 161,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "administracao",
            },
            {
              id: 27,
              nome: "Sala C1",
              x: 276,
              y: 161,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 28,
              nome: "Sala C2",
              x: 309,
              y: 161,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Informática 1º Ano A",
                tarde: "Contra turno Ensino Médio",
                noite: "Técnico Eletrotécnica Módulo I",
              },
              tipo: "sala",
            },
            {
              id: 29,
              nome: "Sala C3",
              x: 323,
              y: 161,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Informática 1º Ano B",
                tarde: "Contra turno Ensino Médio",
                noite: "Téc. Energia Renovável Módulo III",
              },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Quadra",
          salas: [
            {
              id: 30,
              nome: "Sala C3",
              x: 41,
              y: 214,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "quadra",
            },
            {
              id: 31,
              nome: "Sala D5",
              x: 56,
              y: 214,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "quadra",
            },
          ],
        },

        {
          nome: "Bloco D",
          salas: [
            {
              id: 32,
              nome: "Sala D5",
              x: 176,
              y: 232,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Informática 2º Ano B",
                tarde: "Licenciatura em Química Módulo III",
                noite: " ADS Módulo II",
              },
              tipo: "sala",
            },
            {
              id: 33,
              nome: "Sala D4",
              x: 188,
              y: 232,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Informática 2º Ano A",
                tarde: "Contra turno Ensino Médio",
                noite: "Téc. Desenvolvimento de Sistemas Módulo III",
              },
              tipo: "sala",
            },
            {
              id: 34,
              nome: "D3",
              x: 211,
              y: 232,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 35,
              nome: "Sala D3",
              x: 251,
              y: 232,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Administração 2º Ano",
                tarde: "Partiu IF",
                noite: "Proeja Técnico Administração Módulo II",
              },
              tipo: "administracao",
            },
            {
              id: 36,
              nome: "Sala D2",
              x: 271,
              y: 232,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Administração 1º Ano",
                tarde: "Contra turno Ensino Médio",
                noite: "Proeja Técnico Comércio Módulo IV",
              },
              tipo: "sala",
            },
            {
              id: 37,
              nome: "D1",
              x: 281,
              y: 232,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Cantina",
          salas: [
            {
              id: 38,
              nome: "Banheiro",
              x: 322,
              y: 256,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "cantina",
            },
          ],
        },

        {
          nome: "Bloco E",
          salas: [
            {
              id: 39,
              nome: "Sala E5",
              x: 176,
              y: 292,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Eletrotécnica 3º Ano",
                tarde: "ADS Módulo V",
                noite: "Licenciatura em Física Módulo IX",
              },
              tipo: "sala",
            },
            {
              id: 40,
              nome: "Sala E4",
              x: 189,
              y: 292,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Administração 3º Ano B",
                tarde: " ADS Módulo III",
                noite: "Licenciatura em Física Módulo VII",
              },
              tipo: "sala",
            },
            {
              id: 41,
              nome: "Sala E3",
              x: 211,
              y: 292,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Administração 3º Ano A",
                tarde: " ADS Módulo I",
                noite: "Licenciatura em Física Módulo V",
              },
              tipo: "sala",
            },
            {
              id: 42,
              nome: "Sala E2",
              x: 250,
              y: 292,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "Laboratório de Linguagens",
                tarde: "Laboratório de Linguagens",
                noite: "Laboratório de Linguagens",
              },
              tipo: "banheiro",
            },
            {
              id: 43,
              nome: "Sala E2",
              x: 271,
              y: 292,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 44,
              nome: "Sala E1",
              x: 286,
              y: 292,
              capacidade: 40,
              disponibilidade: "indisponível",
              horarios: {},
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco F",
          salas: [
            {
              id: 22,
              nome: "Sala F4",
              x: 181,
              y: 339,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 45,
              nome: "Sala F6",
              x: 191,
              y: 339,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: {
                manha: "Em Manutenção",
                tarde: "Em Manutenção",
                noite: "Em Manutenção",
              },
              tipo: "sala",
            },
            {
              id: 3,
              nome: "Sala F3",
              x: 268,
              y: 339,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 46,
              nome: "Sala F2",
              x: 281,
              y: 339,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "Laboratório de Administração",
                tarde: "Laboratório de Administração",
                noite: "Laboratório de Administração",
              },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco G",
          salas: [
            {
              id: 47,
              nome: "Sala F1",
              x: 196,
              y: 380,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "Setor de Saúde",
                tarde: "Setor de Saúde",
                noite: "Setor de Saúde",
              },
              tipo: "sala",
            },
            {
              id: 60,
              nome: "Banheiro",
              x: 211,
              y: 379,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "banheiro",
            },
            {
              id: 48,
              nome: "Sala G6",
              x: 254,
              y: 379,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: {
                manha: "Em Manutenção",
                tarde: "Em Manutenção",
                noite: "Em Manutenção",
              },
              tipo: "sala",
            },
            {
              id: 49,
              nome: "Sala G5",
              x: 281,
              y: 379,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: {
                manha: "Em Manutenção",
                tarde: "Em Manutenção",
                noite: "Em Manutenção",
              },
              tipo: "sala",
            },
            {
              id: 50,
              nome: "Sala G4",
              x: 291,
              y: 379,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco H",
          salas: [
            {
              id: 51,
              nome: "Sala H6",
              x: 191,
              y: 421,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: {},
              tipo: "sala",
            },
            {
              id: 52,
              nome: "Sala H5",
              x: 201,
              y: 421,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 53,
              nome: "Sala H4",
              x: 226,
              y: 421,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 54,
              nome: "Sala H3",
              x: 256,
              y: 421,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "Sala de Música",
                tarde: "Sala de Música",
                noite: "Sala de Música",
              },
              tipo: "sala",
            },
            {
              id: 55,
              nome: "Sala H2",
              x: 279,
              y: 421,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Informática 3º Ano",
                tarde: "Licenciatura em Química Módulo I",
                noite: "#####",
              },
              tipo: "sala",
            },
            {
              id: 56,
              nome: "Sala H1",
              x: 289,
              y: 421,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco I",
          salas: [
            {
              id: 57,
              nome: "Sala H3",
              x: 251,
              y: 472,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "banheiro",
            },
            {
              id: 58,
              nome: "Sala H2",
              x: 251,
              y: 481,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: {
                manha: "Sala de Musica",
                tarde: "Sala de Musica",
                noite: "Sala de Musica",
              },
              tipo: "banheiro",
            },
            {
              id: 59,
              nome: "Sala I6",
              x: 171,
              y: 484,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: {
                manha: "Em Manutenção",
                tarde: "Em Manutenção",
                noite: "Em Manutenção",
              },
              tipo: "sala",
            },
            {
              id: 61,
              nome: "Sala I5",
              x: 196,
              y: 484,
              capacidade: 40,
              disponibilidade: "indisponível",
              tipo: "sala",
            },
            {
              id: 62,
              nome: "Sala I4",
              x: 211,
              y: 484,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: {
                manha: "Em Manutenção",
                tarde: "Em Manutenção",
                noite: "Em Manutenção",
              },
              tipo: "sala",
            },
            {
              id: 63,
              nome: "Sala I3",
              x: 231,
              y: 484,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: {
                manha: "Em Manutenção",
                tarde: "Em Manutenção",
                noite: "Em Manutenção",
              },
              tipo: "sala",
            },
            {
              id: 64,
              nome: "Sala I2",
              x: 265,
              y: 484,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "Mnpef polo 65",
                tarde: "Mnpef polo 65",
                noite: "Licenciatura em Quimica Módulo IX",
              },
              tipo: "sala",
            },
            {
              id: 65,
              nome: "Sala I1",
              x: 275,
              y: 484,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "Licenciatura em Química Módulo VII",
                tarde: "###",
                noite: "###",
              },
              tipo: "sala",
            },
            {
              id: 66,
              nome: "Sala I2",
              x: 288,
              y: 484,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "Mnpef polo 65",
                tarde: "Mnpef polo 65",
                noite: "Licenciatura em Quimica Módulo V",
              },
              tipo: "refeitorio",
            },
          ],
        },
      ],
      // Controles de navegação melhorados
      scale: 1,
      rotation: 0,
      translateX: 0,
      translateY: 0,
      isDragging: false,
      lastX: 0,
      lastY: 0,
      touchStartX: 0,
      touchStartY: 0,
      salaSelecionada: null,
      termoBusca: "",
      showEditPopup: false,
      salaToEdit: null,
    };
  },
  computed: {
    blocosFiltrados() {
      const busca = this.termoBusca.toLowerCase().trim();
      if (!busca) return this.blocos;

      return this.blocos
        .map((bloco) => {
          const salasFiltradas = bloco.salas.filter((sala) => {
            return (
              sala.nome.toLowerCase().includes(busca) ||
              sala.tipo?.toLowerCase().includes(busca) ||
              sala.disponibilidade?.toLowerCase().includes(busca) ||
              Object.values(sala.horarios || {})
                .join(" ")
                .toLowerCase()
                .includes(busca)
            );
          });

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
      event.stopPropagation();
    },

    fecharSalaInfo() {
      this.salaSelecionada = null;
    },

    buscar(event) {
      this.termoBusca = event.target.value.trim().toLowerCase();
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

    zoomIn() {
    const zoomFactor = 0.1;
    const maxZoom = 3;
    this.scale = Math.min(maxZoom, this.scale + zoomFactor);
    this.updateTransform();
  },

  zoomOut() {
    const zoomFactor = 0.1;
    const minZoom = 0.5;
    this.scale = Math.max(minZoom, this.scale - zoomFactor);
    this.updateTransform();
  },


    // Navegação com mouse melhorada
    startRotate(event) {
      this.isDragging = true;
      this.lastX = event.clientX;
      this.lastY = event.clientY;
      document.addEventListener("mousemove", this.doNavigate);
      document.addEventListener("mouseup", this.stopNavigate);
      event.preventDefault();
    },

    doNavigate(event) {
      if (!this.isDragging) return;
      
      const deltaX = event.clientX - this.lastX;
      const deltaY = event.clientY - this.lastY;
      
      // Se Shift estiver pressionado, rotaciona; senão, move
      if (event.shiftKey) {
        this.rotation += deltaX * 0.5;
      } else {
        this.translateX += deltaX;
        this.translateY += deltaY;
      }
      
      this.lastX = event.clientX;
      this.lastY = event.clientY;
      this.updateTransform();
    },

    stopNavigate() {
      this.isDragging = false;
      document.removeEventListener("mousemove", this.doNavigate);
      document.removeEventListener("mouseup", this.stopNavigate);
    },

    // Suporte a toque melhorado
    startTouch(event) {
      if (event.touches.length === 1) {
        this.isDragging = true;
        this.touchStartX = event.touches[0].clientX;
        this.touchStartY = event.touches[0].clientY;
      }
    },

    doTouch(event) {
      if (event.touches.length === 1 && this.isDragging) {
        const deltaX = event.touches[0].clientX - this.touchStartX;
        const deltaY = event.touches[0].clientY - this.touchStartY;
        
        // Movimento para dispositivos móveis
        this.translateX += deltaX;
        this.translateY += deltaY;
        
        this.touchStartX = event.touches[0].clientX;
        this.touchStartY = event.touches[0].clientY;
        this.updateTransform();
      }
    },

    stopTouch() {
      this.isDragging = false;
      this.touchStartX = 0;
      this.touchStartY = 0;
    },

    // Atualiza a transformação com limites
    updateTransform() {
      // Limites de movimento baseados no zoom
      const maxTranslate = 200 * this.scale;
      this.translateX = Math.max(-maxTranslate, Math.min(maxTranslate, this.translateX));
      this.translateY = Math.max(-maxTranslate, Math.min(maxTranslate, this.translateY));
      
      const map = document.getElementById("mapTransform");
      if (map) {
        map.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale}) rotate(${this.rotation}deg)`;
      }
    },

    // Botão reset melhorado
    resetMap() {
      this.scale = 1;
      this.rotation = 0;
      this.translateX = 0;
      this.translateY = 0;
      this.updateTransform();
    },

    // Centralizar mapa
    centerMap() {
      this.translateX = 0;
      this.translateY = 0;
      this.updateTransform();
    },

    // Rotação rápida
    rotateMap(degrees) {
      this.rotation += degrees;
      this.updateTransform();
    },
  },
  
  mounted() {
    const input = document.querySelector(".search-container input");
    
    // Adicionar instruções de uso
    console.log("Controles do mapa:");
    console.log("- Scroll: Zoom in/out");
    console.log("- Arrastar: Mover mapa");
    console.log("- Shift + Arrastar: Rotacionar");
    console.log("- Botão Reset: Voltar ao estado inicial");
  },
}).mount("#app");

