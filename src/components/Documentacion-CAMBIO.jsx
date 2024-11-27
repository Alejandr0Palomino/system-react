import "./../styles/Documentacion.css";
import { Link } from "react-router-dom";

export default function ApiDocumentationCambio() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-content">
          <div className="logo">DOCUMENTACIÓN</div>
          <ul className="nav-list">
            <li>
              <Link to="/">INICIO</Link>
            </li>
            <li>
              <Link to="/panel">otra pagina</Link>
            </li>
            <li>
              <Link to="/token">otra pagina</Link>
            </li>
            <li className="active">
              <div className="nav-item-with-dropdown">
                <span>DOCUMENTACIÓN</span>
                <span>▼</span>
              </div>
              <ul className="sub-nav-list">
                <li>
                  <Link to="/documentacion/tipo-cambio">Tipo-cambio</Link>
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
      <main className="main-content">
        <br />
        <h1>Consulta Tipo de Cambio</h1>
        <p className="subtitle">Información sobre la consulta del tipo de cambio</p>

        <section>
          <h2>Consideraciones</h2>
          <ul>
            <li>Este servicio utiliza datos actualizados de fuentes oficiales.</li>
            <li>Se recomienda usar un token de autorización válido para realizar consultas.</li>
            <li>El tipo de cambio está disponible para soles (PEN) a dólares (USD).</li>
          </ul>
        </section>

        <section>
          <h2>Endpoint</h2>
          <p>
            <span className="method">GET</span> http://localhost:8080/api/tipocambio
          </p>
        </section>

        <section>
          <h2>Headers</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Accept</td>
                  <td>String</td>
                  <td>application/json</td>
                </tr>
                <tr>
                  <td>Authorization</td>
                  <td>String</td>
                  <td>Bearer {"{token}"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Parámetros</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>moneda_origen</td>
                  <td>String</td>
                  <td>PEN</td>
                </tr>
                <tr>
                  <td>moneda_destino</td>
                  <td>String</td>
                  <td>USD</td>
                </tr>
                <tr>
                  <td>fecha</td>
                  <td>String</td>
                  <td>Fecha de consulta (formato yyyy-mm-dd)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Respuesta 200</h2>
          <pre className="json-container">
            {`{
  "id": 1,
  "fecha": "2024-09-05",
  "compra": 3.793,
  "venta": 3.797,
  "paralelo": 3.74300000003
}`}
          </pre>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Documentación API. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
