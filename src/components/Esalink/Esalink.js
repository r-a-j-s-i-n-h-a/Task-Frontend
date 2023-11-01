import React from "react";
import "./Esalink.css";

export default function Esalink() {
  return (
    <>
      <div>
        <div className="body">
          <div className="header">
            <div className="mainesa">
              <div className="maintext">EsaLink</div>
              <span className="data">Data Integration</span>
            </div>
            <button className="btn" type="submit">
              {" "}
              Facturation électronique 2024
            </button>
            <ul className="links">
              <ul><a>Expertise</a> </ul>
              <ul><a>Solution</a> </ul>
              <ul><a>Services</a> </ul>
              <ul><a> Blog</a></ul>
            </ul>
            <span className="conn">CONNEXION TMA</span>
            <button className="btn2" type="submit">
              Obtenir une démo
            </button>
            <span className="fr">FR</span>
          </div>
          <div className="isoimg">
            {" "}
            <img
              className="isi"
              src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fiso-27001.c9102e6a.webp&w=1080&q=75"
            ></img>{" "}
          </div>
          <h1 className="la">La dématérialisation</h1>
          <h1 className="la2">au service de votre business</h1>
          <h1 className="la3">
            Esalink vous accompagne dans la digitalisation de vos flux B2B
          </h1>
          <div className="btns">
            <button className="btn2" type="submit">
              Trouver votre solution EDI
            </button>
            <button className="btn2" type="submit">
              Passer à la facturation électronique
            </button>
          </div>
          <div className="images">
            <a href="https://www.esalink.com/solutions/tradexpress/">
              {" "}
              <img src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fgenerix-white.e5ab8b0c.webp&w=256&q=75"></img>{" "}
            </a>
            <a href="https://www.esalink.com/solutions/cleo/">
              {" "}
              <img src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcleo-white.ad4618e5.webp&w=128&q=75"></img>{" "}
            </a>
            <a href="https://www.esalink.com/solutions/hubtimize/">
              {" "}
              <img src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FHUBTIMIZE-white.19537ec6.webp&w=256&q=75"></img>{" "}
            </a>
            <a href="https://www.esalink.com/solutions/ibm-sterling/">
              {" "}
              <img src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fibm-white.7d4e8780.webp&w=128&q=75"></img>{" "}
            </a>
            <a>
              {" "}
              <img src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fgs1-white.c6b5f462.webp&w=128&q=75"></img>{" "}
            </a>
            <a>
              {" "}
              <img src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffne-white.f8c056bc.webp&w=640&q=75"></img>{" "}
            </a>
          </div>
          <div className="mainimg">
            <img
              className="mm"
              src="https://www.esalink.com/_next/static/media/globe_white_block.6699e2aa.svg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
