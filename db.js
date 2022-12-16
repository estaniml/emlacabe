import aerolab2Desktop from './public/projects/aerolab2-desktop.png'
import aerolab2Mobile from './public/projects/aerolab2-mobile.png'

import berducDesktop from './public/projects/berduc-desktop.png'
import berduc2Mobile from './public/projects/berduc-mobile.png'

import meli from './public/projects/meli.png'
import meliDarkMode from './public/projects/meli-darkmode.png'

import bsDesktop from './public/projects/bs-desktop.png'
import bsMobile from './public/projects/bs-mobile.png'

import lnDesktop from './public/projects/ln-desktop.png'
import lnMobile from './public/projects/ln-mobile.png'

import gameDesktop from './public/projects/game-desktop.png'
import gameMobile from './public/projects/game-mobile.png'

import f1Desktop from './public/projects/f1-desktop.png'
import f1Mobile from './public/projects/f1-mobile.png'

import vitssanDesktop from './public/projects/vitssan-desktop.png'
import vitssanMobile from './public/projects/vitssan-mobile.png'

import todoDesktop from './public/projects/todo-desktop.png'
import todoMobile from './public/projects/todo-mobile.png'

import aerloab1Desktop from './public/projects/aerolab1-desktop.png'
import aerloab1Mobile from './public/projects/aerolab1-mobile.png'

export const projecstList = [
    {
        id: 1,
        title: 'Aerolab 2',
        description: 'Company Challenge',
        type: ['project', 'react'],
        img: {
            desktop: aerolab2Desktop,
            mobile: aerolab2Mobile
        } ,
        tools: {
            html: [ 'html', 'styledcomponents', 'vite'],
            js: [ 'javascript', 'react' ],
            extra: [ 'vercel', 'git' ]
        },
        url: 'https://aerolab-2-estaniml.vercel.app/',
        gitUrl: 'https://github.com/estaniml/aerolab-2',
    },
    {
        id: 10,
        title: 'Berduc Suites.',
        description: 'Web for a client',
        type: ['real', 'next'],
        img: {
            desktop: berducDesktop,
            mobile: berduc2Mobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss',],
            js: [ 'javascript', 'react', 'next'],
            extra: [ 'vercel', 'git' ]
        },
        url: 'https://berducsuites.com.ar',
        gitUrl: null,
    },
    {
        id: 3,
        title: 'Basement Supply',
        description: 'Company challenge',
        type: ['project', 'react'],
        img: {
            desktop: bsDesktop,
            mobile: bsMobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss', 'vite'],
            js: [ 'javascript', 'react'],
            extra: [ 'netlify', 'git' ]
        },
        url: 'https://basementsupply-challenge.netlify.app/',
        gitUrl: 'https://github.com/estaniml/BasementSupply-Challenge',
    },
    {
        id: 4,
        title: 'La Nacion',
        description: 'Company challenge',
        type: ['project', 'next'],
        img: {
            desktop: lnDesktop,
            mobile: lnMobile
        } ,
        tools: {
            html: [ 'html', 'cssmodules'],
            js: [ 'typescript', 'react', 'next'],
            extra: [ 'netlify', 'git' ]
        },
        url: 'https://basementsupply-challenge.netlify.app/',
        gitUrl: 'https://github.com/estaniml/BasementSupply-Challenge',
    },
    {
        id: 5,
        title: 'Mini Game',
        description: 'Practise project',
        type: ['project', 'react'],
        img: {
            desktop: gameDesktop,
            mobile: gameMobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss', 'vite', 'router-dom'],
            js: [ 'javascript', 'react'],
            extra: [ 'netlify', 'git' ]
        },
        url: 'https://qame-quiz.netlify.app/',
        gitUrl: 'https://github.com/estaniml/quiz-game',
    },
    {
        id: 6,
        title: 'Formula 1 API',
        description: 'Practise project',
        type: ['project', 'react'],
        img: {
            desktop: f1Desktop,
            mobile: f1Mobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss', 'vite', 'router-dom'],
            js: [ 'javascript', 'react'],
            extra: [ 'netlify', 'git' ]
        },
        url: 'https://oneformula.netlify.app/',
        gitUrl: 'https://github.com/estaniml/oneformula',
    },
    {
        id: 7,
        title: 'Vitssan Pharma',
        description: 'Web for a client',
        type: ['real', 'react'],
        img: {
            desktop: vitssanDesktop,
            mobile: vitssanMobile
        } ,
        tools: {
            html: [ 'html', 'styledcomponents', 'vite'],
            js: [ 'javascript', 'react'],
            extra: [ 'vercel', 'git' ]
        },
        url: 'https://vitssan.com/',
        gitUrl: null,
    },
    {
        id: 8,
        title: 'To do app',
        type: 'Web for practise',
        type: ['project', 'react'],
        img: {
            desktop: todoDesktop,
            mobile: todoMobile
        } ,
        tools: {
            html: [ 'html', 'cssmodules', 'vite'],
            js: [ 'javascript', 'react'],
            extra: [ 'netlify', 'git' ]
        },
        url: 'https://roadto.netlify.app/',
        gitUrl: 'https://github.com/estaniml/todo-app',
    },
    {
        id: 9,
        title: 'Aerolab 1',
        type: 'Company Challenge',
        type: ['project', 'react'],
        img: {
            desktop: aerloab1Desktop,
            mobile: aerloab1Mobile
        } ,
        tools: {
            html: [ 'html', 'styledcomponents', 'vite', 'router-dom'],
            js: [ 'javascript', 'react'],
            extra: [ 'netlify', 'git' ]
        },
        url: 'https://aerolabchallenge.netlify.app/',
        gitUrl: 'https://github.com/estaniml/Aerolab-Challenge',
    },
    {
        id: 2,
        title: 'Mercado Libre',
        description: 'Challenge of the product page',
        type: ['project', 'react'],
        img: {
            desktop: meli,
            mobile: null
        } ,
        tools: {
            html: [ 'html', 'tailwindcss', 'vite'],
            js: [ 'javascript', 'react'],
            extra: [ 'netlify', 'git' ]
        },
        url: 'https://melib-challenge.netlify.app/',
        gitUrl: 'https://github.com/estaniml/mercadolibre-challenge',
    },
]