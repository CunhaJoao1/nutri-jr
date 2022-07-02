import {AiFillPlaySquare} from "react-icons/ai"
import coffee from "../../assets/coffee.svg"
import ebook from "../../assets/ebook.svg"
import educacao from "../../assets/educacao.svg"
import ficha from "../../assets/pranchetas.png"
import aconselhamento from "../../assets/aconselhamento.png"
import treinamento from "../../assets/treinamento.png"

export const AreasObject = {
    Coffee: {
        title:"Coffee-Break",
        description:"Coffee-breaks para eventos diversos, buscando no mercado os melhores preços de acordo com orçamento e preferências do contratante, organizando a mesa de exibição, o espaço, a limpeza e a distribuição dos lanches.",
        logo: coffee,
    },
    Ficha:{
        title:"Ficha Técnica",
        description:"Desenvolvimento de fichas técnicas padronizadas para preparações culinárias, seguindo as demandas do cliente. Permitindo, assim, a padronização das preparações.",
        logo: ficha,
    },
    Ebooks:{
        title:"Cofecção de Ebooks",
        description:"Produção de e-book com receitas tradicionais de natal e ano novo, com uma perspectiva mais saudável, apontando os compostos bioativos dos  alimentos, sua importância e como aproveitá-los.",
        logo: ebook,
    },
    Aconselhamento:{
        title:"Aconselhamento Nutricional",
        description: "Aconselhamento nutricional  visando promover autonomia nas escolhas alimentares, com foco na qualidade dos alimentos e respeitando o contexto sociocultural e regional.",
        logo:aconselhamento
    },
    Educacao:{
        title: "Educação Nutricional",
        description:"Elaboração e execução de programas de educação nutricional, de acordo com as necessidades do cliente, objetivando o aprendizado e autonomia sobre sua alimentação.",
        logo:educacao
    },
    Praticas:{
        title:"Boas Práticas e Treinamento",
        description: "Elaboração e revisão de manuais de boas práticas, bem como promoção de treinamentos para manipuladores, com foco nas boas práticas de manipulação dos alimentos e higiene pessoal.",
        logo:treinamento
    }


}