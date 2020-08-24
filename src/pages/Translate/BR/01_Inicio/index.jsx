import React from 'react';

// Styles
import { Link } from 'react-router-dom';
import {
  Container,
  Games,
  Banner,
  Planos,
  Plataform,
  Plataform2,
  FAQ,
} from '../../../../styles/pages/home';

// Components
import Accordion from '../../../../components/Accordion/index';
import HelmetComponent from '../../../../components/Helmet/index';
import LayoutBR from '../../../../components/Routes/BR/index';
import CardPricesBR from '../../../../components/CardPrices/BR';

// Imagens
import BannerImage from '../../../../assets/banner.webp';
import PlataformImage from '../../../../assets/plataforma.webp';
import Plataform2Image from '../../../../assets/plataforma02.webp';
import Apex from '../../../../assets/apex_legends.webp';
import Cod from '../../../../assets/cod.webp';
import Cod3 from '../../../../assets/cod3.webp';
import Fortnite from '../../../../assets/fortnite.webp';
import Forza from '../../../../assets/forza_horizon4.webp';
import Gta5 from '../../../../assets/gta5.webp';
import Lol from '../../../../assets/league_of_legends.webp';
import Pubg from '../../../../assets/pubg.webp';
import R6 from '../../../../assets/R6.webp';
import Rocket from '../../../../assets/rocket_league.webp';

// Icons
// import { IoMdClose } from 'react-icons/io';

function Inicio() {
  return (
    <LayoutBR>
      <HelmetComponent title="INÍCIO" />

      <Container>
        <Banner id="banner" data-aos="zoom-in">
          <div id="esq">
            <h1>Obtenha um HIGH PC em suas mãos!</h1>

            <h3>
              Execute qualquer jogo ou aplicativo em seu PC ANTIGO, MAC, SMARTPHONE ou TV.
            </h3>

            <Link to="/PT/Planos">
              <button type="button">PLAY NOW</button>
            </Link>
          </div>

          <div id="dir">
            <img src={BannerImage} alt="Dispositivos com jogos na tela" />
          </div>
        </Banner>

        <hr />

        <Games data-aos="zoom-in-left">
          <header>
            <h1>Todos os jogos acima de 140FPS!</h1>

            <h3>
              Não tem um computador para jogos? Com a
              Perspect Cloud você pode executar todos
              os games da atualidade sem uma placa de vídeo.
              <br />
            </h3>
          </header>

          <section id="container-images">
            <img src={Apex} alt="Imagem do jogo Apex Legends" />
            <img src={Fortnite} alt="Imagem do jogo Fortnite" />
            <img src={Cod} alt="Imagem do jogo Call of Duty" />
            <img src={Lol} alt="Imagem do jogo League of Legends" />
            <img src={Gta5} alt="Imagem do jogo Gta5" />
            <img src={Pubg} alt="Imagem do jogo Pubg" />
            <img src={R6} alt="Imagem do jogo Rainbow Six" />
            <img src={Cod3} alt="Imagem do jogo Call of Duty 3" />
            <img src={Rocket} alt="Imagem do jogo Rocket" />
            <img src={Forza} alt="Imagem do jogo Forza" />
          </section>
        </Games>

        <hr />

        <Planos data-aos="zoom-in-right" data-aos-offset="400">
          <header>
            <h1>COMPRE HOJE MESMO!</h1>
          </header>

          <CardPricesBR />
        </Planos>

        <hr />

        <Plataform data-aos="zoom-in-left" data-aos-offset="350">
          <div id="esq">
            <img src={PlataformImage} alt="Vários dispositivos com jogos na tela" />
          </div>

          <div id="dir">
            <h1>PLAY ANYWHERE</h1>
            <p>
              Execute qualquer tarefa em seu Smartphone.
              {' '}
              <br />
              Com a Perspect Cloud você pode acessar sua máquina
              de qualquer lugar, basta uma conexão via internet de 5GB/s ou 3G.
            </p>
          </div>
        </Plataform>

        <Plataform2 data-aos="zoom-in-right" data-aos-offset="450">
          <div id="esq">
            <h1>WELCOME TO THE FUTURE</h1>
            <p>
              Junte-se ao futuro conosco!
              Desfrute de uma experiência única com a Perspect Cloud,
              execute todos os jogos ou aplicativo em qualquer dispositivo.
            </p>
          </div>

          <div id="dir">
            <img src={Plataform2Image} alt="Imagem mostrando dispositivos com jogos na tela" />
          </div>
        </Plataform2>

        <hr />

        <FAQ>
          <header>
            <h1>PERGUNTAS FREQUENTES</h1>
          </header>

          <Accordion title="O que é a Perspect Cloud?">
            A Perspect Cloud é um serviço de streaming, aonde lhe oferecemos
            um HIGH PC (computador de alto nível) com tecnologia suficiente
            para desafiar um computador local. Todas as nossas máquinas são otimizadas
            para você obter a melhor qualidade de imagem e o mínimo de delay possível.
          </Accordion>

          <Accordion title="Quais são os requisitos mínimos e recomendados na velocidade da internet?">
            Mínimo: 5GB/s | 3G
            {' '}
            <br />
            Recomemendado: 10GB/s | 4G
          </Accordion>

          <Accordion title="Qual é a minha proteção dentro da máquina?">
            Todos os nossos servidores possuem 3 softwarares de proteção capazes
            de detectar e elimar um malware dentro da sua sessão.
          </Accordion>

          <Accordion title="A mineração de criptomoedas é permitida?">
            Não! A mineração de criptomoedas não é permitida.
          </Accordion>

          <Accordion title="Quanto tempo leva para a minha máquina ficar pronta?">
            A sua máquina é liberada instataniamente após a aprovação do pagamento.
          </Accordion>
        </FAQ>
      </Container>
    </LayoutBR>
  );
}

export default Inicio;
