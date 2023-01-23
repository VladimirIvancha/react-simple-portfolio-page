import React from "react";

function PortfolioItem({ name, link, description, functional, githubLink }) {
  return (
    <li className="portfolio__item">
      <div className="portfolio__item-wrapper">
        <a
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
          href={link}
        >
          {name}
        </a>
        <a
          className="portfolio__icon"
          target="_blank"
          rel="noreferrer"
          href={link}
        >
          ↗
        </a>
      </div>
      <p className="portfolio__item-description-title">Описание:</p>
      <p className="portfolio__item-description-text">{description}</p>
      <p className="portfolio__item-description-title">Функционал:</p>
      <p className="portfolio__item-description-text">{functional}</p>
      <p className="portfolio__item-description-title">
        Проект на GitHub Pages:
      </p>
      <a
        className="portfolio__link_gh-pages"
        target="_blank"
        rel="noreferrer"
        href={githubLink}
      >
        {githubLink}
      </a>
    </li>
  );
}

export default PortfolioItem;
