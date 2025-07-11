import { NavLink } from "react-router-dom";
import {
  FaUsers,
  FaBoxOpen,
  FaCalendarAlt,
  FaPlusCircle,
} from "react-icons/fa";

export const Home = () => {
  return (
    <main className="page-content">
      {/*{isLoggedIn && <Header />}*/}

      <div className="title-container">
        <h1>Bienvenido</h1>
      </div>
      
      <div className="card-grid">
        
          <NavLink to="/usuarios" className="links">
            <div className="card">
              <h2>Usuarios</h2>
              <FaUsers className="icon-home" />
            </div>
          </NavLink>

          <NavLink to="/inventario" className="links">
            <div className="card">
              <h2>Inventario</h2>
              <FaBoxOpen className="icon-home" />
            </div>
          </NavLink>

          <NavLink to="/eventos-pasados" className="links">
            <div className="card">
              <h2>Eventos Pasados</h2>
              <FaCalendarAlt className="icon-home" />
            </div>
          </NavLink>

          <NavLink to="/nuevo-evento" className="links">
            <div className="card">
              <h2>Nuevo Evento</h2>
              <FaPlusCircle className="icon-home" />
            </div>
          </NavLink>

        <NavLink to="/eventos-asignados" className="links">
          <div className="card">
            <h2>Eventos Asignados</h2>
            <FaCalendarAlt className="icon-home" />
          </div>
        </NavLink>
      </div>
      {/*{isLoggedIn && <Footer />}*/}
    </main>
  );
};
