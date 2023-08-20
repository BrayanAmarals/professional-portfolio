import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiJavascript, SiReact, SiYarn, SiFigma } from "react-icons/si";

const skillsArray = [
  {
    id: 0,
    name: "HTML",
    description:
      "HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo. Por exemplo, o conteúdo pode ser estruturado em parágrafos, em uma lista com marcadores ou usando imagens e tabelas.",
    link: "https://www.w3schools.com/html/",
    icon: <AiFillHtml5 style={{ color: "white", fontSize: "40px" }} />,
  },
  {
    id: 1,
    name: "CSS",
    description:
      "O CSS tem a tarefa de separar o conteúdo do site de sua apresentação visual, alterando elementos como cor do texto, fonte e espaçamento entre blocos, assim como todo o aspecto estético de uma página.",
    link: "https://www.w3schools.com/css/",
    icon: <SiCss3 style={{ color: "white", fontSize: "40px" }} />,
  },
  {
    id: 2,
    name: "JavaScript",
    description:
      "JavaScript é uma poderosa linguagem de programação que pode adicionar interatividade a um site. Foi inventado por Brendan Eich. JavaScript é versátil e amigável para iniciantes. Com mais experiência, você poderá criar jogos, gráficos 2D e 3D animados, aplicativos abrangentes baseados em banco de dados e muito mais!.",
    link: "https://www.w3schools.com/js/",
    icon: <SiJavascript style={{ color: "white", fontSize: "40px" }} />,
  },
  {
    id: 3,
    name: "React",
    description:
      "React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. Ele é popular por ser fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb.",
    link: "https://react.dev",
    icon: <SiReact style={{ color: "white", fontSize: "40px" }} />,
  },
  {
    id: 4,
    name: "Yarn",
    description:
      "O Yarn é um gerenciador de pacotes para aplicar comandos prontos ao código de uma aplicação. Por ser uma ferramenta de código aberto, há uma comunidade de colaboradores experientes e qualificados que, continuamente, contribuem com novas adições de códigos, gerando pacotes variados.",
    link: "https://yarnpkg.com",
    icon: <SiYarn style={{ color: "white", fontSize: "40px" }} />,
  },
  {
    id: 5,
    name: "Figma",
    description:
      "Com o Figma, equipes podem trabalhar em conjunto para desenvolver interfaces para sites, aplicativos e quaisquer outros tipos de projetos gráficos. A plataforma conta com um funcionamento simples, baseado em elementos visuais intuitivos.",
    link: "https://www.figma.com",
    icon: <SiFigma style={{ color: "white", fontSize: "40px" }} />,
  },
  {
    id: 5,
    name: "Figma",
    description:
      "Com o Figma, equipes podem trabalhar em conjunto para desenvolver interfaces para sites, aplicativos e quaisquer outros tipos de projetos gráficos. A plataforma conta com um funcionamento simples, baseado em elementos visuais intuitivos.",
    link: "https://www.figma.com",
    icon: <SiFigma style={{ color: "white", fontSize: "40px" }} />,
  },
];

export default skillsArray;
