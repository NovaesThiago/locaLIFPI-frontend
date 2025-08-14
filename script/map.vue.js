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
              tipo: "refeitorio",
              capacidade: 100,
              x: 330,
              y: 933,
              capacidade: 40,
              disponibilidade: "disponível",
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
              capacidade: 40,
              disponibilidade: "indisponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 4,
              nome: "Coordenação - Almoxarifado - Pat",
              x: 97,
              y: 138,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 5,
              nome: "Coordenação Compras/SCDP",
              x: 137,
              y: 138,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 6,
              nome: "Depc. planejamento / Coordenação de Orçamento",
              x: 163,
              y: 138,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 7,
              nome: "Controle Pedagógico",
              x: 242,
              y: 138,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
          ],
        },

        {
          nome: "Bloco A",
          salas: [
            {
              id: 8,
              nome: "Laboratório de Informática I",
              x: 262,
              y: 138,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "laboratorio",
            },
            {
              id: 9,
              nome: "Laboratório de Informática II",
              x: 292,
              y: 138,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "laboratorio",
            },
            {
              id: 10,
              nome: "Laboratório de Informática III",
              x: 307,
              y: 138,
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
              id: 11,
              nome: "Biblioteca",
              x: 130,
              y: 212,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "biblioteca",
            },
            {
              id: 12,
              nome: "Auditório",
              x: 170,
              y: 182,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "auditorio",
            },
            {
              id: 13,
              nome: "Auditório",
              x: 170,
              y: 217,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "auditorio",
            },
          ],
        },

        {
          nome: "Bloco B2",
          salas: [
            {
              id: 14,
              nome: "Coordenação Ensino Médio",
              x: 254,
              y: 171.5,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 15,
              nome: "Banheiro",
              x: 254,
              y: 196,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "banheiro",
            },
            {
              id: 16,
              nome: "Sala de Professores / Reuniões",
              x: 254,
              y: 222,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
          ],
        },

        {
          nome: "Bloco B3",
          salas: [
            {
              id: 17,
              nome: "Laboratório de Eletrotécnica III",
              x: 293,
              y: 171.5,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "laboratorio",
            },
            {
              id: 18,
              nome: "Laboratório de Eletrotécnica II",
              x: 293,
              y: 196,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "laboratorio",
            },
            {
              id: 19,
              nome: "Laboratório de Eletrotécnica I",
              x: 293,
              y: 222,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "laboratorio",
            },
          ],
        },

        {
          nome: "Bloco B4",
          salas: [
            {
              id: 20,
              nome: "Banheiro Servidores",
              x: 62,
              y: 263,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "banheiro",
            },
            {
              id: 21,
              nome: "Banheiro Servidores",
              x: 76,
              y: 263,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "banheiro",
            },
            {
              id: 23,
              nome: "CPD / CTI / Coord. - Cont. - Acad.",
              x: 117,
              y: 263,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 24,
              nome: "Coordenação Estudantil",
              x: 142,
              y: 263,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 25,
              nome: "Serviços",
              x: 157,
              y: 263,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 26,
              nome: "Audiovisual",
              x: 182,
              y: 263,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "administracao",
            },
            {
              id: 27,
              nome: "Sala de Professores 02",
              x: 242,
              y: 263,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
          ],
        },

        {
          nome: "Bloco C",
          salas: [
            {
              id: 28,
              nome: "Sala C1",
              x: 262,
              y: 263,
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
              nome: "Sala C2",
              x: 292,
              y: 263,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Informática 1º Ano B",
                tarde: "Contra turno Ensino Médio",
                noite: "Téc. Energia Renovável Módulo III",
              },
              tipo: "sala",
            },
            {
              id: 30,
              nome: "Sala C3",
              x: 312,
              y: 263,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Eletrotécnica 1º Ano",
                tarde: "Contra turno Ensino Médio",
                noite: "Técnico Desenvolvimento de Sistemas Módulo I",
              },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco D",
          salas: [
            {
              id: 31,
              nome: "Sala D5",
              x: 92,
              y: 313,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Eletrotécnica 2º Ano",
                tarde: "Licenciatura em Física Módulo III",
                noite: "Licenciatura em Física Módulo I",
              },
              tipo: "sala",
            },
            {
              id: 32,
              nome: "Sala D4",
              x: 123,
              y: 313,
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
              nome: "Sala D3",
              x: 172,
              y: 313,
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
              nome: "Controle Acadêmico",
              x: 237,
              y: 313,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "administracao",
            },
            {
              id: 35,
              nome: "Sala D2",
              x: 277,
              y: 313,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Administração 2º Ano",
                tarde: "Partiu IF",
                noite: "Proeja Técnico Administração Módulo II",
              },
              tipo: "sala",
            },
            {
              id: 36,
              nome: "Sala D1",
              x: 307,
              y: 313,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "EMIT Administração 1º Ano",
                tarde: "Contra turno Ensino Médio",
                noite: "Proeja Técnico Comércio Módulo IV",
              },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Cantina",
          salas: [
            {
              id: 37,
              nome: "Cantina",
              x: 335,
              y: 322,
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
              id: 38,
              nome: "Banheiro",
              x: 225,
              y: 367,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "banheiro",
            },
            {
              id: 39,
              nome: "Sala E5",
              x: 92,
              y: 384,
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
              x: 123,
              y: 384,
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
              x: 171.5,
              y: 384,
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
              x: 277,
              y: 384,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "Laboratório de Linguagens",
                tarde: "Laboratório de Linguagens",
                noite: "Laboratório de Linguagens",
              },
              tipo: "sala",
            },
            {
              id: 43,
              nome: "Sala E1",
              x: 303,
              y: 384,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco F",
          salas: [
            {
              id: 44,
              nome: "Sala F5",
              x: 82,
              y: 470,
              capacidade: 40,
              disponibilidade: "indisponível",
              horarios: {},
              tipo: "sala",
            },
            {
              id: 22,
              nome: "Sala F4",
              x: 112,
              y: 470,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 45,
              nome: "Sala F6",
              x: 50,
              y: 485,
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
              x: 292,
              y: 470,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 46,
              nome: "Sala F2",
              x: 322,
              y: 470,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "Laboratório de Administração",
                tarde: "Laboratório de Administração",
                noite: "Laboratório de Administração",
              },
              tipo: "sala",
            },
            {
              id: 47,
              nome: "Sala F1",
              x: 350,
              y: 485,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "Setor de Saúde",
                tarde: "Setor de Saúde",
                noite: "Setor de Saúde",
              },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco G",
          salas: [
            {
              id: 60,
              nome: "Banheiro",
              x: 223,
              y: 737,
              capacidade: 40,
              disponibilidade: "disponível",
              tipo: "banheiro",
            },
            {
              id: 48,
              nome: "Sala G6",
              x: 40,
              y: 605,
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
              x: 112,
              y: 590,
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
              x: 142,
              y: 590,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 51,
              nome: "Sala G3",
              x: 232,
              y: 590,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: {},
              tipo: "sala",
            },
            {
              id: 52,
              nome: "Sala G2",
              x: 282,
              y: 590,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 53,
              nome: "Sala G1",
              x: 317,
              y: 590,
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
              id: 54,
              nome: "Sala H6",
              x: 92,
              y: 671,
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
              nome: "Sala H5",
              x: 123,
              y: 671,
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
              nome: "Sala H4",
              x: 172,
              y: 671,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 57,
              nome: "Sala H3",
              x: 243,
              y: 671,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: { manha: "#####", tarde: "#####", noite: "#####" },
              tipo: "sala",
            },
            {
              id: 58,
              nome: "Sala H2",
              x: 283,
              y: 671,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: {
                manha: "Sala de Musica",
                tarde: "Sala de Musica",
                noite: "Sala de Musica",
              },
              tipo: "sala",
            },
            {
              id: 59,
              nome: "Sala H1",
              x: 312,
              y: 671,
              capacidade: 40,
              disponibilidade: "em manutenção",
              horarios: {
                manha: "Em Manutenção",
                tarde: "Em Manutenção",
                noite: "Em Manutenção",
              },
              tipo: "sala",
            },
          ],
        },

        {
          nome: "Bloco I",
          salas: [
            {
              id: 61,
              nome: "Sala xxx",
              x: 62,
              y: 750,
              capacidade: 40,
              disponibilidade: "indisponível",
              tipo: "sala",
            },
            {
              id: 62,
              nome: "Sala I6",
              x: 92,
              y: 750,
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
              nome: "Sala I5",
              x: 132,
              y: 750,
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
              nome: "Sala I4",
              x: 182,
              y: 750,
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
              nome: "Sala I3",
              x: 242,
              y: 750,
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
              x: 282,
              y: 750,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "Mnpef polo 65",
                tarde: "Mnpef polo 65",
                noite: "Licenciatura em Quimica Módulo V",
              },
              tipo: "sala",
            },
            {
              id: 67,
              nome: "Sala I1",
              x: 327,
              y: 750,
              capacidade: 40,
              disponibilidade: "disponível",
              horarios: {
                manha: "Laboratório de Matemática",
                tarde: "Laboratório de Matemática",
                noite: "Laboratório de Matemática",
              },
              tipo: "sala",
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

    // Zoom melhorado com limites
    zoomMap(event) {
      event.preventDefault();
      const zoomFactor = 0.1;
      const minZoom = 0.5;
      const maxZoom = 3;
      
      if (event.deltaY < 0) {
        this.scale = Math.min(maxZoom, this.scale + zoomFactor);
      } else {
        this.scale = Math.max(minZoom, this.scale - zoomFactor);
      }
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

