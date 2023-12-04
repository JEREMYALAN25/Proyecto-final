import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Principal.css';
import logouleam from '../imagenes/logouleam.png'



const Revistas = () => {
  const [revistas, setRevistas] = useState([
    { nombre: 'Ciencias Naturales', imagen: ' https://books.google.es/books/content?id=wqgiIixiv_QC&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U13KXJgk6s_olcTBgVb7gDkVCDBJQ&w=1280 ', enlace: 'https://books.google.es/books?id=wqgiIixiv_QC&lpg=PA9&ots=xf6rFxiRVE&dq=ciencias%20naturales&lr&hl=es&pg=PP1#v=onepage&q&f=true' },
            { nombre: 'Ciencias Sociales', imagen: 'https://books.google.es/books/content?id=jqmWKTYOg4kC&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U3v45M9n3i4Gq6dBOYJcXLAFPaXXw&w=1280', enlace: 'https://books.google.es/books?id=jqmWKTYOg4kC&lpg=PA9&ots=itnb6IqLE-&dq=ciencias%20sociales&lr&hl=es&pg=PP1#v=onepage&q=ciencias%20sociales&f=true' },
            { nombre: 'Humanidad', imagen: 'https://books.google.es/books/content?id=frkCW0y7dJ8C&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U3oSeDMpmRJUMOiaojOFkhz9eUIkQ&w=1280', enlace: 'https://books.google.es/books?id=frkCW0y7dJ8C&lpg=PA4&ots=4Qur9bw81A&dq=humanidad&lr&hl=es&pg=PP1#v=onepage&q=humanidad&f=true' },
            { nombre: 'Tecnologias de alimentos', imagen: 'https://books.google.es/books/publisher/content?id=-zKjDwAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U1DwQTadcMCtqpev6fgS5h0hqCNmg&w=1280', enlace: 'https://books.google.es/books?id=-zKjDwAAQBAJ&lpg=PA3&ots=IulwTVK54S&dq=ingenieria%20y%20tecnologia&lr&hl=es&pg=PP1#v=onepage&q&f=true' },
            { nombre: 'Tecnologias de la informacion', imagen: 'https://books.google.es/books/content?id=kJrTwLzAzhMC&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U3SindxJ7rc1UwBBNjdYTnpl5DYwg&w=1280', enlace: 'https://books.google.es/books?id=kJrTwLzAzhMC&lpg=PA13&ots=712s8vLkdA&dq=tecnologia%20de%20la%20informacion%20libros&lr&hl=es&pg=PP1#v=onepage&q=tecnologia%20de%20la%20informacion%20libros&f=true' },
            { nombre: 'Medicina', imagen: 'https://books.google.es/books/content?id=RAabGs4siI4C&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U2z6SGY4ie67lhjuZyRnlYMa_OZqw&w=1280', enlace: 'https://books.google.es/books?id=RAabGs4siI4C&lpg=PA237&ots=-nRaDB-7zp&dq=medicina&lr&hl=es&pg=PP1#v=onepage&q=medicina&f=true' },
            { nombre: 'Fonologia', imagen: 'https://books.google.es/books/content?id=tRSOo-Msmh4C&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U0d44lpPoDVNQTFkHoxiuFBjOLwbw&w=1280', enlace: 'https://books.google.es/books?id=tRSOo-Msmh4C&lpg=PR3&ots=25K5RqGgga&dq=fonologia&lr&hl=es&pg=PP1#v=onepage&q=fonologia&f=true' },
            { nombre: 'Contabilidad', imagen: 'https://books.google.es/books/publisher/content?id=JJctEAAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&ots=knmuFdIBJv&sig=ACfU3U0wjk3GWdb-dluUtDUJE8poQvzeTQ&w=1280', enlace: 'https://books.google.es/books?id=JJctEAAAQBAJ&lpg=PP1&ots=knmuFdIBJv&dq=contabilidad&lr&hl=es&pg=PP1#v=onepage&q=contabilidad&f=true' },
            { nombre: 'Trabajo Social', imagen: 'https://books.google.es/books/content?id=NO3MSZwSVloC&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U0zFb3mOyR9Tb9GBoMWOonvlQtmZw&w=1280', enlace: 'https://books.google.es/books?id=NO3MSZwSVloC&lpg=PA77&ots=jqIBpoKVzn&dq=trabajo%20social&lr&hl=es&pg=PP1#v=onepage&q=trabajo%20social&f=true' },
  ]);

  const [busqueda, setBusqueda] = useState("");

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const renderRevistas = () => {
    if (busqueda === "") {
      return revistas.map((revista) => (
        <div className="image-box">
          <img src={revista.imagen} alt={revista.nombre} />
          <p><a href={revista.enlace} target="_blank">Enlace a {revista.nombre}</a></p>
        </div>
      ));
    } else {
      return revistas.filter((revista) => revista.nombre.toUpperCase().includes(busqueda.toUpperCase()));
    }
  };

  return (
    <div>
     
      <header className='cabeza-main' >
                    <div className="logo">
                        <Link to={'/Principal'}>  <img src={logouleam} alt="Logo" /></Link>
                    </div>
        <h1>Revistas Universitarias</h1>
        <nav>
        <Link to={'/Perfil'}><p>Perfil</p></Link>

          <Link to={'/'} ><p>Cerrar Sesión</p></Link>

        </nav>
      </header>

<main>
  <div className="search-box">
    <input
      type="text"
      placeholder="Buscar revistas"
      value={busqueda}
      onChange={handleBusqueda}
    />
  </div>
  {renderRevistas()}

</main>



<footer>
  <p>Copyright Jeremy Mero 2023</p>
</footer>
</div>
);
};

export default Revistas;






