import MarketLogo from "../assets/images/projectMiniMarket/minimarketLogo.svg";
import MarketBackground from "../assets/images/projectMiniMarket/minimarketBackground.svg";
import MarketScreen from "../assets/images/projectMiniMarket/minimarketScreen.svg";

import HabbitLogo from "../assets/images/projectHappyHabbits/logo.svg";
import HabbitScreen from "../assets/images/projectHappyHabbits/screen.svg";
import HabbitBackground from "../assets/images/projectHappyHabbits/background.svg";

import BurguerLogo from "../assets/images/projectBurguerKenzie/logo.svg";
import BurguerScreen from "../assets/images/projectBurguerKenzie/screen.svg";
import BurguerBackground from "../assets/images/projectBurguerKenzie/background.svg";

import PlantsLogo from "../assets/images/projectHelpMyPlants/logo.svg";
import PlantsScreen from "../assets/images/projectHelpMyPlants/screen.svg";
import PlantsBackground from "../assets/images/projectHelpMyPlants/background.svg";

import SelariaLogo from "../assets/images/projectSelariaSafira/logo.png";
import SelariaBackground from "../assets/images/projectSelariaSafira/background.jpg";
import SelariaScreen from "../assets/images/projectSelariaSafira/screen.png";
import { FaPython } from "react-icons/fa";
import {
  SiFlask,
  SiPostgresql,
  SiHeroku,
  SiTypescript,
  SiJest,
  SiDocker,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiMaterialui,
  SiStyledcomponents,
  SiChakraui,
  SiRedux,
} from "react-icons/si";

import { DiNodejs } from "react-icons/di";

