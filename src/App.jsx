import Tarjeta from 'componentes/Tarjeta/Tarjeta.jsx'
import 'estilos/index.css'
import styles from 'estilos/App.module.css'

function App() {
  return (
    <main className={styles.principal}>
      <h1 className={styles.encabezadoPrincipal}>Tarjeta de Presentación React</h1>
      <ul className={styles.listaTarjetas}>
        <li className={styles.listaTarjetasItem}>
          <Tarjeta
            imagen={'https://i.blogs.es/baed1b/130515-splatoon-tlqns/1366_2000.webp'}
            imagen_alt={'Un vibrante enfrentamiento de tinta e Inklings desarrollándose en un entorno urbano industrial bajo un cielo.'}
            nombre={'Splatoon™'}
            profesion={'Shooter en tercera persona | Wii U | 2015'}
            descripcion={`
              Splatoon es un videojuego desarrollado por Nintendo, lanzado originalmente en mayo de 
              2015 en exclusiva para la consola Wii U.
              \nFue un título revolucionario porque redefinió el género de los shooters, 
              alejándose de la violencia realista militar para ofrecer una 
              experiencia colorida, fresca y centrada en el control del territorio.  
            `}
          />
        </li>
        <li>
          <Tarjeta
            imagen={'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/store/software/switch/70010000000529/b0b183a9860296016649fadb03b929411e7e5e0809af241e2e9652ebf0c5a715'}
            imagen_alt={'Caótica batalla de pintura entre dos equipos de Inklings en un entorno urbano estilo skatepark con un gran escenario de conciertos al fondo.'}
            nombre={'Splatoon™ 2'}
            profesion={'Shooter en tercera persona | Nintendo Switch | 2017'}
            descripcion={`
              Controlas a los Inklings (y Octolings), personajes con la habilidad de transformarse de forma humanoide a forma de calamar.
              El juego destaca por su estética urbana y moderna. La moda (ropa y accesorios que dan bonificaciones) y la 
              música (una mezcla de pop, rock y electrónica) son partes fundamentales de su identidad.
            `}
          />
        </li>
        <li>
          <Tarjeta
            imagen={'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/store/software/switch/70010000046395/4555efa9f2061f7d1e1646ab3d3af790a7491270b1b3e32e730273e9ac096827'}
            imagen_alt={'batalla caótica y vibrante ambientada en un desierto rocoso bajo un cielo azul claro.'}
            nombre={'Splatoon™ 3'}
            profesion={'Shooter en tercera persona | Nintendo Switch 1 y 2 | 2022'}
            descripcion={`
              Splatoon 3 perfeccionó la fórmula con nuevas armas (como arcos y katanas de tinta), movimientos de esquiva (el Calamarrodar), 
              taquillas personalizables y un juego de cartas integrado.
              Modos competitivos con reglas específicas (como controlar una torre o llevar una almeja a la base enemiga) para subir de rango.
              Una campaña para un solo jugador llena de plataformas y puzles creativos, ideal para aprender a dominar las armas.
            `}
          />
        </li>
      </ul>
    </main>
  );
};

export default App;
