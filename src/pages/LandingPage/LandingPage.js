import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';
import BrowserNotes from '@components/BrowserNotes';
import LazyHero from 'react-lazy-hero';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary, image } } = context;

  return (

    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
        <Nav />
        <LazyHero imageSrc={image} parallaxOffset={100} minHeight='100vh' opacity={0} color="rgba(0, 0, 0, 0.5)">
      <main style={{ color: colorPrimary }}>
      {/* <img src={image }/> */}

        <BrowserNotes />
        <div className="intro-wrapper">
        {/* <div style ={ { backgroundImage: image} }/> */}

          <div className="intro-name">Andrew Perkins</div>
          <div className="tagline">
            Full Stack Developer | BYU MISM Student | Tech Enthusiast
          </div>
          {/* <div> style={{backgroundImage: `url(${image})` }}</div> */}

          <SocialIcons />
        </div>

      </main>
      <br/>
      <br/>
      <ScrollToNext pageSelector=".about-page" />
      </LazyHero>

    </div>

  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
