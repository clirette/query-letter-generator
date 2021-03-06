import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">
        Copyright &copy; {new Date().getFullYear()} Query Letter Generator |
        Created by Julia Jorgenson and{" "}
        <a
          href="https://chaselirette.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chase Lirette
        </a>
      </p>
    </div>
  );
};

export default Footer;
