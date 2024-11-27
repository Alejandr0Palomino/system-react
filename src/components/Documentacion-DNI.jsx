import "./../styles/Documentacion.css";
import { Link } from "react-router-dom";

export default function ApiDocumentation() {
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
        <h1>Consulta DNI</h1>
        <p className="subtitle">Búsqueda por número de RUC</p>

        <section>
          <h2>Consideraciones</h2>
          <p>Los datos se obtienen del padrón reducido de SUNAT.</p>
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
                  <td>string</td>
                  <td>application/json</td>
                </tr>
                <tr>
                  <td>Content-Type</td>
                  <td>string</td>
                  <td>application/json</td>
                </tr>
                <tr>
                  <td>Authorization</td>
                  <td>string</td>
                  <td>Bearer {'{token}'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Body</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dni</td>
                  <td>string</td>
                  <td>11 dígitos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>JSON</h2>
          <pre className="json-container">
            {JSON.stringify(
              {
                data: {
                  direccion: "JR. ANDAHUAYLAS NRO. 100 INT. 201 URB. BARRIOS ALTOS",
                  direccion_completa:
                    "JR. ANDAHUAYLAS NRO. 100 INT. 201 URB. BARRIOS ALTOS - LIMA LIMA",
                  ruc: "20000000000",
                  nombre_o_razon_social: "EMPRESA DEMO",
                  estado: "ACTIVO",
                  condicion: "HABIDO",
                  departamento: "LIMA",
                  provincia: "LIMA",
                  distrito: "MAGDALENA DEL MAR",
                  ubigeo_sunat: "150101",
                },
              },
              null,
              2
            )}
          </pre>
        </section>
      </main>
    </div>
  );
}
