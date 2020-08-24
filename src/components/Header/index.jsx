import React from 'react';

// Styles

// Components
import { Link, NavLink } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import { Container, ContainerMobile } from './styles';

// Images
import Logo from '../../assets/perspect.tech.webp';

function Header(props) {
  const openSidebar = () => {
    document.getElementById('menu-mobile').style.width = '250px';
  };
  const closeSidebar = () => {
    document.getElementById('menu-mobile').style.width = '0';
  };

  return (
    <>
      <Container data-aos="fade-down">
        <section id="container-header">
          <Link to={props.route1}>
            <img src={Logo} alt="Imagem escrita Perspect" />
          </Link>

          <nav id="menu-desktop">
            <NavLink to={props.route1} exact activeClassName="active">
              {props.nameRoute1}
              <span />
              <span />
            </NavLink>

            <NavLink to={props.route2} exact activeClassName="active">
              {props.nameRoute2}
              <span />
              <span />
            </NavLink>

            <NavLink to={props.route3} exact activeClassName="active">
              {props.nameRoute3}
              <span />
              <span />
            </NavLink>

            <a
              href="EM BREVE..."
              className="btn"
            >
              <button type="button">{props.button}</button>
            </a>
          </nav>

          <MdMenu id="btnOpen" onClick={openSidebar} />
        </section>
      </Container>

      <ContainerMobile id="menu-mobile">
        <header>
          <MdClose id="closeBtn" onClick={closeSidebar} />
        </header>

        <nav>
          <NavLink to={props.route1} exact activeClassName="activeM">
            {props.nameRoute1}
            <span />
            <span />
          </NavLink>

          <NavLink to={props.route2} activeClassName="activeM">
            {props.nameRoute2}
            <span />
            <span />
          </NavLink>

          <NavLink to={props.route3} activeClassName="activeM">
            {props.nameRoute3}
            <span />
            <span />
          </NavLink>

          <a
            href="Em breve..."
            className="btn"
            disabled
            className="disabled"
          >
            <button type="button">{props.button}</button>
          </a>
        </nav>
      </ContainerMobile>
    </>
  );
}

export default Header;
