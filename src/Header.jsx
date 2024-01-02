import "./styles.css";
import logo from "./assets/img/logo.jpg";
import gif from "./assets/img/GIF.gif";
import phone from "./assets/img/phone.png";
import mail from "./assets/img/mail.png";
import facebook from "./assets/img/facebook.png";
import twiter from "./assets/img/twiter.png";
import instagram from "./assets/img/instagram.png";
import linked from "./assets/img/linked.png";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

export function NavBar({ text_navBar }) {
  return <a>{text_navBar}</a>;
}

export function Button_Circ({ text_button }) {
  return <button className="botoncirc">{text_button}</button>;
}

export function Navegacion() {
  return (
    <div className="padrehader">
      <div className="navBar">
        <div>
          <img className="logito" src={logo}></img>
        </div>
        <div className="enlacesnavbar">
          <NavBar text_navBar={"Inicio"} />
          <NavBar text_navBar={"Acerca de"} />
          <NavBar text_navBar={"Proyectos"} />
          <NavBar text_navBar={"Testimonios"} />
          <NavBar text_navBar={"Equipos"} />
          <Button_Circ text_button={"Contactenos"} />
        </div>
      </div>
    </div>
  );
}

export function Baner() {
  return (
    <div className="baner">
      <div className="padretextobaner">
        <div className="textobaner">
          <h1 className="cibertech">CIBERTERCH</h1>
          <h3 className="lema">
            Programamos soluciones, creamos experiencias.
          </h3>
          <Button_Circ className="loadmore" text_button="Load more" />
        </div>
        <div className="imagenbaner">
          <img className="gif" src={gif}></img>
        </div>
      </div>
    </div>
  );
}

export function Contactbanner() {
  return (
    <div className=" contactbanner">
      <div className="contactbannerpadre">
        <div className="lemita">
          <p>Inovamos en cada</p>
          <h3>Línea de código</h3>
          <p>Soportamos en cada desafio</p>
        </div>
        <div className="socialmedia">
          <div className="mailphone">
            <div className="phone">
              <img className="phoneimg" src={phone}></img>
              <p>+57 3154852832</p>
            </div>
            <div className="mail">
              <img className="mailimg" src={mail}></img>
              <p>cibertech@cibertech.com</p>
            </div>
          </div>
          <div className="media">
            <div>Social media</div>
            <div className="mediaimg">
              <img className="mediaimg" src={facebook}></img>
              <img className="mediaimg" src={twiter}></img>
              <img className="mediaimg" src={instagram}></img>
              <img className="mediaimg" src={linked}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
