import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Importamos useNavigate
import "./../styles/Inicio.css";

const Inicio = () => {
  const navigate = useNavigate(); // Inicializamos useNavigate

  const handleInicioClick = () => {
    navigate("/", { replace: true }); // Navegamos a la misma página
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-content">
          <div className="logo">DOCUMENTACIÓN</div>
          <ul className="nav-list">
            <li>
              <Link to="/" onClick={handleInicioClick}>
                INICIO
              </Link>
            </li>
            <li>
              <Link to="/panel">Otra página</Link>
            </li>
            <li>
              <Link to="/token">Otra página</Link>
            </li>
            <li className="active">
              <div className="nav-item-with-dropdown">
                <span>DOCUMENTACIÓN</span>
                <span>▼</span>
              </div>
              <ul className="sub-nav-list">
                <li>
                  <Link to="/documentacion/tipo-cambio">TIPO-CAMBIO</Link>
                </li>
                <li>
                  <Link to="/documentacion/dni">Consulta DNI</Link>
                </li>
                <li>
                  <Link to="/documentacion/ruc">Consulta RUC</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="content">
        <header className="header">
          <h2>Bienvenido al Sistema</h2>
        </header>

        <section className="body">
          <div className="alert-box">
            <p>
              Te sugerimos usar clientes REST como Postman e Insomnia para probar
              tus APIs sin la complicación de codificar.
            </p>
          </div>

          <div className="file-box">
            <div className="file-icon">📁</div>
            <p>ApiPeruDevExport.postman_collection.zip</p>
            <p>
              Descarga el archivo de Postman para probar la API:{" "}
              <a href="/postman_collection.json" download>
                Descargar aquí
              </a>
            </p>
          </div>

          <p className="update-message">
            Actualiza el <span className="token">{"{{token}}"}</span> en la sección correspondiente de variables.
          </p>

          <button className="next-button">
            Siguiente
            <br />
            Consulta DNI
          </button>

          <p className="update-info">Última actualización hace un mes</p>
        </section>
      </main>
    </div>
  );
};

export default Inicio;
