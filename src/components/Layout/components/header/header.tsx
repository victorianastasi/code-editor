export const Header = () => {
  
  return (
    <header className="o-header navbar" role="banner">
      <a href="#main" className="skip-to-main-content-link">
        Saltar al contenido principal
      </a>
      <div className="container header-container">
        <a href="https://gcba.github.io/" className="navbar-brand">
          <img className="d-none d-xl-block" src="./assets/header/logo_obelisco.svg" alt="Obelisco" />
          <img className="d-xl-none" src="./assets/header/logo_obelisco_mobile.svg" alt="Obelisco" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHomeObelisco" aria-controls="navbarHomeObelisco" aria-expanded="false" aria-label="Menú"></button>
        <div className="collapse navbar-collapse" id="navbarHomeObelisco">
          <div className="navbar-content">
            <div className="navbar-sections">
              <nav>
                <p className="navbar-sections-title">Secciones</p>
                <ul className="nav nav-pills nav-sections">
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="https://gcba.github.io/Obelisco-V2/getting-started"><span>Empezar con Obelisco</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="https://gcba.github.io/Obelisco-V2/components"><span>Librería</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="https://gcba.github.io/obelisco-demo/"><span>Plantillas</span></a>
                  </li>
                  <li className="dropdown">
                    <button type="button" className="btn btn-dropdown btn-lg" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="btn-dropdown-text ellipsis-1">Versiones</span>
                      <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="https://gcba.github.io/Obelisco-V2/documentation">
                        <span className="item-text">Migrar a Obelisco v.2</span>
                      </a>
                      <a className="dropdown-item" href="https://gcba.github.io/obelisco-v1">
                        <span className="item-text">Obelisco v.1
                          <span className="fst-italic">(deprecado)</span></span>
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="header-backdrop"></div>
    </header>
  );
};
