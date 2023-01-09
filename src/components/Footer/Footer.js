import React from 'react';

function Footer() {
    return (
      <footer className='footer footer_active'>
        <p className="footer__text">Список-портфолио Владимира Иванча</p>
        <div className="footer__line"></div>
        <div className="footer__wrapper">
            <p className="footer__copyright">&copy; 2023</p>
            <nav className="footer__links">
                <a className="footer__link" target="_blank" rel="noreferrer" href="http://ivancha.ru/">Ivancha.ru</a>
                <a className="footer__link" target="_blank" rel="noreferrer" href="https://github.com/VladimirIvancha">Страничка на Github</a>
            </nav>
        </div>
      </footer>
    );
  }
export default Footer;