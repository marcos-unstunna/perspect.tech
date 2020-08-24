import React from 'react';

// Styles
import './styles/global.css';

// Components
import AOS from 'aos';
import 'aos/dist/aos.css';
import Routes from './routes';
import loadingEffect from './assets/loading.gif';

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease',
    });

    setTimeout(() => {
      document.getElementById('loading').style.opacity = 0;
      document.getElementById('loading').style.zIndex = -1;
      document.querySelector('html').style.overflow = 'visible';
    }, 2500);
  }, []);

  return (
    <>
      <Routes />
      <div id="loading">
        <img src={loadingEffect} alt="Effect" />
      </div>
    </>
  );
}

export default App;
