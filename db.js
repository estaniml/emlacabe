import aerolab2Desktop from './public/projects/aerolab2-desktop.png'
import aerolab2Mobile from './public/projects/aerolab2-mobile.png'

import berducDesktop from './public/projects/berduc-desktop.png'
import berduc2Mobile from './public/projects/berduc-mobile.png'

import tarragonaDesktop from './public/projects/tarragona-desktop.png'
import tarragonaMobile from './public/projects/tarragona-mobile.png'

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

import fulbosDesktop from './public/projects/fulbos-desktop.png'
import fulbosMobile from './public/projects/fulbos-mobile.png'

import aerloab1Desktop from './public/projects/aerolab1-desktop.png'
import aerloab1Mobile from './public/projects/aerolab1-mobile.png'

import terrazasDesktop from './public/projects/terrazas-desktop.png'
import terrazasMobile from './public/projects/terrazas-mobile.png'

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
        id: 11,
        title: 'Fulbos',
        description: 'Web for a client / Not finished',
        type: ['real', 'next'],
        img: {
            desktop: fulbosDesktop,
            mobile: fulbosMobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss'],
            js: [ 'javascript', 'react', 'next', 'firebase'],
            extra: [ 'vercel', 'git' ]
        },
        url: 'https://fulbos.com/',
        gitUrl: null,
    },
    {
        id: 12,
        title: 'Terrazas Urbanizacion',
        description: 'Web for a client / Not finished',
        type: ['real', 'next'],
        img: {
            desktop: terrazasDesktop,
            mobile: terrazasMobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss', 'next'],
            js: [ 'javascript', 'react'],
            extra: [ 'vercel', 'git' ]
        },
        url: 'https://terrazas-estaniml.vercel.app/',
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
        title: 'Tarragona Investments',
        description: 'Web for a client / not finished',
        type: ['real', 'react'],
        img: {
            desktop: tarragonaDesktop,
            mobile: tarragonaMobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss', 'vite'],
            js: [ 'javascript', 'react'],
            extra: [ 'git' ]
        },
        url: 'https://tarragona.us',
        gitUrl: null,
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
]