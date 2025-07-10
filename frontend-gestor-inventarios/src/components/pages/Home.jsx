import './home.css'
import { FaUsers, FaBoxOpen, FaCalendarAlt, FaPlusCircle } from 'react-icons/fa';

export const Home = () => {

  return (

    <div className="page-layout">
      {/*{isLoggedIn && <Header />}*/}
      <main className="page-content">
        <div className="home-container">
          <h1>Bienvenido</h1>

          <div className="card-grid">
              <>
                <div className="card">
                  <h2>Usuarios</h2>
                  <FaUsers className="icon-home" />
                </div>
                <div className="card" >
                  <h2>Inventario</h2>
                  <FaBoxOpen className="icon-home" />
                </div>
                <div className="card" >
                  <h2>Eventos Pasados</h2>
                  <FaCalendarAlt className="icon-home" />
                </div>
                <div className="card" >
                  <h2>Nuevo Evento</h2>
                  <FaPlusCircle className="icon-home" />
                </div>
              </>

            
              <div className="card">
                <h2>Eventos Asignados</h2>
                <FaCalendarAlt className="icon-home" />
              </div>


          </div>
        </div>
      </main>
      {/*{isLoggedIn && <Footer />}*/}
    </div>
  );
};
