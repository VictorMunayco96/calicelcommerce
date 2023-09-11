import React from "react";
import CardWidget from "../cardWidget/CardWidget";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Calicel
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Ofertas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Tienda
              </a>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="/">Celulares</a></li>
            <li><a className="dropdown-item" href="/">Accesorios</a></li>
            <li><a className="dropdown-item" href="/">Cargadores</a></li>
          </ul>
        </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4"></ul>
          <form className="d-flex col-lg-2 text-white">En el Carrito </form>

          <button 
            type="button"
            className="btn btn-danger pd-2"
           
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <CardWidget />
            
          </button>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
