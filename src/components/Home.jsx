import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './Home.css'
import logouleam from '../imagenes/logouleam.png'
import foto from '../imagenes/foto.jpeg'




const Home = () => {
    return (
        <>
            <body>
  <header class="cabeza">
    <div class="logo">
      <Link to={'/'}>
        <img src={logouleam} alt="Logo" />
      </Link>
    </div>

    <div class="botones-main">
      <Link className='link' to={'/Login'}>
        <button class="boton-home">Iniciar Sesión</button>
      </Link>
      <Link className='link' to={'/Registro'}>
        <button class="boton-home">Registrarse</button>
      </Link>
    </div>
  </header>

  <main class="cuerpo-main">
    <div class="textoindex">
      <section class="texto_index">
        <h1>¡Bienvenido!</h1>
        <ul>
          <li>Encuentra los diferentes tipos de revistas en nuestra página</li>
          <li>Echa un vistazo a lo que tenemos para ti</li>
          <li>Inicia sesión para ver las revistas universitarias</li>
        </ul>
      </section>
    </div>

    <div class="imagen">
      <img src={foto} alt="imagen" />
    </div>
  </main>

  <footer>
    <p>Copyright Jeremy Mero 2023</p>
  </footer>
</body>

        </>
    );
};

export default Home;