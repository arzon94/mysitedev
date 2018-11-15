import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About Me</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p></p>
            <p>
              I innovate in the nexus between people and technology.
              I enjoy building everything from small business sites to responsive web apps
            </p>
            <p></p>
            <p>
              I develop the <span className="" >Campus Map</span> and other web resources for Brigham Young University and 
              I am a Masters of Information Systems Management student. I enjoy learning about web frameworks, machine learning,
            data analytics, and everything software. </p>
            <p></p>
            <p>
              Vue, Flutter, Python, Larvel, Tableau, ArcGIS, React, and React-Native
               are the some of my favorite tools to build awesome products. 
            </p>
            <p></p>
            <p>
             If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here 
              <a target="_blank" rel="noopener noreferrer" href="mailto:andyp3rkins@gmail.com" style={ { color: colorPrimary } }> <i className="fas fa-envelope"></i></a>
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              {/* \ (•◡•) / */}
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