import { IoLogoNodejs } from "react-icons/io";
export const projectsMock = [
  {
    name: "Mini Market(api)",
    logo: MarketLogo,
    logoSize: { width: 200, height: 60 },
    screen: MarketScreen,
    background: MarketBackground,
    tecnologies: [
      {
        name: "Python",
        Icon: FaPython(),
      },
      {
        name: "Flask",
        Icon: SiFlask(),
      },
      {
        name: "PostgreSQL",
        Icon: SiPostgresql(),
      },
      {
        name: "Heroku",
        Icon: SiHeroku(),
      },
    ],
    githubLink: "https://github.com/RobsonMT/MiniMarket-API",
    figmaLink:
      "https://www.figma.com/file/ge42CKMsWHbxxPNFyxo7Zn/Capstone-q3-team-library?node-id=0%3A1",
    color: "#BF3434",
    description:
      "Gerencie as vendas do seu mercado, e tenha um histórico de  vendas/clientes",
  },
  {
    name: "Mini Market NodeJs(api)",
    logo: MarketLogo,
    logoSize: { width: 200, height: 60 },
    screen: MarketScreen,
    background: MarketBackground,
    tecnologies: [
      {
        name: "TypeScript",
        Icon: SiTypescript(),
      },
      {
        name: "NodeJS",
        Icon: IoLogoNodejs(),
      },
      {
        name: "PostgreSQL",
        Icon: SiPostgresql(),
      },
      {
        name: "Jest",
        Icon: SiJest(),
      },
      {
        name: "Heroku",
        Icon: SiHeroku(),
      },
      { name: "Docker", Icon: SiDocker() },
    ],
    githubLink: "https://github.com/erick-paiva/minimarket",
    figmaLink:
      "https://www.figma.com/file/ge42CKMsWHbxxPNFyxo7Zn/Capstone-q3-team-library?node-id=0%3A1",

    deployLink: "https://capstone-q4-alex.herokuapp.com/",
    color: "#BF3434",
    description:
      "Gerencie as vendas do seu mercado, e tenha um histórico de  vendas/clientes",
  },
  {
    name: "Happy Habbits",
    logo: HabbitLogo,
    logoSize: { width: 200, height: 65 },
    screen: HabbitScreen,
    background: HabbitBackground,
    tecnologies: [
      {
        Icon: SiJavascript(),
        name: "JavaScript",
      },
      {
        Icon: SiHtml5(),
        name: "HTML5",
      },
      {
        Icon: SiCss3(),
        name: "CSS3",
      },
      {
        Icon: SiReact(),
        name: "ReactJS",
      },
      {
        Icon: SiMaterialui(),
        name: "Material.ui",
      },
      {
        Icon: SiStyledcomponents(),
        name: "Styled Components",
      },
    ],
    githubLink: "https://github.com/thdias00/projeto-habitos",
    figmaLink:
      "https://www.figma.com/file/KkKudBhFaVAFFsPYcYV7z2/PROJETO-HABITOS?node-id=0%3A1",
    deployLink: "https://projeto-habitos.vercel.app/",
    color: "#FFB851",
    description:
      "Construa novos habitos de maneira com o apoio dessa plataforma. Participe de grupos para impulsionar o processo.",
  },
  {
    name: "Help My plants",
    logo: PlantsLogo,
    logoSize: { width: 107, height: 60 },
    screen: PlantsScreen,
    background: PlantsBackground,
    tecnologies: [
      {
        Icon: SiTypescript(),
        name: "TypeScript",
      },
      {
        Icon: SiHtml5(),
        name: "HTML5",
      },
      {
        Icon: SiCss3(),
        name: "CSS3",
      },
      {
        Icon: SiReact(),
        name: "ReactJS",
      },
      {
        Icon: SiChakraui(),
        name: "Chakra.ui",
      },
      {
        Icon: SiStyledcomponents(),
        name: "Styled Components",
      },
    ],
    githubLink: "https://github.com/brenobcos/help-my-plants",
    figmaLink:
      "https://www.figma.com/file/Yw9QjMABnw3CCty4dvB8mN/HE!P-My-Plants?node-id=0%3A1",
    deployLink: "https://help-my-plants-brenobcos.vercel.app/",
    color: "#EAFBF2",
    description:
      "Aprenda  a cuidade de suas plantas. Registre e gerencie os cuidados com suas plantas.",
  },
  {
    name: "Burguer Kenzie",
    logo: BurguerLogo,
    logoSize: { width: 150, height: 40 },
    screen: BurguerScreen,
    background: BurguerBackground,
    tecnologies: [
      {
        Icon: SiTypescript(),
        name: "TypeScript",
      },
      {
        Icon: SiHtml5(),
        name: "HTML5",
      },
      {
        Icon: SiCss3(),
        name: "CSS3",
      },
      {
        Icon: SiReact(),
        name: "ReactJS",
      },
      {
        Icon: SiChakraui(),
        name: "Chakra.ui",
      },
    ],
    githubLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s5-hamburgueria-2-0-com-typescript-json-server-brunotetzner",
    figmaLink:
      "https://www.figma.com/file/Slx5NlfZ0qcai4lu74tO9u/Hamburgueria-Sprint-5?node-id=0%3A1",
    deployLink:
      "https://react-entrega-s5-hamburgueria-2-0-com-typescript-j-brunotetzner.vercel.app/",
    color: "#27AE60",
    description:
      "Gerencie as vendas do seu mercado, e tenha um histórico de  vendas/clientes",
  },
  {
    name: "Selaria Safira",
    logo: SelariaLogo,
    logoSize: { width: 200, height: 40 },
    screen: SelariaScreen,
    background: SelariaBackground,
    tecnologies: [
      {
        Icon: SiJavascript(),
        name: "JavaScript",
      },
      {
        Icon: SiHtml5(),
        name: "HTML5",
      },
      {
        Icon: SiCss3(),
        name: "CSS3",
      },
      {
        Icon: SiReact(),
        name: "ReactJS",
      },
      {
        Icon: SiRedux(),
        name: "Redux",
      },
      {
        Icon: SiStyledcomponents(),
        name: "Styled Components",
      },
    ],
    githubLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/Selaria-safira",
    figmaLink: "",
    deployLink:
      "https://react-entrega-s3-kenzieshop-brunotetzner-brunotetzner.vercel.app/",
    color: "rgb(229, 135, 0)",
    description: "Compre produtos para seu cavalo aqui.",
  },
  {
    name: "Torre de Hanoi",
    logo: MarketLogo,
    logoSize: { width: 200, height: 60 },
    screen: MarketScreen,
    background: MarketBackground,
    tecnologies: [
      {
        Icon: SiJavascript(),
        name: "JavaScript",
      },
      {
        Icon: SiHtml5(),
        name: "HTML5",
      },
      {
        Icon: SiCss3(),
        name: "CSS3",
      },
    ],
    githubLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/entrega-torre-de-hanoi-sprint-5-brunotetzner",
    figmaLink: "",
    deployLink:
      "https://kenzie-academy-brasil-developers.github.io/entrega-torre-de-hanoi-sprint-5-brunotetzner/",
    color: "#BF3434",
    description:
      "Gerencie as vendas do seu mercado, e tenha um histórico de  vendas/clientes",
  },
  {
    name: "The azkaban lig-4",
    logo: MarketLogo,
    logoSize: { width: 200, height: 60 },
    screen: MarketScreen,
    background: MarketBackground,
    tecnologies: [
      {
        Icon: SiJavascript(),
        name: "JavaScript",
      },
      {
        Icon: SiHtml5(),
        name: "HTML5",
      },
      {
        Icon: SiCss3(),
        name: "CSS3",
      },
    ],
    githubLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/entrega-lig-4-sprint-5-liviavrodrigues",
    figmaLink: "",
    deployLink:
      "https://kenzie-academy-brasil-developers.github.io/entrega-lig-4-sprint-5-liviavrodrigues/",
    color: "#BF3434",
    description:
      "Gerencie as vendas do seu mercado, e tenha um histórico de  vendas/clientes",
  },
  {
    name: "Labirinto",
    logo: MarketLogo,
    logoSize: { width: 200, height: 60 },
    screen: MarketScreen,
    background: MarketBackground,
    tecnologies: [
      {
        Icon: SiJavascript(),
        name: "JavaScript",
      },
      {
        Icon: SiHtml5(),
        name: "HTML5",
      },
      {
        Icon: SiCss3(),
        name: "CSS3",
      },
    ],
    githubLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/entrega-labirinto-sprint-5-brunotetzner",
    figmaLink: "",
    deployLink:
      "https://kenzie-academy-brasil-developers.github.io/entrega-labirinto-sprint-5-brunotetzner/",
    color: "#BF3434",
    description:
      "Gerencie as vendas do seu mercado, e tenha um histórico de  vendas/clientes",
  },
];
