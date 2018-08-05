import React, { Component } from 'react';
import Nav from '../nav';
import './header.scss';

class Header extends Component {

  componentDidMount() {
    function resizeHeaderOnScroll() {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            headerEl = document.getElementById('main-header');

      if (distanceY > shrinkOn) {
        headerEl.classList.add("smaller");
      } else {
        headerEl.classList.remove("smaller");
      }
    }

    window.addEventListener('scroll', resizeHeaderOnScroll);
  }

  render() {
    return (
      <header id="main-header">
        <h1>Justin C. McKay</h1>
        <Nav />
      </header>
    );
  }

}

export default Header;