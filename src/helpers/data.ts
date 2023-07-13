import { MenuItem } from '../types/MenuItem'
import { TimeLineType } from '../types/TimeLineType'
import { PortfolioItem } from '../types/PortfolioItem'

export const menuItems: MenuItem[] = [
    {label: 'Home', href: '/'},
    {label: 'Sobre', href: '#Sobre'},
    {label: 'Habilidades', href: '#Habilidades'},
    {label: 'Portifólio', href: '#Portifolio'},
    {label: 'Contato', href: 'https://api.whatsapp.com/send?phone=5598996070979', target: true}
]

export const timeLine: TimeLineType[] = [
    {stage: 1, label: '2021 - Frontend'},
    {stage: 2, label: '2022 - Backend'},
    {stage: 3, label: '2023 - Fullstack'}
]

export const portFolioItems: PortfolioItem[] = [
    {
        name: 'MyPage', 
        description: 'Um sistema de criação de páginas de links, com aparência dinâmica e estatísticas em tempo real',
        techs: ['Javascript', 'Laravel', 'MYSQL'],
        repository: 'https://github.com/jadielsanttos/Mylinks-laravel',
        url: null
    },
    {
        name: 'Zenflix', 
        description: 'Uma plataforma de filmes com painel admin e trailers 100% dinâmicos',
        techs: ['Javascript', 'PHP', 'MYSQL'],
        repository: 'https://github.com/jadielsanttos/zenflix',
        url: 'http://zenflix.epizy.com/'
    },
    {
        name: 'Quiz', 
        description: 'Um teste voltado para a galera da área de programação',
        techs: ['Typescript', 'React', 'Tailwind'],
        repository: 'https://github.com/jadielsanttos/quiz-react',
        url: 'https://quiz-react-nu.vercel.app/'
    },
    {
        name: 'OnChat', 
        description: 'Um chat desenvolvido para automatizar um atendimento online',
        techs: ['HTML', 'CSS', 'Javascript'],
        repository: 'https://github.com/jadielsanttos/chat-js',
        url: 'https://onchat.netlify.app/'
    }
]