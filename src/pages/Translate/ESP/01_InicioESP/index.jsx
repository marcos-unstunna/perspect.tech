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
import CardPricesESP from '../../../../components/CardPrices/ESP/index';

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
import LayoutESP from '../../../../components/Routes/ESP';

// Icons
// import { IoMdClose } from 'react-icons/io';

function InicioESP() {
  return (
    <LayoutESP>
      <HelmetComponent title="HOME" />

      <Container>
        <Banner id="banner" data-aos="zoom-in">
          <div id="esq">
            <h1>Obtenga una PC ALTA en sus manos!</h1>

            <h3>
              Ejecute cualquier juego o aplicación en su PC, MAC, SMARTPHONE o TV ANTIGUOS.
            </h3>

            <Link to="/ESP/Planes">
              <button type="button">JUGAR AHORA</button>
            </Link>
          </div>

          <div id="dir">
            <img src={BannerImage} alt="Dispositivos con juegos en pantalla" />
          </div>
        </Banner>

        <hr />

        <Games data-aos="zoom-in-left">
          <header>
            <h1>Todos los juegos por encima de 140FPS!</h1>

            <h3>
              ¿No tienes una computadora de juego? Con el
              Perspect Cloud puedes ejecutar todo
              juegos de hoy sin una tarjeta de video.
              <br />
            </h3>
          </header>

          <section id="container-images">
            <img src={Apex} alt="Imagen del juego Apex Legends" />
            <img src={Fortnite} alt="Imagen del juego Fortnite" />
            <img src={Cod} alt="Imagen del juego Call of Duty" />
            <img src={Lol} alt="Imagen del juego League of Legends" />
            <img src={Gta5} alt="Imagen del juego Gta5" />
            <img src={Pubg} alt="Imagen del juego de Pubg" />
            <img src={R6} alt="Imagen del juego Rainbow Six" />
            <img src={Cod3} alt="Imagen del juego Call of Duty 3" />
            <img src={Rocket} alt="Imagen del juego de cohetes" />
            <img src={Forza} alt="Imagen del juego de Forza" />
          </section>
        </Games>

        <hr />

        <Planos data-aos="zoom-in-right" data-aos-offset="400">
          <header>
            <h1>COMPRAR HOY</h1>
          </header>

          <CardPricesESP />
        </Planos>

        <hr />

        <Plataform data-aos="zoom-in-left" data-aos-offset="350">
          <div id="esq">
            <img src={PlataformImage} alt="Múltiples dispositivos con juegos en la pantalla." />
          </div>

          <div id="dir">
            <h1>PLAY ANYWHERE</h1>
            <p>
              Realice cualquier tarea en su teléfono inteligente.
              {' '}
              <br />
              Con Perspect Cloud, puede acceder a su máquina desde cualquier lugar,
              con una conexión a Internet de 5 GB / so 3G.
            </p>
          </div>
        </Plataform>

        <Plataform2 data-aos="zoom-in-right" data-aos-offset="450">
          <div id="esq">
            <h1>WELCOME TO THE FUTURE</h1>
            <p>
              ¡Únete al futuro con nosotros! Disfruta de una experiencia única con Perspect Cloud,
              ejecuta cualquier juego o aplicación en cualquier dispositivo.
            </p>
          </div>

          <div id="dir">
            <img src={Plataform2Image} alt="Imagen que muestra dispositivos con juegos en la pantalla" />
          </div>
        </Plataform2>

        <hr />

        <FAQ>
          <header>
            <h1>PREGUNTAS FRECUENTES</h1>
          </header>

          <Accordion title="¿Qué es Perspect Cloud?">
            Perspect Cloud es un servicio de transmisión, donde le ofrecemos
            una PC ALTA (computadora de alto nivel) con tecnología suficiente
            desafiar una computadora local. Todas nuestras máquinas están optimizadas.
            para obtener la mejor calidad de imagen y el menor retraso posible.
          </Accordion>

          <Accordion title="¿Cuáles son los requisitos mínimos y recomendados de velocidad de Internet?">
            Mínimo: 5GB/s | 3G
            {' '}
            <br />
            Recomemendado: 15GB/s | 4G
          </Accordion>

          <Accordion title="¿Cuál es mi protección dentro de la máquina?">
            Todos nuestros servidores tienen 3 programas de protección capaces de
            para detectar y eliminar malware dentro de tu sesión.
          </Accordion>

          <Accordion title="¿Se permite la minería de criptomonedas?">
            ¡No! No se puede realizar la minería de criptomonedas.
          </Accordion>

          <Accordion title="¿Cuánto tiempo tarda mi máquina en estar lista?">
            Su máquina se libera instantáneamente después de que se aprueba el pago.
          </Accordion>
        </FAQ>
      </Container>
    </LayoutESP>
  );
}

export default InicioESP;
