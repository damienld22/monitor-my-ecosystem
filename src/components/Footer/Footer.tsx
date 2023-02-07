import { Component } from "solid-js";

const Footer: Component = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p data-testid="footer-text">Zenika {currentYear}</p>
    </footer>
  );
};

export default Footer;
