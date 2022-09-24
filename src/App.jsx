import "./App.css";
import Comentario from "./Comentario";
import Comment from "./Comment";
import Tarjeta from "./Tarjeta";

const MENSAJE = "BIENVENIDOS MENSAJSE";

const presionoClick = ()=>{
  alert("click");
  contador = 100;
  alert(contador);
}

let contador = 0;

function App() {


  return (
    <div className="App">
      <h1>{MENSAJE}</h1>
      <h1>{ contador }</h1>
      <div className="container">
        <Tarjeta descripcion="Harry Potter" imagen="movie1.png" />
        <Tarjeta descripcion="El señor de los anillos" imagen="movie2.jpg" />
        <Tarjeta descripcion="Thor Amor y Trueno" imagen="movie3.jpg" />
      </div>
      <div className="comentarios" onClick={presionoClick}>
       <Comment nombre="Juan Pablo" comentario="Lorem Ipsidasdsad asdasd asdas" />
       <Comentario nombre="Pedro Perez" comentario="Lorem Ipsidasdsad asdasd asdas" />
       <Comentario nombre="Laura Ramirez" comentario="Lorem Ipsidasdsad asdasd asdas" />
       <Comentario nombre="Pedro Perez" comentario="Lorem Ipsidasdsad asdasd asdas" />
       <Comentario nombre="Pedro Perez" comentario="Lorem Ipsidasdsad asdasd asdas" />
       <Comentario nombre="Pedro Perez" comentario="Lorem Ipsidasdsad asdasd asdas" />
      </div>
    </div>
  );
}

export default App;
