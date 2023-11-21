import React from "react";
import "./Nave.css";

export default function Nave() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/brands.min.css"
        integrity="sha512-W/zrbCncQnky/EzL+/AYwTtosvrM+YG/V6piQLSe2HuKS6cmbw89kjYkp3tWFn1dkWV7L1ruvJyKbLz73Vlgfg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <header>
        <div className="header-container">
          <span><a href="#">Fawad</a></span>
          <nav id="nav">
            <ul id="nav-ul">
              <li>
                <a href>Home</a>
              </li>
              <li>
                <a href>About</a>
              </li>
              <li>
                <a href>Blog</a>
              </li>
              <li>
                <a href>Contact</a>
              </li>
            </ul>
          </nav>
          <span className="hamburger" id="button">
            <i className="fa-solid fa-bars" />
          </span>
        </div>
      </header>
    </div>
  );
}
