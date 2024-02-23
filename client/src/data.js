import { trophyIcon, userIcon, activision, logitech, playstation, riotgames, samsung, codMobile, clashOfClans, FreeFire, clashRoyale, Axie, mobileLegends, pubg, brawlStar, instagram, discord, twitter, axieCover, brawlCover, royaleCover, clansCover, codCover, freeFireCover, lolCover, pubgCover, teamsIcon } from "../src/assets";

export const navLinks = [
  {
    id: "home",
    name: "Inicio",
    path: '/'
  },
  {
    id: "games",
    name: "Juegos",
    path: '/games'
  },
  {
    id: "leaderboard",
    name: "Ranking",
    path: '/leaderboard'
  },
  {
    id: "dev",
    name: "Dev Team",
    path: '/devTeam'
  },
  {
    id: "dashboard",
    name: "Dashboard",
    path: '/dashboard'
  },
];

export const partners = [
  {
    id: "activision",
    icon: activision,
  },
  {
    id: "logitech",
    icon: logitech,
  },
  {
    id: "playstation",
    icon: playstation,
  },
  {
    id: "riotgames",
    icon: riotgames,
  },
  {
    id: "samsung",
    icon: samsung,
  },
];

export const imgGames = [
  {
    src: codMobile,
    alt: 'COD Mobile'
  },
  {
    src: clashOfClans,
    alt: 'Clash of Clans'
  },
  { 
    src: FreeFire, 
    alt: 'Free Fire' 
  },
  { 
    src: clashRoyale, 
    alt: 'Clash Royale' 
  },
  { 
    src: Axie, 
    alt: 'Axie' 
  },
  { 
    src: mobileLegends, 
    alt: 'Mobile Legends' 
  },
  { 
    src: pubg, 
    alt: 'PUBG' 
  },
  { 
    src: brawlStar, 
    alt: 'Brawl Star' 
  }
];

export const torneos = [
  {
    id: "torneo 1",
    title: "COD Mobile",
    cover: codCover,
    price: "Gratis",
    date: "00/00/2024",
  },
  {
    id: "torneo 2",
    title: "Axie Infinity",
    cover: axieCover,
    price: "Gratis",
    date: "00/00/2024",
  },
  {
    id: "torneo 3",
    title: "Free Fire",
    cover: freeFireCover,
    price: "Gratis",
    date: "00/00/2024",
  },
  {
    id: "torneo 4",
    title: "Brawl Stars",
    cover: brawlCover,
    price: "Gratis",
    date: "00/00/2024",
  },
  {
    id: "torneo 5",
    title: "Clash Royale",
    cover: royaleCover,
    price: "Gratis",
    date: "00/00/2024",
  },
  {
    id: "torneo 6",
    title: "PUBG Mobile",
    cover: pubgCover,
    price: "Gratis",
    date: "00/00/2024",
  },
  {
    id: "torneo 7",
    title: "League of Legends",
    cover: lolCover,
    price: "Gratis",
    date: "00/00/2024",
  },
  {
    id: "torneo 8",
    title: "Clash of Clans",
    cover: clansCover,
    price: "Gratis",
    date: "00/00/2024",
  },
];

export const footerLinks = [
  {
    id: "home",
    name: "Inicio",
    path: '/'
  },
  {
    id: "games",
    name: "Juegos",
    path: '/games'
  },
  {
    id: "leaderboard",
    name: "Ranking",
    path: '/leaderboard'
  },
  {
    id: "dev",
    name: "Development Team",
    path: '/devTeam'
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: discord,
    link: "https://discord.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
];

export const dashboardTabs = [
  {
    title: "Mi perfil",
    route: "mi-perfil",
    icon: userIcon,
    childrens: [
      {
        title: "Editar perfil",
        route: "editar-perfil",
        backgroundClassStyles: "darkPurple bg-opacity-40"
      },
      {
        title: "Suspender perfil",
        route: "suspender-perfil",
      },
      {
        title: "Cambiar contraseña",
        route: "cambiar-contraseña",
      }
    ]
  },
  {
    title: "Torneos",
    route: "torneos",
    icon: trophyIcon,
    childrens: [
      {
        title: "Crear torneo",
        route: "crear-torneo",
      },
      {
        title: "Mis torneos",
        route: "mis-torneos",
      },
      {
        title: "Participando",
        route: "participando",
      }
    ]
  },
  {
    title: "Equipos",
    route: "equipos",
    icon: teamsIcon,
    childrens: [
      {
        title: "Crear equipo",
        route: "crear-equipo",
      },
      {
        title: "Mis Equipos",
        route: "mis-equipos",
      },
      {
        title: "Integrando",
        route: "integrando",
      }
    ]
  },
];