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
import LayoutEN from '../../../../components/Routes/EN';
import CardPricesEN from '../../../../components/CardPrices/EN/index';

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

function InicioEN() {
  return (
    <LayoutEN>
      <HelmetComponent title="HOME" />

      <Container>
        <Banner id="banner" data-aos="zoom-in">
          <div id="esq">
            <h1>Get a HIGH PC in your hands!</h1>

            <h3>
              Run any game or application on your OLD PC, MAC, SMARTPHONE or TV.
            </h3>

            <Link to="/EN/Plans">
              <button type="button">Play Now</button>
            </Link>
          </div>

          <div id="dir">
            <img src={BannerImage} alt="Devices with on-screen games" />
          </div>
        </Banner>

        <hr />

        <Games data-aos="zoom-in-left">
          <header>
            <h1>All games over 140FPS!</h1>

            <h3>
              Don't have a gaming computer? With the Perspect Cloud you can run
              all today's games without a video card.
              <br />
            </h3>
          </header>

          <section id="container-images">
            <img src={Apex} alt="Apex Legends game image" />
            <img src={Fortnite} alt="Fortnite game image" />
            <img src={Cod} alt="Call of Duty game image" />
            <img src={Lol} alt="League of Legends game image" />
            <img src={Gta5} alt="Gta5 game image" />
            <img src={Pubg} alt="Pubg game image" />
            <img src={R6} alt="Rainbow Six game image" />
            <img src={Cod3} alt="Call of Duty 3 game image" />
            <img src={Rocket} alt="Rocket game image" />
            <img src={Forza} alt="Forza game image" />
          </section>
        </Games>

        <hr />

        <Planos data-aos="zoom-in-right" data-aos-offset="400">
          <header>
            <h1>BUY TODAY!</h1>
          </header>

          <CardPricesEN />
        </Planos>

        <hr />

        <Plataform data-aos="zoom-in-left" data-aos-offset="350">
          <div id="esq">
            <img
              src={PlataformImage}
              alt="Multiple devices with games on the screen"
            />
          </div>

          <div id="dir">
            <h1>Play anywhere</h1>
            <p>
              Perform any task on your smartphone.
              {' '}
              <br />
              With Perspect Cloud, you can access your machine from anywhere,
              with a 5GB/s or 3G Internet connection.
            </p>
          </div>
        </Plataform>

        <Plataform2 data-aos="zoom-in-right" data-aos-offset="450">
          <div id="esq">
            <h1>High PC in your hands!</h1>
            <p>
              Join the future with us!
              Enjoy a unique experience with Perspect Cloud,
              run any game or application on any device.
            </p>
          </div>

          <div id="dir">
            <img
              src={Plataform2Image}
              alt="Image showing devices with games on the screen"
            />
          </div>
        </Plataform2>

        <hr />

        <FAQ data-aos="zoom-in" data-aos-offset="550">
          <header>
            <h1>F.A.Q</h1>
          </header>

          <Accordion title="What is the Perspect Cloud?">
            Perspect Cloud is a streaming service, where we offer you a HIGH PC
            (high-level computer) with sufficient technology to challenge a
            local computer. All of our machines are optimized so you get the
            best image quality and the least possible delay.
          </Accordion>

          <Accordion title="What are the minimum and recommended Internet speed requirements?">
            Minimum: 5GB/s | 3G
            {' '}
            <br />
            Recommended: 10GB/s | 4G
          </Accordion>

          <Accordion title="What is my protection inside the machine?">
            All of our servers have 3 protection software capable of to detect
            and eliminate malware within your session.
          </Accordion>

          <Accordion title="Is cryptocurrency mining allowed?">
            No! Cryptocurrency mining is not permitted.
          </Accordion>

          <Accordion title="How long does it take for my machine to be ready?">
            Your machine is released instantly after the payment is approved.
          </Accordion>
        </FAQ>
      </Container>
    </LayoutEN>
  );
}

export default InicioEN;
