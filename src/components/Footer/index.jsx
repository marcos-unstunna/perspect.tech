import React from 'react';

// Components
import { Link } from 'react-router-dom';
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import BR from '../../assets/BR.png';
import FNL from '../../assets/FNL.png';
import ESP from '../../assets/ESP.png';
import EUA from '../../assets/USA.png';

// Styles
import { Container } from './styles';

function Footer(props) {
  React.useEffect(() => {
    const getDate = new Date();
    const FullYear = getDate.getFullYear();
    document.getElementById('date').innerHTML = FullYear;
  }, []);

  return (
    <Container>
      <article id="container-footer">
        <div className="column">
          <nav className="language-selector">
            <ul>
              <ul>
                <Link to={props.routeFooterEN}>
                  <li>
                    <span>{props.routeNameEN}</span>
                    <img src={EUA} alt={props.routeNameEN} />
                  </li>
                </Link>

                <Link to={props.routeFooterESP}>
                  <li>
                    <span>{props.routeNameESP}</span>
                    <img src={ESP} alt={props.routeNameESP} />
                  </li>
                </Link>

                <Link to={props.routeFooterFIN}>
                  <li>
                    <span>{props.routeNameFIN}</span>
                    <img src={FNL} alt={props.routeNameFIN} />
                  </li>
                </Link>
              </ul>

              <Link to={props.routeFooterBR}>
                <li>
                  <span>{props.routeNameBR}</span>
                  <img src={BR} alt={props.routeNameBR} />
                </li>
              </Link>
            </ul>
          </nav>

          <div id="social-network">
            <a
              href="https://twitter.com/perspectcloud"
              target="__blank"
              rel="noopener"
            >
              <AiOutlineTwitter />
            </a>

            <a
              href="https://www.youtube.com/channel/UCrZIT62yMLAi5rB37AXeKTw"
              target="__blank"
              rel="noopener"
            >
              <AiFillYoutube />
            </a>

            <a
              href="https://discord.com/invite/zfrTVj7"
              target="__blank"
              rel="noopener"
            >
              <FaDiscord />
            </a>

            <a
              href="https://www.instagram.com/perspectcloud"
              target="__blank"
              rel="noopener"
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </div>

        <div className="column">
          <h3>{props.title1}</h3>

          <Link to={props.route1}>{props.nameRoute1}</Link>
          <Link to={props.route2}>{props.nameRoute2}</Link>
          <Link to={props.route3}>{props.nameRoute3}</Link>
        </div>

        <div className="column">
          <h3>{props.title2}</h3>

          <Link to={props.route4}>{props.nameRoute4}</Link>
          <Link to={props.route5}>{props.nameRoute5}</Link>
        </div>

        <div className="column">
          <h3>{props.title3}</h3>

          <a href="mailto:suporte@perspect.tech?subject=SUPORTE%20-%20SITE">suporte@perspect.tech</a>
        </div>
      </article>

      <section>
        <hr />

        <p>
          Copyright &copy;
          <span id="date">2020 </span>
          Perspect Cloud Services, Inc -
          {' '}
          {props.direitos}
        </p>
      </section>
    </Container>
  );
}

export default Footer;
