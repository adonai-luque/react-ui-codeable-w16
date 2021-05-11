import Link from "./Link"

const Header = () => {
  return (
    <header className="header">
      <div className="links-container">
        <Link content="Inicio" />
        <Link content="Hoy" active={true} />
        <Link content="Siguiendo" />
      </div>
      <div className="searchbar-container">
        <i className="fa fa-search"></i>
        <input placeholder="Buscar" />
      </div>
      <div className="icons-container">
        <i className="fa fa-bell" />
        <i className="fa fa-comment-dots" />
        <i className="fa fa-user" />
      </div>
    </header>
  );
};

export default Header;
