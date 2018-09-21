import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '@utils/scroll';

import './style.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const {
      theme: { colorPrimary, bgPrimary, navAlpha },
      switchTheme
    } = this.context;

    const stickyClass = this.state.isSticky ? 'sticky' : '';
    const stickyStyles = this.state.isSticky
      ? { backgroundColor: bgPrimary, color: colorPrimary }
      : { backgroundColor: navAlpha, color: colorPrimary };
    return (
      <nav
        className={stickyClass}
        ref={(elem) => {
          this.nav = elem;
        }}
        style={stickyStyles}
      >
        <div className="magic-wand bounce-xy" onClick={(e) => switchTheme()}>
          <button className="fas fa-magic fa-lg" href="#" />
          <div className="magic-text">Change Theme</div>
        </div>
        <style jsx="true">
          {`
            .menu__item:hover {
              border-top: 4px solid ${colorPrimary};
            }
          `}
        </style>
        <div className="menu">
          <div
            className="menu__item active"
            onClick={(e) => this.scrollToPage('.about-page')}
          >
            About
          </div>
          <div
            className="menu__item"
            onClick={(e) => this.scrollToPage('.portfolio-page')}
          >
            Portfolio
          </div>
         
            <a className="menu__item" target="_blank" rel="noopener noreferrer" href="https://byu.box.com/s/lb8xifzt03kv5n97vv0wd8ync3hvhoox" style={ { color: colorPrimary } }>Resume</a>

            {/* <a href="https://byu.box.com/s/lb8xifzt03kv5n97vv0wd8ync3hvhoox"></a> */}
  
        </div>
      </nav>
    );
  }
}

Nav.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Nav;
