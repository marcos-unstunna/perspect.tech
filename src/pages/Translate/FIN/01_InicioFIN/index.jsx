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
import LayoutFIN from '../../../../components/Routes/FIN/index';

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
import CardPricesFIN from '../../../../components/CardPrices/FIN';

// Icons
// import { IoMdClose } from 'react-icons/io';

function InicioFIN() {
  return (
    <LayoutFIN>
      <HelmetComponent title="Alkaa" />

      <Container>
        <Banner id="banner" data-aos="zoom-in">
          <div id="esq">
            <h1>Hanki korkea tietokone tietokoneeseesi!</h1>

            <h3>
              Suorita mikä tahansa peli tai sovellus vanhalla tietokoneellasi,
              MAC: lla, SMARTPHONE-puhelimellasi tai televisiossasi.
            </h3>

            <Link to="/FIN/Suunnitelmat">
              <button type="button">PELAA NYT</button>
            </Link>
          </div>

          <div id="dir">
            <img src={BannerImage} alt="Dispositivos com jogos na tela" />
          </div>
        </Banner>

        <hr />

        <Games data-aos="zoom-in-left">
          <header>
            <h1>Kaikki pelit yli 140FPS!</h1>

            <h3>
              Eikö sinulla ole pelitietokonetta? Kanssa
              Perspect Cloud voit käyttää kaikkia
              tämän päivän pelit ilman näytönohjainta.
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
            <h1>OSTA TÄNÄÄN</h1>
          </header>

          <CardPricesFIN />
        </Planos>

        <hr />

        <Plataform data-aos="zoom-in-left" data-aos-offset="350">
          <div id="esq">
            <img src={PlataformImage} alt="Vários dispositivos com jogos na tela" />
          </div>

          <div id="dir">
            <h1>PELAA KAIKKI</h1>
            <p>
              Suorita kaikki älypuhelimen tehtävät.
              {' '}
              <br />
              Perspect Cloud -sovelluksella voit käyttää tietokonettasi mistä tahansa,
              vain 5 Mt/s tai 3G Internet-yhteydellä.
            </p>
          </div>
        </Plataform>

        <Plataform2 data-aos="zoom-in-right" data-aos-offset="450">
          <div id="esq">
            <h1>TERVETULOA TULEVAISUUTEEN</h1>
            <p>
              Liity tulevaisuuteen kanssamme! Nauti ainutlaatuisesta kokemuksesta
              Perspect Cloud, suorita mitä tahansa peliä tai sovellusta millä
              tahansa laitteella.
            </p>
          </div>

          <div id="dir">
            <img src={Plataform2Image} alt="Imagem mostrando dispositivos com jogos na tela" />
          </div>
        </Plataform2>

        <hr />

        <FAQ>
          <header>
            <h1>YHTEISET KYSYMYKSET</h1>
          </header>

          <Accordion title="Mikä on Perspect Cloud?">
            Perspect Cloud on suoratoistopalvelu, jossa tarjoamme sinulle
            HIGH PC (korkean tason tietokone), jolla on riittävä tekniikka
            haastaa paikallinen tietokone. Kaikki koneemme ovat optimoituja
            joten saat parhaan kuvanlaadun ja mahdollisimman vähän viivettä.
          </Accordion>

          <Accordion title="Mitkä ovat minimi- ja suositellut Internet-nopeudet?">
            Minimi: 6GB/s | 3G
            {' '}
            <br />
            Suositeltava: 15GB/s | 4G
          </Accordion>

          <Accordion title="Mikä on suojani koneessa?">
            Kaikilla palvelimillamme on 3 suojausohjelmistoa, jotka kykenevät
            haittaohjelmien havaitsemiseksi ja poistamiseksi istunnossa.
          </Accordion>

          <Accordion title="Onko kryptovaluutan louhinta sallittu?">
            Ei! Salausvaluutan louhinta ei ole sallittua.
          </Accordion>

          <Accordion title="Kuinka kauan koneeni on valmis?">
            Koneesi vapautetaan heti, kun maksu on hyväksytty.
          </Accordion>
        </FAQ>
      </Container>
    </LayoutFIN>
  );
}

export default InicioFIN;
