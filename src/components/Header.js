import Link from "./Link";
import "../stylesheets/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="links">
        <Link content="Inicio" />
        <Link content="Hoy" active={true} />
        <Link content="Siguiendo" />
      </div>
      <div className="searchbar">
        <i className="fa fa-search"></i>
        <input placeholder="Buscar" />
      </div>
      <div className="icons">
        <i className="fa fa-bell" />
        <i className="fa fa-comment-dots" />
        <i className="fa fa-user" />
      </div>
    </header>
  );
};

export default Header;
