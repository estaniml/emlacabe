import airbnbDesktop from './public/projects/airbnb-desktop.png'
import airbnbMobile from './public/projects/airbnb-mobile.png'

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

import alkemyDesktop from './public/projects/alkemy-desktop.png'
import alkemyMobile from './public/projects/alkemy-mobile.png'

import vitssanDesktop from './public/projects/vitssan-desktop.png'
import vitssanMobile from './public/projects/vitssan-mobile.png'

import fulbosDesktop from './public/projects/fulbos-desktop.png'
import fulbosMobile from './public/projects/fulbos-mobile.png'

import gmlDesktop from './public/projects/gml-desktop.png'
import gmlMobile from './public/projects/gml-mobile.png'

import terrazasDesktop from './public/projects/terrazas-desktop.png'
import terrazasMobile from './public/projects/terrazas-mobile.png'

import fmwDesktop from './public/projects/fmw-desktop.png'
import fmwMobile from './public/projects/fmw-mobile.png'

import hicsDesktop from './public/projects/hics-desktop.png'
import hicsMobile from './public/projects/hics-mobile.png'

import vueestateDesktop from './public/projects/vueestate-desktop.png'

export const projecstList = [
    {
        id: 10,
        title: 'Berduc Suites.',
        real: true,
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
        title: 'Futbol Webapp Fullstack',
        real: false,
        type: ['project', 'next'],
        img: {
            desktop: fulbosDesktop,
            mobile: fulbosMobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss'],
            js: [ 'javascript', 'react', 'next', 'firebase'],
            extra: [ 'vercel', 'git' ]
        },
        url: 'https://fulbo-estaniml.vercel.app',
        gitUrl: null,
    },
    {
        id: 12,
        title: 'Urbanizacion Terrazas ',
        real: true,
        type: ['real', 'next'],
        img: {
            desktop: terrazasDesktop,
            mobile: terrazasMobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss'],
            js: [ 'javascript', 'react', 'next', 'sanity'],
            extra: [ 'vercel', 'git' ]
        },
        url: 'https://urbanizacionterrazas.com.ar/',
        gitUrl: null,
    },
    {
        id: 13,
        title: 'Weather API',
        real: false,
        type: ['project', 'vue'],
        img: {
            desktop: fmwDesktop,
            mobile: fmwMobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss'],
            js: [ 'javascript', 'vue', 'vite'],
            extra: [ 'netlify', 'git' ]
        },
        url: 'https://floy-myweather.netlify.app/',
        gitUrl: null,
    },
    {
        id: 16,
        title: 'HICS Capital',
        real: true,
        type: ['real', 'next'],
        img: {
            desktop: hicsDesktop,
            mobile: hicsMobile
        } ,
        tools: {
            html: [ 'html', 'material ui', 'styled components'],
            js: [ 'javascript', 'react', 'redux'],
            extra: [ 'git' ]
        },
        url: 'https://hicscapital.com/',
        gitUrl: 'https://github.com/carlavgonzalez25/hics-landing',
    },
    {
        id: 14,
        title: 'Dr. Martinez Lacabe',
        real: true,
        type: ['real', 'next'],
        img: {
            desktop: gmlDesktop,
            mobile: gmlMobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss'],
            js: [ 'javascript', 'react', 'next'],
            extra: [ 'vercel', 'git' ]
        },
        url: 'https://gmlacabe.vercel.app/',
        gitUrl: null,
    },
    {
        id: 3,
        title: 'Basement Supply',
        real: false,
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
        url: 'https://bs-challenge.netlify.app/',
        gitUrl: 'https://github.com/estaniml/BasementSupply-Challenge',
    },
    {
        id: 4,
        title: 'La Nacion',
        real: false,
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
        url: 'https://ln-challenge.netlify.app/',
        gitUrl: 'https://github.com/estaniml/lanacion-challenge',
    },
    {
        id: 5,
        title: 'Mini Game',
        real: false,
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
        url: 'https://mini-gam.netlify.app/',
        gitUrl: 'https://github.com/estaniml/quiz-game',
    },
    {
        id: 6,
        title: 'Airbnb Clone',
        real: false,
        type: ['project', 'react'],
        img: {
            desktop: airbnbDesktop,
            mobile: airbnbMobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss', 'next'],
            js: [ 'javascript', 'react'],
            extra: [ 'netlify', 'git' ]
        },
        url: 'https://airclonenb.netlify.app/',
        gitUrl: 'https://github.com/estaniml/airbnb-clone',
    },
    {
        id: 7,
        title: 'Vitssan Pharma',
        real: true,
        type: ['real', 'react'],
        img: {
            desktop: vitssanDesktop,
            mobile: vitssanMobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss', 'vite'],
            js: [ 'javascript', 'react'],
            extra: [ 'vercel', 'git' ]
        },
        url: 'https://vitssan.com/',
        gitUrl: null,
    },
    {
        id: 8,
        title: 'Tarragona Investments',
        real: false,
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
        title: 'Alkemy',
        real: false,
        type: ['project', 'react'],
        img: {
            desktop: alkemyDesktop,
            mobile: alkemyMobile
        } ,
        tools: {
            html: [ 'html', 'tailwindcss', 'create-react-app', 'router-dom'],
            js: [ 'javascript', 'react'],
            extra: [ 'netlify', 'git' ]
        },
        url: 'https://alkemy-movikes.netlify.app/',
        gitUrl: 'https://github.com/estaniml/Aerolab-Challenge',
    },
    {
        id: 15,
        title: 'Vue Real Estate',
        real: false,
        type: ['project', 'vue'],
        img: {
            desktop: vueestateDesktop,
            mobile: null
        } ,
        tools: {
            html: [ 'html', 'sass'],
            js: [ 'javascript', 'vue', 'vue-router' ],
            extra: [ 'netlify', 'git' ]
        },
        url: 'https://vue-estate.netlify.app/',
        gitUrl: 'https://github.com/estaniml/realestate-vue',
    },
]