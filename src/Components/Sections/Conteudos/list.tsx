interface IOptions {
  title: string
  children: {
    id: number
    label: string
    icon: string
  }[]
}

export const options: IOptions[] = [
  {
    title: 'Carteiras',
    children: [
      {
        id: 1,
        label: 'Carteira Seleção',
        icon: '/Conteudos/carteiras/selecao-icon.png',
      },
      {
        id: 2,
        label: 'Carteira FATOR',
        icon: '/Conteudos/carteiras/FATOR.png',
      },
      {
        id: 3,
        label: 'Carteira Dividendos',
        icon: '/Conteudos/carteiras/Dividendos.png',
      },
      {
        id: 4,
        label: 'Carteira Essencial',
        icon: '/Conteudos/carteiras/Essencial.png',
      },
      {
        id: 5,
        label: 'Carteira de Flls',
        icon: '/Conteudos/carteiras/Flls.png',
      },
      {
        id: 6,
        label: 'Carteira Small Caps',
        icon: '/Conteudos/carteiras/Flls.png',
      },
    ],
  },
  {
    title: 'Cursos',
    children: [
      {
        id: 1,
        label: 'Valuation 2.0',
        icon: '/Conteudos/cursos/valuation.png',
      },
      { id: 2, label: 'Código.py', icon: '/Conteudos/cursos/CODIGO.png' },
      { id: 3, label: 'Dash.py', icon: '/Conteudos/cursos/Dash.png' },
      {
        id: 4,
        label: 'Carteira Essencial',
        icon: '/Conteudos/cursos/Essencial.png',
      },
      {
        id: 5,
        label: 'Cursos Reels',
        icon: '/Conteudos/cursos/Minicurso.png',
      },
      {
        id: 6,
        label: 'Enciclopédia do Fll',
        icon: '/Conteudos/cursos/Enciclopedia.png',
      },
    ],
  },
  {
    title: 'Consultoria',
    children: [
      {
        id: 1,
        label: 'Consultoria VAROS',
        icon: '/Conteudos/consultoria/VZA.png',
      },
    ],
  },
]